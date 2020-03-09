#!/usr/bin/env node
const Bot = require('../../lib/index.js')
const {Hand} = require('pokersolver')

const bot = new Bot()

// Utilities for deck parsing
const deck =
  '2s,3s,4s,5s,6s,7s,8s,9s,Ts,Js,Qs,Ks,As,2c,3c,4c,5c,6c,7c,8c,9c,Tc,Jc,Qc,Kc,Ac,2d,3d,4d,5d,6d,7d,8d,9d,Td,Jd,Qd,Kd,Ad,2h,3h,4h,5h,6h,7h,8h,9h,Th,Jh,Qh,Kh,Ah'
const deckI2S = deck.split(',').reduce((prev, curr, ind) => {
  prev[ind] = curr
  return prev
}, {})

// A very basic cache to prevent duplicate games. The key is the channel name,
// the value is the last game ID.
const gameCache = {}

// Flips and tells the cards
async function main() {
  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey)
    const info = bot.myInfo()
    console.log(`Bot initialized with username ${info.username}.`)

    console.log(`Listening for all messages...`)
    await bot.chat.watchAllChannelsForNewMessages(
      async msg => {
        try {
          console.log(msg)

          if (msg.channel.membersType !== 'impteamnative') {
            // Only react to direct messages.
            console.log(`Invalid type - ${msg.channel.membersType}`)
            return
          }

          if (msg.sender.username === info.username && msg.content.type !== 'flip') {
            // Our own message
            return
          }

          if (msg.sender.username === info.username && msg.content.type === 'flip') {
            if (gameCache[msg.channel.name] === msg.content.flip.gameId) {
              // We've already resolved this one. Flips executed locally can trigger
              // multiple 'flip' notifications.
              return
            } else {
              gameCache[msg.channel.name] = msg.content.flip.gameId
            }

            // Our flip, when flipping from the same machine expect the flip to
            let resolved
            while (!resolved) {
              try {
                const flip = await bot.chat.loadFlip(msg.conversationId, msg.content.flip.flipConvId, msg.id, msg.content.flip.gameId)
                if (flip.phase === 2) {
                  resolved = true

                  if (flip.resultInfo.typ !== 3 || !flip.resultInfo.hands.find(x => x.target === 'hand')) {
                    await bot.chat.send(msg.conversationId, {
                      body: `Invalid flip type! Expected /flip cards 5 hand.`,
                    })
                    return
                  }

                  const myHand = flip.resultInfo.hands.find(x => x.target === 'hand')
                  const hand = Hand.solve(myHand.hand.map(card => deckI2S[card]))
                  await bot.chat.send(msg.conversationId, {
                    body: `You got ${hand.descr}!`,
                  })
                  return
                }
              } catch (err) {
                console.log('flip fetch error', err)
              }
            }
            return
          }

          if (msg.content.type === 'text' && msg.content.text.body.toLowerCase().includes('hand')) {
            // Perform the flip
            await bot.chat.send(msg.conversationId, {
              body: `/flip cards 5 hand`,
            })
            return
          }

          await bot.chat.send(msg.conversationId, {
            body: `Hi ${msg.sender.username}! Send "hand" to me and I'll flip and tell you what's in your hand!`,
          })
        } catch (err) {
          console.error(err)
        }
      },
      e => console.error(e),
      {
        showLocal: true,
      }
    )
  } catch (error) {
    console.error(error)
  }
}

async function shutDown() {
  await bot.deinit()
  process.exit()
}

process.on('SIGINT', shutDown)
process.on('SIGTERM', shutDown)

main()
