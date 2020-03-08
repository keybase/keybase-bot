#!/usr/bin/env iced

# USAGE:
#    > KB_USERNAME=foo KB_PAPERKEY='whatever' ./puzzle-bot.iced
#
# demonstration of writing a Keybase bot in iced-coffee-script. Note
# that our bot library now deals in Promises, so we'll need to callbackify
# any functions.

Bot = require '../../lib/index.js'
bot = new Bot()

# --------------------------------------------------------------------------------

WINNERS = {}
PREV_OUTS = {}
GUESS_COUNT = 0

# --------------------------------------------------------------------------------

finalCheck = (inputStr, numInt) ->
  # assuming it's a valid positive int.
  digits = "#{numInt}".split ''
  counts = {}
  for d in digits
    counts[d] or= 0
    counts[d]++
  countKeys = Object.keys(counts).sort (a,b) -> a - b
  output = ""
  for k in countKeys
    output += counts[k] + k
  return {output, success: (output is inputStr)}

# --------------------------------------------------------------------------------

msgCheckAndReply = (s, senderName) =>
  GUESS_COUNT++
  isValidInt = (numInt = parseInt(s))? and not isNaN(numInt) and ("#{numInt}".indexOf('.') is -1) and (numInt.toString() is s)
  isValidFloat = (numFloat = parseFloat(s))? and not isNaN(numFloat) and (numFloat.toString() is s)
  numWinners = Object.keys(WINNERS).length
  numPlayers = Object.keys(PREV_OUTS).length
  prompt = "Tell me a number that generates itself."
  if isValidFloat and not isValidInt
    ans = "We all float down here, #{senderName}. #{prompt}"
  else if not isValidInt
    ans = prompt
  else if numInt is 0
    ans = "Quit joking. #{prompt}"
  else if numInt <= 0
    ans = "Negative numbers aren't real. #{prompt}"
  else if numInt > Number.MAX_SAFE_INTEGER - 1
    ans = "No, no, no. You're thinking too big. #{prompt}"
  else if numInt is 22
    ans = "The only thing 22 generates is shame. Tell me a _big_ number that generates itself."
  else if numInt <= 100
    ans = "I'm sorry, think bigger. #{prompt}"
  else
    {output, success} = finalCheck s, numInt
    if success
      WINNERS[senderName] = true
      winner_text = ("@#{k}" for k,v of WINNERS).join ", "
      ct = (num) -> (":christmas_tree:" for i in [0...num]).join ""
      ans = "**#{output}**. :heart: You HAVE found a number that generates itself. Happy holidays to recent solvers:"
      ans += "\n\n:#{ct 10}\n#{winner_text}\n#{ct 10}"
      console.log "  - #{senderName} wins with #{numInt}"
    else if PREV_OUTS[senderName]?[s]
      ans = "I do not allow mindless strategies. #{prompt}"
    else
      PREV_OUTS[senderName] or= {}
      PREV_OUTS[senderName][output] = true
      ans = "**#{output}**. #{prompt} _#{GUESS_COUNT} attempts, #{numWinners} winners_"
  return ans

# --------------------------------------------------------------------------------

main = ->
  bot.init(process.env.KB_USERNAME, process.env.KB_PAPERKEY).then ->
    console.log "I am me! #{bot.myInfo().username}. My homeDir is #{bot.myInfo().homeDir}"
    bot.chat.watchAllChannelsForNewMessages (message) ->
      if (message.content.type is 'text')
        body = message.content.text.body
        senderName = message.sender.username
        reply = {body: msgCheckAndReply(body, senderName)}
        console.log "#{senderName} guessed `#{body}`. Reply = `#{reply.body}`"
        bot.chat.send message.conversationId, reply

shutDown = ->
  bot.deinit().then ->
    process.exit()

process.on 'SIGINT', shutDown
process.on 'SIGTERM', shutDown

main()
