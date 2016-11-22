var keybase_chat_bot = require('../index.js')

bot = new keybase_chat_bot.Bot();
bot.init(() => {
  console.log("Bot is initialized", bot.username)
})
