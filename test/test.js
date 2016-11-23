
var keybase_chat_bot = require('../index.js')

bot = new keybase_chat_bot.Bot();

bot.init(() => {

  console.log("Bot is initialized ")

  bot.chatList((err, list) => {
    console.log(JSON.stringify(list));
  })

  let channel = {
    name: "chris,mikem",
    public: false,
    topic_type: "chat"
  }

  let message = {body: `Hi Mike. The time is ${new Date().toString()}`}

  bot.chatSend({channel, message},(err, list) => {
    console.log("hot damn")
    console.log(err, JSON.stringify(list));
  });

})
