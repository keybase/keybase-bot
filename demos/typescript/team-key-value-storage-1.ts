#!/usr/bin/env node
import Bot from '../../lib/index.js'
import * as Types from '../../lib/types/keybase1/index.js'
import {ChatChannel, MsgSummary, SendRes} from '../../lib/types/chat1/index.js'

class Runner {
  bot: Bot
  channel: ChatChannel
  msgPrefix: string
  teamname: string
  constructor() {
    this.bot = new Bot()
    this.msgPrefix = '!storage'
    this.teamname = process.env.KB_TEAMNAME
    this.channel = {name: this.teamname, membersType: 'team', topicName: process.env.KB_CHANNEL || 'general'}
  }

  async init(): Promise<void> {
    return this.bot.initFromRunningService()
  }

  listenForCommands(): void {
    console.warn('in listenForCommands')
    const onMessage = async (message: MsgSummary): Promise<void> => {
      console.warn('in onMessage')
      const type = message.content ? message.content.type : null
      if (!type) {
        console.info('null type')
        return
      }

      switch (type) {
        case 'text':
          this.handleTextCommand(message)
          return
        default:
          console.info(`unknown message type ${type}`)
          return
      }
    }

    this.bot.chat.watchAllChannelsForNewMessages(onMessage)
  }

  async handleTextCommand(message: MsgSummary): Promise<void> {
    const body = message.content ? (message.content.text ? message.content.text.body : null) : null
    if (!body) {
      console.info(`null body`)
      return
    }
    console.info(`got a request ${body} ${message.sender.username}`)

    const words = body.split(' ')
    const [prefix, verb] = words
    if (prefix !== this.msgPrefix) {
      return
    }
    switch (verb) {
      case 'help':
        this.handleHelp(body)
        return
      case 'list':
        this.handleList(body)
        return
      case 'put':
        this.handlePut(body)
        return
      case 'get':
        this.handleGet(body)
        return
      case 'delete':
        this.handleDelete(body)
        return
      case 'shutdown':
        this.handleShutdown(message)
        return
      default:
        throw new Error(`Unknown command ${body}.`)
    }
  }

  handleHelp(body: string): Promise<SendRes> {
    const helpMessage =
      'Available commands:' +
      '\n`!storage put <namespace> <key> <value> (<revision>)`' +
      '\n`!storage get <namespace> <key>`' +
      '\n`!storage delete <namespace> <key> (<revision>)`' +
      '\n`!storage list`  // list namespaces' +
      '\n`!storage list <namespace>`  // list entries in namespace'
    return this.sendMessage(helpMessage)
  }

  async handleList(body: string): Promise<void> {
    const [, , namespace] = body.split(' ')
    if (namespace) {
      // !storage list someteam somenamespace
      const res = await this.bot.kvstore.listEntryKeys(this.teamname, namespace)
      const message = res.entryKeys.map(row => row.entryKey).join(',')
      await this.sendMessage(message)
      return
    } else {
      // !storage list someteam
      const res = await this.bot.kvstore.listNamespaces(this.teamname)
      const message = res.namespaces.join(',')
      await this.sendMessage(message)
      return
    }
  }

  async handleGet(body: string): Promise<void> {
    const [, , namespace, key] = body.split(' ')
    // !storage get namespace key
    const res = await this.bot.kvstore.get(this.teamname, namespace, key)
    const message = `${res.entryKey}: ${res.entryValue} at revision ${res.revision}`
    await this.sendMessage(message)
    return
  }

  async handlePut(body: string): Promise<void> {
    const [, , namespace, key, value, revision] = body.split(' ')
    let res: Types.KVPutResult
    if (revision) {
      // !storage put namespace key value revision
      res = await this.bot.kvstore.put(this.teamname, namespace, key, value, parseInt(revision))
    } else {
      // !storage put namespace key value
      res = await this.bot.kvstore.put(this.teamname, namespace, key, value)
    }
    const message = `${res.entryKey} is now at revision ${res.revision}`
    await this.sendMessage(message)
    return
  }

  async handleDelete(body: string): Promise<void> {
    const [, , namespace, key, revision] = body.split(' ')
    let res: Types.KVPutResult
    if (revision) {
      // !storage delete namespace key revision
      res = await this.bot.kvstore.delete(this.teamname, namespace, key, parseInt(revision))
    } else {
      // !storage delete namespace key
      res = await this.bot.kvstore.delete(this.teamname, namespace, key)
    }
    const message = `${res.entryKey} has been deleted, new revision ${res.revision}`
    await this.sendMessage(message)
    return
  }

  async handleShutdown(message: MsgSummary): Promise<void> {
    const sender = message.sender.username
    if (!sender) {
      throw new Error('null username')
    }

    try {
      await this.sendMessage(`Bot shutting down by ${sender}'s command.`)
      await this.bot.deinit()
      console.info('Shutting down...')
      process.exit(0)
    } catch (err) {
      await this.sendMessage(err)
      return
    }
  }

  async sendMessage(body: string): Promise<SendRes> {
    return this.bot.chat.send(this.channel, {body})
  }
}

async function main(): Promise<void> {
  const runner = new Runner()
  console.info('Created runner')
  await runner.init()
  console.info('Initialized runner')
  runner.listenForCommands()
  console.info('Listening')
}

main()
