#!/usr/bin/env node
const {Bot} = require('../index.js')

const bot = new Bot()

bot
  .init({
    username: process.env.KB_USERNAME,
    paperkey: process.env.KB_PAPERKEY,
    verbose: false,
  })
  .then(() => {
    console.log('Your bot is initialized. It is logged in as ' + bot.myInfo().username)

    const channel = {
      name: 'kbot,' + bot.myInfo().username,
      public: false,
      topic_type: 'chat',
    }

    const sendArg = {
      channel: channel,
      message: {
        body:
          'Hello kbot! This is ' +
          bot.myInfo().username +
          ' saying hello from my device ' +
          bot.myInfo().devicename,
      },
    }

    bot
      .chatSend(sendArg)
      .then(() => {
        console.log('Message sent!')
      })
      .catch(err => console.log('Message failed to send', err))
  })
  .catch(err => console.log(err))
