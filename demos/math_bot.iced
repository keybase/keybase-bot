#!/usr/bin/env iced
{Bot}  = require '../index.js'
mathjs = require 'mathjs'

#
# This bot replies to any message from any user,
# starting with `/math` (in any channel)
# by actually trying to do the math. For example
# send it :
#
#          /math sqrt(pi/2) * 3!`
#

# -----------------------------------------------------------------------------

msgReply = (s) ->
  try
    ans = '= ' + mathjs.eval(s).toString()
  catch e
    a1 = Math.floor(Math.random() * 10)
    b1 = Math.floor(Math.random() * 10)
    a2 = Math.floor(Math.random() * 10)
    b2 = Math.floor(Math.random() * 10)
    eqn = "(#{a1} + #{b1}i) * (#{a2} + #{b2}i)"
    ans = "Sorry, I can't do that math. Did you know #{eqn} = #{mathjs.eval(eqn).toString()}? True."
  return ans

# -----------------------------------------------------------------------------

bot = new Bot()

bot.init (err) ->
  if (err)
    console.log err
  else
    console.log 'Bot is initialized '
    console.log "I am me: #{JSON.stringify(bot.myInfo())}"

    onMessages = ({messages, channel}) ->
      for m in messages
        if m.msg.content.text.body[...6] is '/math '
          reply = {body: msgReply(m.msg.content.text.body[6...])}
          bot.chatSend {channel, message: reply}, (err, res) ->
            if (err)
              console.log err

    console.log 'Beginning watch for new messages. Tell anyone to send a message to #{bot.myInfo().username} starting with /math'
    bot.watchAllChannelsForNewMessages {onMessages}
