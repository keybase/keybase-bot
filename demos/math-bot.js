#!/usr/bin/env node
const Bot = require('../lib/index.js')
const mathjs = require('mathjs')

//
// This bot replies to any message from any user,
// starting with `/math` (in any channel)
// by actually trying to do the math. For example
// send it :
//
//          /math sqrt(pi/2) * 3!`
//

const bot = new Bot()

const msgReply = s => {
  let a1, a2, ans, b1, b2, eqn
  try {
    ans = '= ' + mathjs['eval'](s).toString()
  } catch (e) {
    a1 = Math.floor(Math.random() * 10)
    b1 = Math.floor(Math.random() * 10)
    a2 = Math.floor(Math.random() * 10)
    b2 = Math.floor(Math.random() * 10)
    eqn = '(' + a1 + ' + ' + b1 + 'i) * (' + a2 + ' + ' + b2 + 'i)'
    ans = "Sorry, I can't do that math. Did you know " + eqn + ' = ' + mathjs['eval'](eqn).toString() + '? True.'
  }
  return ans
}

function main() {
  const username = process.env.KB_USERNAME
  const paperkey = process.env.KB_PAPERKEY
  bot
    .init(username, paperkey)
    .then(() => {
      console.log('I am me!', bot.myInfo().username, bot.myInfo().devicename)
      console.log('Beginning watch for new messages.')
      console.log(`Tell anyone to send a message to ${bot.myInfo().username} starting with '/math '`)
      const onMessage = message => {
        if (message.content.type === 'text') {
          const prefix = message.content.text.body.slice(0, 6)
          if (prefix === '/math ') {
            const reply = {body: msgReply(message.content.text.body.slice(6))}
            bot.chat.send(message.conversationId, reply)
          }
        }
      }
      const onError = e => console.error(e)
      bot.chat.watchAllChannelsForNewMessages(onMessage, onError)
    })
    .catch(error => {
      console.error(error)
      shutDown()
    })
}

function shutDown() {
  bot.deinit().then(() => process.exit())
}

process.on('SIGINT', shutDown)
process.on('SIGTERM', shutDown)

main()
