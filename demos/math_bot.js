#!/usr/bin/env node
const Bot = require('../index.js').Bot
const mathjs = require('mathjs')

//
// This bot replies to any message from any user,
// starting with `/math` (in any channel)
// by actually trying to do the math. For example
// send it :
//
//          /math sqrt(pi/2) * 3!`
//

const msgReply = function(s) {
  let a1, a2, ans, b1, b2, eqn
  try {
    ans = '= ' + mathjs['eval'](s).toString()
  } catch (error) {
    console.error(error)
    a1 = Math.floor(Math.random() * 10)
    b1 = Math.floor(Math.random() * 10)
    a2 = Math.floor(Math.random() * 10)
    b2 = Math.floor(Math.random() * 10)
    eqn = '(' + a1 + ' + ' + b1 + 'i) * (' + a2 + ' + ' + b2 + 'i)'
    ans =
      "Sorry, I can't do that math. Did you know " + eqn + ' = ' + mathjs['eval'](eqn).toString() + '? True.'
  }
  return ans
}

const bot = new Bot()

async function main() {
  try {
    await bot.init({username: process.env.KB_USERNAME, paperkey: process.env.KB_PAPERKEY})
    console.log('I am me!', bot.myInfo().username, bot.myInfo().devicename)

    const onMessages = async o => {
      for (const m of o.messages) {
        try {
          if (m.msg.content.type === 'text') {
            const prefix = m.msg.content.text.body.slice(0, 6)
            if (prefix === '/math ') {
              const reply = {
                body: msgReply(m.msg.content.text.body.slice(6)),
              }
              await bot.chatSend({channel: o.channel, message: reply})
            }
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    console.log('Beginning watch for new messages.')
    console.log(`Tell anyone to send a message to ${bot.myInfo().username} starting with '/math '`)
    await bot.watchAllChannelsForNewMessages({onMessages})
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
