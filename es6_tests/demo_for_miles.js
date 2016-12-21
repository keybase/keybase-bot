// @flow

let keybaseChatBot = require('../index.js')
let bot = new keybaseChatBot.Bot()
let channel = {
  name: 'chris,mlsteele',
  public: false,
  topic_type: 'chat',
}

function sendMessage (body, cb) {
  let message = {body}
  bot.chatSend({channel, message}, (err, res) => {
    if (err) {
      console.log(err, JSON.stringify(res))
    }
    cb()
  })
}

// ----------------------------------------------------------------------------

function loop () {

  // let's send a random message once in a while to see if it comes back as unread
  if (Math.random() < 0.1) {
    sendMessage(`Bot saying hi! The time is ${new Date().toString()}`, () => {})
  }

  bot.chatRead({channel, unreadOnly: true}, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      for (let m of res.messages) {
        console.log(`GOT NEW MESSAGE`, m)
      }
      if (res.messages.length) {
        sendMessage(`Bot replying to new message! The time is ${new Date().toString()}`, () => {})
      }
    }
    setTimeout(loop, 500)
  })
}

// ----------------------------------------------------------------------------

bot.init(() => {
  console.log('Bot is initialized ')
  console.log(`I am me: ${JSON.stringify(bot.myInfo())}`)
  loop()
})
