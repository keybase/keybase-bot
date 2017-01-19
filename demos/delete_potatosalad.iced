#!/usr/bin/env iced
{Bot} = require '../index.js'

#
# This bot auto-deletes anything in chris,kbot that contains
# "potatosalad" in it, as a test.
#

bot = new Bot()

bot.init =>

  console.log 'Bot is initialized...'

  channel =
    name: 'chris,kbot'
    public: false
    topic_type: 'chat'

  while true
    await bot.chatRead {channel, peek: true}, defer err, res
    for m, i in res.messages

      if m.msg?.content?.text?.body?.indexOf('potatosalad') >= 0
        console.log "\nI should delete message_id=#{m.msg.id}", "--->", JSON.stringify(m.msg.content.text.body)[...1000]
        await bot.chatDelete {channel, messageId: m.msg.id}, defer err
        if err?
          console.log err
      else
        # noop
    console.log "Waiting 5 seconds..."
    await setTimeout defer(), 5000
