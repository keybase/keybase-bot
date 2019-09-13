#!/usr/bin/env node
import Bot from '../../lib/index.js'
import {ResetConvMemberAPI} from '../../lib/types/chat1/index.js'
//
// have you ever had a direct conversation with someone, and then they "reset"
// their account? This locks them out, and you're supposed to check their proofs
// and let them back in, only if you're satisfied. Well...bots are always satisfied
// so your bot can just let them back in...if you want.
//
// Note this bot demo isn't using a username + paperkey because it's also demo'ing running
// against your own logged in user.
//

async function letThemIn(bot: Bot, p: ResetConvMemberAPI): Promise<void> {
  try {
    await bot.chat.addResetConvMember(p)
    console.log(`SUCCEESS - let in ${p.username} to ${p.conversationId}`)
  } catch (err) {
    console.error(`ERROR - to let in ${p.username} to ${p.conversationId}`, err)
  }
}

async function main(): Promise<void> {
  const bot = new Bot()
  try {
    await bot.initFromRunningService()
    console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)
    const problemChats = await bot.chat.getResetConvMembers()
    for (const p of problemChats.members) {
      await letThemIn(bot, p)
    }
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}

main()
