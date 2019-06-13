#!/usr/bin/env node
const Bot = require('../../lib/index.js')

/*
 * Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const bot = new Bot()

async function main() {
  const channel = {
    name: process.env.KB_TEAM,
    public: false,
    topicType: 'chat',
    membersType: 'team',
    topicName: 'general',
  }

  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey)
    const info = bot.myInfo()
    console.log(`Flippy initialized with username ${info.username}.`)

    const onMessage = async message => {
      if (message.content.type === 'text') {
        // TODO: could probably normalize the body a little more before comparisons
        const messageBody = message.content.text.body.toLowerCase()
        switch (messageBody) {
          case 'new flip':
            console.log('Starting a new flip!')
            const messageToSend = {body: 'Starting a new flip...'}
            await bot.chat.send(channel, messageToSend)
            break
          case 'coin flip':
          case 'coyne flip':
            const flip = getRandomIntInclusive(0, 1) ? ':+1:' : ':-1:'
            console.log('Making a flip:', flip)
            await bot.chat.react(channel, message.id, flip)
            break
          default:
            break
        }
      }
    }

    const onError = e => console.error(e)
    console.log(`Listening in the general channel of ${channel.name}...`)
    await bot.chat.watchChannelForNewMessages(channel, onMessage, onError)
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
