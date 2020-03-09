#!/usr/bin/env node
const Bot = require('../../lib/index.js')

const bot = new Bot()

const teamName = process.env.KB_TEAM

async function main() {
  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    await bot.init(username, paperkey)
    const info = bot.myInfo()
    console.log(`Bot initialized with username ${info.username}.`)

    console.log(`Listening for all messages...`)
    await bot.chat.watchAllChannelsForNewMessages(
      async msg => {
        try {
          console.log(msg)

          if (msg.channel.membersType !== 'impteamnative' && msg.channel.membersType !== 'impteamupgrade') {
            // Only react to direct messages.
            console.log(`Invalid type - ${msg.channel.membersType}`)
            return
          }

          if (msg.content.type === 'text' && msg.content.text.body.toLowerCase().includes('invite me')) {
            await bot.team.addMembers({
              team: teamName,
              usernames: [{username: msg.sender.username, role: 'reader'}],
            })
            await bot.chat.send(msg.conversationId, {
              body: `There you go! Welcome to ${teamName}!`,
            })
            return
          }

          await bot.chat.send(msg.conversationId, {
            body: `Hi ${msg.sender.username}! I'm a proof of concept of a bot that invites users into an open team - in this case ${teamName}. Reply with "invite me" and I'll add you there!`,
          })
        } catch (err) {
          console.error(err)
        }
      },
      e => console.error(e)
    )
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
