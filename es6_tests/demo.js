// @flow

let mathjs = require('mathjs')
let keybaseChatBot = require('../index.js')
let bot = new keybaseChatBot.Bot()

function msgReply (s) {
  let ans = null
  try {
    console.log(JSON.stringify(s))
    ans = '= ' + mathjs.eval(s).toString()
  } catch (e) {
    console.log(e)
  }
  if (!ans) {
    ans = `Let me palindrome that!  ${s}` + [...s].reverse().join('')
  }
  return ans
}

bot.init(() => {
  console.log('Bot is initialized ')

  console.log(`I am me: ${JSON.stringify(bot.myInfo())}`)

  /*
  bot.chatList((err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${res.conversations.length} known conversations.`)
    }
  })

  let channel = {
    name: 'enyoc',
    public: false,
    topic_type: 'chat',
  }
  */
  //let message = {body: `Automated Message. The time is ${new Date().toString()}`}

  //bot.chatSend({channel, message}, (err, res) => {
  //  console.log(err, JSON.stringify(res))
  //})

  /*
  channel = {
    name: 'chris,kbot',
    public: false,
    topic_type: 'chat',
  }*/


  // bot.chatRead({channel}, (err, res) => {
  //   console.log(err, res)
  //   res.messages.forEach((m, i) => {
  //     console.log(i, m.msg)
  //   })
  // })

  let onMessages = ({messages, channel}) => {
    for (let m of messages) {
      let reply = {body: msgReply(m.msg.content.text.body)}
      bot.chatSend({channel, message: reply}, (err, res) => {
        if (err) {
          console.log(err)
        }
      })
    }
  }

  console.log('Beginning watch for new messages.')

  bot.watchAllChannelsForNewMessages({onMessages})
})
