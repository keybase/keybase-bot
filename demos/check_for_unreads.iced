#!/usr/bin/env iced
{Bot} = require '../index.js'

#

bot = new Bot()

bot.init =>

  console.log 'Bot is initialized...'

  bot.chatList (err, res) ->
    if (err)
      console.log(err)
    else
      console.log "You have #{res.conversations.length} conversations."
      console.log res.conversations[0]
