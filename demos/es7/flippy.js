#!/usr/bin/env node
const Bot = require('../../index.js')

/*
 * Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

async function main() {
  const bot = new Bot()

  const channel = {name: 'test'}

  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey)

    const onMessage = async message => {
      if (message.content.type === 'text') {
        // could probably normalize the body a little more before comparisons
        const messageBody = message.content.text.body.toLowerCase()
        switch (messageBody) {
          case 'new flip':
            await bot.chat.send(channel, {body: 'Starting a new flip... 🍇🍈🍉🍊🍋'})
            break
          case 'coin flip':
          case 'coyne flip':
            const {id} = message
            const flip = getRandomIntInclusive(0, 1) ? ':+1:' : ':-1:'
            await bot.chat.react(channel, id, flip)
            break
          default:
            break
        }
      }
    }

    const onError = e => console.error(e)
    bot.chat.watchChannelForNewMessages(channel, onMessage, onError)
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}

main()
