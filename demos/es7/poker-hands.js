#!/usr/bin/env node
const Bot = require('../../lib/index.js')
const {Hand} = require('pokersolver')

const bot = new Bot()

const deck =
  '2s,3s,4s,5s,6s,7s,8s,9s,Ts,Js,Qs,Ks,As,2c,3c,4c,5c,6c,7c,8c,9c,Tc,Jc,Qc,Kc,Ac,2d,3d,4d,5d,6d,7d,8d,9d,Td,Jd,Qd,Kd,Ad,2h,3h,4h,5h,6h,7h,8h,9h,Th,Jh,Qh,Kh,Ah'
const deckI2S = deck.split(',').reduce((prev, curr, ind) => {
  prev[ind] = curr
  return prev
}, {})

// Tells the cards in user's poker flip
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

          if (msg.content.type === 'flip') {
            let resolved
            while (!resolved) {
              try {
                const flip = await bot.chat.loadFlip(msg.conversationId, msg.content.flip.flipConvId, msg.id, msg.content.flip.gameId)
                if (flip.phase === 2) {
                  resolved = true

                  if (flip.resultInfo.typ !== 3 || !flip.resultInfo.hands.find(x => x.target === 'me')) {
                    await bot.chat.send(msg.conversationId, {
                      body: `Invalid flip type! Please do a /flip cards 5 me instead.`,
                    })
                    return
                  }

                  const myHand = flip.resultInfo.hands.find(x => x.target === 'me')
                  const hand = Hand.solve(myHand.hand.map(card => deckI2S[card]))
                  await bot.chat.send(msg.conversationId, {
                    body: `You got ${hand.descr}.`,
                  })
                }
              } catch (err) {
                console.log('flip fetch error', err)
              }
            }
            return
          }

          await bot.chat.send(msg.conversationId, {
            body: `Hi ${msg.sender.username}! Do a /flip cards 5 me and I'll tell what's in your poker hand!`,
          })
        } catch (err) {
          console.error(err)
        }
      },
      e => console.error(e)
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
