# keybase-bot

Keybase bot-scripting for Node.js - now written all in TypeScript! Send encrypted data all over this world.

[![npm](https://img.shields.io/npm/v/keybase-bot.svg)](https://www.npmjs.com/package/keybase-bot)
[![Travis CI](https://travis-ci.org/keybase/keybase-bot.svg?branch=master)](https://travis-ci.org/keybase/keybase-bot)

You can use this module to script basic Keybase commands such as sending and reading messages and attachments, and managing teams.

- [Installation](#installation)
- [Hello World](#hello-world)
- [API](#api)
- [Contributions](#contributions)

## Installation

1.  Install Node.js 12 or above.
2.  Make sure that you have Keybase [installed](https://keybase.io/download) and running.
3.  Install `keybase-bot`.
    ```bash
    npm install keybase-bot
    # or
    yarn add keybase-bot
    ```

You're ready to make your first Keybase bot.

## Step 1. Initializing your bot

If your bot is going to do things in the background for an extended period, we recommend starting it up with a username and paper key:

```javascript
// A simple nodeJS bot that doesn't care who else is logged in on this machine
const Bot = require('keybase-bot')
async function main() {
   const bot = new Bot()
   await bot.init('usernameX', 'some paper key...')
   /* now you can do things with the bot */
   await bot.deinit() // when done
}
main()
```

This method means it's running as itself and won't care about Keybase generally running on your computer. It doesn't care if you're logged into Keybase in the GUI app on the same machine. It also doesn't care if you upgrade Keybase while it's running, since it won't restart its copy of Keybase during an update.

If, however, you'd like the bot just to _act as you_ for a quick and easy operation, you can make your bot talk to the same service that the Keybase app is talking to. It will be logged in as whoever's logged into the Keybase app:

```javascript

const Bot = require('keybase-bot')
async function main() {
   const bot = new Bot()
   // Make sure you're logged into the Keybase app first!
   // No credentials neeeded:
   await bot.initFromRunningService()
   /* now you can do things with the bot */
   await bot.deinit() // when done
}
main()
```

## Putting it together...a hello world

Let's make a bot that says hello to the Keybase user [kbot](https://keybase.io/kbot).

```javascript
const Bot = require('keybase-bot')

async function main() {
  const bot = new Bot()
  try {
    const username = "some_username"      // put a real username here
    const paperkey = "foo bar car zar..." // put a real paperkey here
    await bot.init(username, paperkey, {verbose: false})
    console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)
    const channel = {name: 'kbot'}
    const message = {
      body: `Hello kbot! This is ${bot.myInfo().username} saying hello from my device ${bot.myInfo().devicename}`,
    }
    await bot.chat.send(channel, message)
    console.log('Message sent!')
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}

main()

```

To run the above bot, you want to save that code into a file and run it with node:

```bash
node <my-awesome-file-name>.js
```

## Hard-coding paper key into bot isn't a great idea

You can read it from a secret config file, or pass it as an environment variable - whatever you think is best. For example, you could change the above initialization code to:

```javascript
const username = process.env.KB_USERNAME
const paperkey = process.env.KB_PAPERKEY
await bot.init(username, paperkey)
```

And run your program like so:

```
KB_USERNAME=foo KB_PAPERKEY="foo bar car" node my-awesome-program.js
```

## How to write a bot that listens and replies to messages

If you'd like to write a bot that listens to your messages (or your team's) and does something, check out [`demos/es7/advertised-echo.js`](demos/es7/advertised-echo.js).

That demo bot announces itself as handling `!echo`,  which means it gives autocomplete suggestions in the GUI when you talk to it.

## Docker usage

1. Create a bot package, for example save the following code as `index.js`:

```javascript
#!/usr/bin/env node
const Bot = require('keybase-bot')

async function main() {
  const bot = new Bot()
  try {
    const username = process.env.KB_USERNAME
    const paperkey = process.env.KB_PAPERKEY
    const target = process.env.KB_TARGET
    await bot.init(username, paperkey, {verbose: false})
    console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)
    const channel = {name: target + ',' + bot.myInfo().username, public: false, topicType: 'chat'}
    const message = {
      body: `Hello ${target}! This is ${bot.myInfo().username} saying hello from my device ${bot.myInfo().devicename}`,
    }
    await bot.chat.send(channel, message)
    console.log('Message sent!')
  } catch (error) {
    console.error(error)
  } finally {
    await bot.deinit()
  }
}
main()
```

2. Prepare a `package.json`:

```json
{
  "name": "keybase-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "keybase-bot": "^3.0.2"
  }
}
```

3. Prepare a `Dockerfile`:

```dockerfile
FROM keybaseio/client:nightly-node
WORKDIR /app
COPY . /app
RUN npm install # or use yarn
CMD node /app/index.js
```

4. Run the following command to build the image:

```bash
cd $PROJECT_DIR
docker build -t "keybase-docker-test" .
```

5. Start a container to test that it works:

```bash
docker run \
  --rm \
  -e KB_USERNAME="yourbotname" \
  -e KB_PAPERKEY="your_paper_key" \
  -e KB_TARGET="yourusername" \
  keybase-docker-test
```

## Development

All the source of this library is now written in TypeScript. If you're working on the library, please use `yarn` to install the necessary modules, and then run `yarn build` to build the JavaScript library files. Finally, make a test config file in `__tests__/` (look at `__tests__/test.config.ts` as an example) and run `yarn test`. If everything passes, you haven't broken everything horribly.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Bot](#bot)
  - [init](#init)
    - [Parameters](#parameters)
    - [Examples](#examples)
  - [initFromRunningService](#initfromrunningservice)
    - [Parameters](#parameters-1)
    - [Examples](#examples-1)
  - [myInfo](#myinfo)
    - [Examples](#examples-2)
  - [deinit](#deinit)
    - [Examples](#examples-3)
  - [adminDebugLogInfo](#admindebugloginfo)
    - [Parameters](#parameters-2)
    - [Examples](#examples-4)
  - [adminDebugLogError](#admindebuglogerror)
    - [Parameters](#parameters-3)
    - [Examples](#examples-5)
- [Bot Types](#bot-types)
- [Chat](#chat)
  - [joinChannel](#joinchannel)
    - [Parameters](#parameters-4)
    - [Examples](#examples-6)
  - [leaveChannel](#leavechannel)
    - [Parameters](#parameters-5)
    - [Examples](#examples-7)
  - [getUnfurlSettings](#getunfurlsettings)
    - [Examples](#examples-8)
  - [setUnfurlSettings](#setunfurlsettings)
    - [Parameters](#parameters-6)
    - [Examples](#examples-9)
  - [loadFlip](#loadflip)
    - [Parameters](#parameters-7)
    - [Examples](#examples-10)
  - [advertiseCommands](#advertisecommands)
    - [Parameters](#parameters-8)
    - [Examples](#examples-11)
  - [clearCommands](#clearcommands)
    - [Parameters](#parameters-9)
    - [Examples](#examples-12)
  - [listCommands](#listcommands)
    - [Parameters](#parameters-10)
    - [Examples](#examples-13)
  - [list](#list)
    - [Parameters](#parameters-11)
    - [Examples](#examples-14)
  - [listChannels](#listchannels)
    - [Parameters](#parameters-12)
    - [Examples](#examples-15)
  - [read](#read)
    - [Parameters](#parameters-13)
    - [Examples](#examples-16)
  - [send](#send)
    - [Parameters](#parameters-14)
    - [Examples](#examples-17)
  - [createChannel](#createchannel)
    - [Parameters](#parameters-15)
    - [Examples](#examples-18)
  - [attach](#attach)
    - [Parameters](#parameters-16)
    - [Examples](#examples-19)
  - [download](#download)
    - [Parameters](#parameters-17)
    - [Examples](#examples-20)
  - [react](#react)
    - [Parameters](#parameters-18)
    - [Examples](#examples-21)
  - [delete](#delete)
    - [Parameters](#parameters-19)
    - [Examples](#examples-22)
  - [watchChannelForNewMessages](#watchchannelfornewmessages)
    - [Parameters](#parameters-20)
    - [Examples](#examples-23)
  - [watchAllChannelsForNewMessages](#watchallchannelsfornewmessages)
    - [Parameters](#parameters-21)
    - [Examples](#examples-24)
- [Chat Types](#chat-types)
  - [ChatAttachOptions](#chatattachoptions)
  - [ChatDownloadOptions](#chatdownloadoptions)
  - [ChatReactOptions](#chatreactoptions)
  - [ChatDeleteOptions](#chatdeleteoptions)
  - [OnMessage](#onmessage)
  - [OnError](#onerror)
  - [ListenOptions](#listenoptions)
- [Team](#team)
  - [addMembers](#addmembers)
    - [Parameters](#parameters-22)
    - [Examples](#examples-25)
  - [removeMember](#removemember)
    - [Parameters](#parameters-23)
    - [Examples](#examples-26)
  - [listTeamMemberships](#listteammemberships)
    - [Parameters](#parameters-24)
    - [Examples](#examples-27)
- [Team Types](#team-types)
- [Wallet](#wallet)
  - [balances](#balances)
    - [Examples](#examples-28)
  - [history](#history)
    - [Parameters](#parameters-25)
    - [Examples](#examples-29)
  - [details](#details)
    - [Parameters](#parameters-26)
    - [Examples](#examples-30)
  - [lookup](#lookup)
    - [Parameters](#parameters-27)
    - [Examples](#examples-31)
  - [send](#send-1)
    - [Parameters](#parameters-28)
    - [Examples](#examples-32)
  - [batch](#batch)
    - [Parameters](#parameters-29)
    - [Examples](#examples-33)
  - [cancel](#cancel)
    - [Parameters](#parameters-30)
    - [Examples](#examples-34)
- [Wallet Types](#wallet-types)
- [ChatListOptions](#chatlistoptions)
- [ChatListChannelsOptions](#chatlistchannelsoptions)
- [ChatReadOptions](#chatreadoptions)
- [ChatSendOptions](#chatsendoptions)

### Bot

[src/index.ts:17-182](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/index.ts#L17-L182 'Source code on GitHub')

A Keybase bot.

#### init

[src/index.ts:53-63](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/index.ts#L53-L63 'Source code on GitHub')

Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.

##### Parameters

- `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The username of your bot's Keybase account.
- `paperkey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The paperkey of your bot's Keybase account.
- `options` **InitOptions?** The initialization options for your bot.

##### Examples

```javascript
bot.init('username', 'paperkey')
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### initFromRunningService

[src/index.ts:73-82](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/index.ts#L73-L82 'Source code on GitHub')

Initialize your bot by using an existing running service with a logged in user.

##### Parameters

- `homeDir` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The home directory of this currently running service. Leave blank to use the default homeDir for your system.
- `options` **InitOptions?** The initialization options for your bot.

##### Examples

```javascript
bot.initFromRunningService()
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### myInfo

[src/index.ts:99-101](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/index.ts#L99-L101 'Source code on GitHub')

Get info about your bot!

##### Examples

```javascript
const info = bot.myInfo()
```

Returns **(BotInfo | null)** – Useful information like the username, device, and home directory of your bot. If your bot isn't initialized, you'll get `null`.

#### deinit

[src/index.ts:109-124](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/index.ts#L109-L124 'Source code on GitHub')

Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.

##### Examples

```javascript
bot.deinit()
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### adminDebugLogInfo

[src/index.ts:133-137](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/index.ts#L133-L137 'Source code on GitHub')

If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write info text into it.

##### Parameters

- `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

##### Examples

```javascript
bot.adminDebugLogInfo('My bot is ready to go.')
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### adminDebugLogError

[src/index.ts:145-149](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/index.ts#L145-L149 'Source code on GitHub')

If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write error text into it.

##### Parameters

- `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

##### Examples

```javascript
bot.adminDebugLogInfo('My bot is ready to go.')
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

### Bot Types

A collection of types used by the bot.

### Chat

[src/chat-client/index.ts:111-637](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L111-L637 'Source code on GitHub')

**Extends ClientBase**

The chat module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase chat api`.

#### joinChannel

[src/chat-client/index.ts:198-210](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L198-L210 'Source code on GitHub')

Joins a team conversation.

##### Parameters

- `channel` **chat1.ChatChannel** The team chat channel to join.

##### Examples

```javascript
bot.chat.listConvsOnName('team_name').then(async teamConversations => {
  for (const conversation of teamConversations) {
    if (conversation.memberStatus !== 'active') {
      await bot.chat.join(conversation.channel)
      console.log('Joined team channel', conversation.channel)
    }
  }
})
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### leaveChannel

[src/chat-client/index.ts:225-237](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L225-L237 'Source code on GitHub')

Leaves a team conversation.

##### Parameters

- `channel` **chat1.ChatChannel** The team chat channel to leave.

##### Examples

```javascript
bot.chat.listConvsOnName('team_name').then(async teamConversations => {
  for (const conversation of teamConversations) {
    if (conversation.memberStatus === 'active') {
      await bot.chat.leave(conversation.channel)
      console.log('Left team channel', conversation.channel)
    }
  }
})
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### getUnfurlSettings

[src/chat-client/index.ts:386-393](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L386-L393 'Source code on GitHub')

Gets current unfurling settings

##### Examples

```javascript
bot.chat.getUnfurlSettings().then(mode => console.log(mode))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;chat1.UnfurlSettings>**

#### setUnfurlSettings

[src/chat-client/index.ts:407-413](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L407-L413 'Source code on GitHub')

Sets the unfurling mode
In Keybase, unfurling means generating previews for links that you're sending
in chat messages. If the mode is set to always or the domain in the URL is
present on the whitelist, the Keybase service will automatically send a preview
to the message recipient in a background chat channel.

##### Parameters

- `mode` **chat1.UnfurlSettings** the new unfurl mode

##### Examples

```javascript
bot.chat
  .setUnfurlMode({
    mode: 'always',
  })
  .then(mode => console.log('mode updated!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### loadFlip

[src/chat-client/index.ts:424-441](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L424-L441 'Source code on GitHub')

Loads a flip's details

##### Parameters

- `conversationID` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** conversation ID received in API listen.
- `flipConversationID` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** flipConvID from the message summary.
- `messageID` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** ID of the message in the conversation.
- `gameID` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** gameID from the flip message contents.

##### Examples

```javascript
// check demos/es7/poker-hands.js
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;chat1.UICoinFlipStatus>**

#### advertiseCommands

[src/chat-client/index.ts:462-468](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L462-L468 'Source code on GitHub')

Publishes a commands advertisement which is shown in the "!" chat autocomplete.

##### Parameters

- `advertisement` **Advertisement** details of the advertisement

##### Examples

```javascript
await bot.chat.advertiseCommands({
  advertisements: [
    {
      type: 'public',
      commands: [
        {
          name: '!echo',
          description: 'Sends out your message to the current channel.',
          usage: '[your text]',
        },
      ],
    },
  ],
})
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### clearCommands

[src/chat-client/index.ts:476-482](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L476-L482 'Source code on GitHub')

Clears all published commands advertisements.

##### Parameters

- `advertisement` advertisement parameters

##### Examples

```javascript
await bot.chat.clearCommands()
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### listCommands

[src/chat-client/index.ts:504-511](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L504-L511 'Source code on GitHub')

Lists all commands advertised in a channel.

##### Parameters

- `lookup` **AdvertisementsLookup** either conversation id or channel

##### Examples

```javascript
const commandsList = await bot.chat.listCommands({
  channel: channel,
})
console.log(commandsList)
// prints out something like:
// {
//   commands: [
//     {
//       name: '!helloworld',
//       description: 'sample description',
//       usage: '[command arguments]',
//       username: 'userwhopublished',
//     }
//   ]
// }
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;{commands: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;chat1.UserBotCommandOutput>}>**

#### list

[src/chat-client/index.ts:121-128](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L121-L128 'Source code on GitHub')

Lists your chats, with info on which ones have unread messages.

##### Parameters

- `options` **[ChatListOptions](#chatlistoptions)?** An object of options that can be passed to the method.

##### Examples

```javascript
const chatConversations = await bot.chat.list({unreadOnly: true})
console.log(chatConversations)
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;chat1.ConvSummary>>** An array of chat conversations. If there are no conversations, the array is empty.

#### listChannels

[src/chat-client/index.ts:139-155](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L139-L155 'Source code on GitHub')

Lists conversation channels in a team

##### Parameters

- `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the team
- `options` **[ChatListChannelsOptions](#chatlistchannelsoptions)?** An object of options that can be passed to the method.

##### Examples

```javascript
bot.chat.listChannels('team_name').then(chatConversations => console.log(chatConversations))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;chat1.ConvSummary>>** An array of chat conversations. If there are no conversations, the array is empty.

#### read

[src/chat-client/index.ts:166-183](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L166-L183 'Source code on GitHub')

Reads the messages in a channel. You can read with or without marking as read.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel to read messages in.
- `options` **[ChatReadOptions](#chatreadoptions)?** An object of options that can be passed to the method.

##### Examples

```javascript
alice.chat.read(channel).then(messages => console.log(messages))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;ReadResult>** A summary of data about a message, including who send it, when, the content of the message, etc. If there are no messages in your channel, then an error is thrown.

#### send

[src/chat-client/index.ts:250-268](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L250-L268 'Source code on GitHub')

Send a message to a certain channel.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel to send the message in.
- `message` **chat1.ChatMessage** The chat message to send.
- `options` **[ChatSendOptions](#chatsendoptions)?** An object of options that can be passed to the method.

##### Examples

```javascript
const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
const message = {body: 'Hello kbot!'}
bot.chat.send(channel, message).then(() => console.log('message sent!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;chat1.SendRes>**

#### createChannel

[src/chat-client/index.ts:277-290](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L277-L290 'Source code on GitHub')

Creates a new blank conversation.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel to create.

##### Examples

```javascript
bot.chat.createChannel(channel).then(() => console.log('conversation created'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### attach

[src/chat-client/index.ts:301-309](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L301-L309 'Source code on GitHub')

Send a file to a channel.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel to send the message in.
- `filename` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The absolute path of the file to send.
- `options` **[ChatAttachOptions](#chatattachoptions)?** An object of options that can be passed to the method.

##### Examples

```javascript
bot.chat.attach(channel, '/Users/nathan/my_picture.png').then(() => console.log('Sent a picture!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;chat1.SendRes>**

#### download

[src/chat-client/index.ts:321-328](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L321-L328 'Source code on GitHub')

Download a file send via Keybase chat.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel that the desired attacment to download is in.
- `messageId` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The message id of the attached file.
- `output` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The absolute path of where the file should be downloaded to.
- `options` **[ChatDownloadOptions](#chatdownloadoptions)?** An object of options that can be passed to the method

##### Examples

```javascript
bot.chat.download(channel, 325, '/Users/nathan/Downloads/file.png')
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### react

[src/chat-client/index.ts:341-355](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L341-L355 'Source code on GitHub')

Reacts to a given message in a channel. Messages have messageId's associated with
them, which you can learn in `bot.chat.read`.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel to send the message in.
- `messageId` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The id of the message to react to.
- `reaction` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The reaction emoji, in colon form.
- `options` **[ChatReactOptions](#chatreactoptions)?** An object of options that can be passed to the method.

##### Examples

```javascript
bot.chat.react(channel, 314, ':+1:').then(() => console.log('Thumbs up!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;chat1.SendRes>**

#### delete

[src/chat-client/index.ts:368-379](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L368-L379 'Source code on GitHub')

Deletes a message in a channel. Messages have messageId's associated with
them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
and deleting from the CLI may not become apparent immediately.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel to send the message in.
- `messageId` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The id of the message to delete.
- `options` **[ChatDeleteOptions](#chatdeleteoptions)?** An object of options that can be passed to the method.

##### Examples

```javascript
bot.chat.delete(channel, 314).then(() => console.log('message deleted!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### watchChannelForNewMessages

[src/chat-client/index.ts:530-538](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L530-L538 'Source code on GitHub')

Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel. Note that it receives messages your own bot posts, but from other devices. You can filter out your own messages by looking at a message's sender object.
Hides exploding messages by default.

##### Parameters

- `channel` **chat1.ChatChannel** The chat channel to watch.
- `onMessage` **[OnMessage](#onmessage)** A callback that is triggered on every message your bot receives.
- `onError` **[OnError](#onerror)?** A callback that is triggered on any error that occurs while the method is executing.
- `options` **[ListenOptions](#listenoptions)?** Options for the listen method.

##### Examples

```javascript
// Reply to all messages between you and `kbot` with 'thanks!'
const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
const onMessage = message => {
  const channel = message.channel
  bot.chat.send(channel, {body: 'thanks!!!'})
}
bot.chat.watchChannelForNewMessages(channel, onMessage)
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### watchAllChannelsForNewMessages

[src/chat-client/index.ts:561-564](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L561-L564 'Source code on GitHub')

This function will put your bot into full-read mode, where it reads
everything it can and every new message it finds it will pass to you, so
you can do what you want with it. For example, if you want to write a
Keybase bot that talks shit at anyone who dares approach it, this is the
function to use. Note that it receives messages your own bot posts, but from other devices.
You can filter out your own messages by looking at a message's sender object.
Hides exploding messages by default.

##### Parameters

- `onMessage` **[OnMessage](#onmessage)** A callback that is triggered on every message your bot receives.
- `onError` **[OnError](#onerror)?** A callback that is triggered on any error that occurs while the method is executing.
- `options` **[ListenOptions](#listenoptions)?** Options for the listen method.

##### Examples

```javascript
// Reply to incoming traffic on all channels with 'thanks!'
const onMessage = message => {
  const channel = message.channel
  bot.chat.send(channel, {body: 'thanks!!!'})
}
bot.chat.watchAllChannelsForNewMessages(onMessage)
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

### Chat Types

A collection of types used by the Chat module.

#### ChatAttachOptions

[src/chat-client/index.ts:54-58](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L54-L58 'Source code on GitHub')

Options for the `attach` method of the chat module.

#### ChatDownloadOptions

[src/chat-client/index.ts:63-67](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L63-L67 'Source code on GitHub')

Options for the `download` method of the chat module.

#### ChatReactOptions

[src/chat-client/index.ts:72-74](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L72-L74 'Source code on GitHub')

Options for the `react` method of the chat module.

#### ChatDeleteOptions

[src/chat-client/index.ts:79-81](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L79-L81 'Source code on GitHub')

Options for the `delete` method of the chat module.

#### OnMessage

[src/chat-client/index.ts:8-8](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L7-L7 'Source code on GitHub')

A function to call when a message is received.

Type: function (message: chat1.MsgSummary): (void | [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>)

#### OnError

[src/chat-client/index.ts:10-10](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L9-L9 'Source code on GitHub')

A function to call when an error occurs.

Type: function (error: [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)): (void | [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>)

#### ListenOptions

[src/chat-client/index.ts:90-93](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L90-L93 'Source code on GitHub')

Options for the methods in the chat module that listen for new messages.
Local messages are ones sent by your device. Including them in the output is
useful for applications such as logging conversations, monitoring own flips
and building tools that seamlessly integrate with a running client used by
the user.

### Team

[src/team-client/index.ts:20-69](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/team-client/index.ts#L20-L69 'Source code on GitHub')

**Extends ClientBase**

The team module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase team api`.

#### addMembers

[src/team-client/index.ts:29-37](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/team-client/index.ts#L29-L37 'Source code on GitHub')

Add a bunch of people with different privileges to a team

##### Parameters

- `additions` **AddMembersParam** an array of the users to add, with privs

##### Examples

```javascript
bot.team
  .addMembers({
    team: 'phoenix',
    emails: [{email: 'alice@keybase.io', role: 'writer'}, {email: 'cleo@keybase.io', role: 'admin'}],
    usernames: [{username: 'frank', role: 'reader'}, {username: 'keybaseio@twitter', role: 'writer'}],
  })
  .then(res => console.log(res))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;keybase1.TeamAddMemberResult>** A result object of adding these members to the team.

#### removeMember

[src/team-client/index.ts:46-50](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/team-client/index.ts#L46-L50 'Source code on GitHub')

Remove someone from a team.

##### Parameters

- `removal` **RemoveMemberParam** object with the `team` name and `username`

##### Examples

```javascript
bot.team.removeMember({team: 'phoenix', username: 'frank'}).then(res => console.log(res))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### listTeamMemberships

[src/team-client/index.ts:60-68](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/team-client/index.ts#L60-L68 'Source code on GitHub')

List a team's members.

##### Parameters

- `team` **ListTeamMembershipsParam** an object with the `team` name in it.

##### Examples

```javascript
bot.team.listTeamMemberships({team: 'phoenix'}).then(res => console.log(res))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;keybase1.TeamDetails>** Details about the team.

### Team Types

A collection of types used by the Team module.

### Wallet

[src/wallet-client/index.ts:5-149](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L5-L149 'Source code on GitHub')

**Extends ClientBase**

The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`.

#### balances

[src/wallet-client/index.ts:13-20](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L13-L20 'Source code on GitHub')

Provides a list of all accounts owned by the current Keybase user.

##### Examples

```javascript
bot.wallet.balances().then(accounts => console.log(accounts))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;stellar1.OwnAccountCLILocal>>** An array of accounts. If there are no accounts, the array is empty.

#### history

[src/wallet-client/index.ts:30-42](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L30-L42 'Source code on GitHub')

Provides a list of all transactions in a single account.

##### Parameters

- `accountId` **stellar1.AccountID** The id of an account owned by a Keybase user.

##### Examples

```javascript
bot.wallet.history('GDUKZH6Q3U5WQD4PDGZXYLJE3P76BDRDWPSALN4OUFEESI2QL5UZHCK').then(transactions => console.log(transactions))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;stellar1.PaymentCLILocal>>** An array of transactions related to the account.

#### details

[src/wallet-client/index.ts:52-60](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L52-L60 'Source code on GitHub')

Get details about a particular transaction

##### Parameters

- `transactionId` **stellar1.TransactionID** The id of the transaction you would like details about.

##### Examples

```javascript
bot.wallet.details('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4').then(details => console.log(details))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;stellar1.PaymentCLILocal>** An object of details about the transaction specified.

#### lookup

[src/wallet-client/index.ts:74-87](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L74-L87 'Source code on GitHub')

Lookup the primary Stellar account ID of a Keybase user.

##### Parameters

- `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the user you want to lookup. This can be either a Keybase username or a username of another account that is supported by Keybase if it is followed by an '@<service>'.

##### Examples

```javascript
const lookup1 = bot.wallet.lookup('patrick')
// 'patrick' on Keybase is 'patrickxb' on twitter
const lookup2 = bot.wallet.lookup('patrcikxb@twitter')
// Using Lodash's `isEqual` since objects with same values aren't equal in JavaScript
_.isEqual(lookup1, lookup2) // => true
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;{accountId: stellar1.AccountID, username: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}>** An object containing the account ID and Keybase username of the found user.

#### send

[src/wallet-client/index.ts:103-111](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L103-L111 'Source code on GitHub')

Send lumens (XLM) via Keybase with your bot!

##### Parameters

- `recipient` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Who you're sending your money to. This can be a Keybase user, stellar address, or a username of another account that is supported by Keybase if it is followed by an '@<service>'.
- `amount` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The amount of XLM to send.
- `currency` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Adds a currency value to the amount specified. For example, adding 'USD' would send
- `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** The message for your payment

##### Examples

```javascript
bot.wallet.send('nathunsmitty', '3.50') // Send 3.50 XLM to Keybase user `nathunsmitty`
bot.wallet.send('nathunsmitty@github', '3.50') // Send 3.50 XLM to GitHub user `nathunsmitty`
bot.wallet.send('nathunsmitty', '3.50', 'USD') // Send $3.50 worth of lumens to Keybase user `nathunsmitty`
bot.wallet.send('nathunsmitty', '3.50', 'USD', 'Shut up and take my money!') // Send $3.50 worth of lumens to Keybase user `nathunsmitty` with a memo
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;stellar1.PaymentCLILocal>** The trasaction object of the transaction.

#### batch

[src/wallet-client/index.ts:124-132](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L124-L132 'Source code on GitHub')

Send lumens (XLM) via Keybase to more than one user at once. As opposed to the normal bot.wallet.send
command, this can get multiple transactions into the same 5-second Stellar ledger.

##### Parameters

- `batchId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** example, if sending a bunch of batches for an airdrop, you could pass them all `airdrop2025`.
- `payments` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;stellar1.BatchPaymentArg>** an array of objects containing recipients and XLM of the form {"recipient": "someusername", "amount": "1.234", "message", "hi there"}

##### Examples

```javascript
bot.wallet.batch('airdrop2040', [
  {recipient: 'a1', amount: '1.414', message: 'hi a1, yes 1'},
  {recipient: 'a2', amount: '3.14159', message: 'hi a2, yes 2'},
])
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;stellar1.BatchResultLocal>** an object

#### cancel

[src/wallet-client/index.ts:141-148](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/wallet-client/index.ts#L141-L148 'Source code on GitHub')

If you send XLM to a Keybase user who has not established a wallet, you can cancel the payment before the recipient claims it and the XLM will be returned to your account.

##### Parameters

- `transactionId` **stellar1.TransactionID** The id of the transaction to cancel.

##### Examples

```javascript
bot.wallet
  .cancel('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4')
  .then(() => console.log('Transaction successfully canceled!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

### Wallet Types

A collection of types used by the Wallet module.

### ChatListOptions

[src/chat-client/index.ts:15-20](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L15-L20 'Source code on GitHub')

Options for the `list` method of the chat module.

### ChatListChannelsOptions

[src/chat-client/index.ts:25-28](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L25-L28 'Source code on GitHub')

Options for the `listChannels` method of the chat module.

### ChatReadOptions

[src/chat-client/index.ts:33-39](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L33-L39 'Source code on GitHub')

Options for the `read` method of the chat module.

### ChatSendOptions

[src/chat-client/index.ts:44-49](https://github.com/keybase/keybase-bot/blob/3681b8fe4b463f932a06c37043cc33133d79c272/src/chat-client/index.ts#L44-L49 'Source code on GitHub')

Options for the `send` method of the chat module.

## Contributions

Make sure that you have Node, Yarn, and the Keybase application installed. We also use developer tools such as [EditorConfig](https://editorconfig.org), [ESLint](https://eslint.org), [Flow](https://flow.org), and [Prettier](https://prettier.io) so you'll probably want to make sure that your development is configured to use those tools somewhere in your code writing process.

### Setting up the source code

1.  Clone this repo.
2.  Install dependencies with `yarn`.
3.  Build the bot in watch mode with `yarn dev`.
4.  Build the bot for production with `yarn build`.
5.  Build the docs for the bot with `yarn docs`.

That's it. We accept changes via Pull Requests; please make sure that any changes you make build successfully and pass Flow, Prettier, and ESLint checks. We'd also really appreciate it if your PR could follow the [Conventional Commit](https://www.conventionalcommits.org) specification. If you're adding a new feature, please add/update tests, demos, documentation, and whatever else makes sense to go with it. If you have any questions about contributing, please feel free to ask a maintainer!

### Running Tests

We run tests using [Jest](https://jestjs.io/). All tests are run against actual Keybase processes that are created and destroyed during testing and ping the actual Keybase server to do things like send messages and XLM. To facilitate this, the tests read a file in `__tests__/test.config.ts` that contains usernames, paperkeys, and team names that are used during testing. You'll need three test Keybase accounts, two teams, and some Stellar Lumens to run all tests.

1.  Copy `__tests__/test.config.example.ts` as `__tests__/test.config.ts`. Note that `__tests__/test.config.ts` should **NOT** be version controlled, as it will contain paper keys!
2.  Edit `__tests__/test.config.ts` as it specifies, replacing the placeholder values with actual usernames, paperkeys, and team names.
3.  Run `yarn test`. Everything should pass!

### Generating Types

Most of the types the bot uses are generated from definitions defined in the [`protocol/`](https://github.com/keybase/client/tree/master/protocol) directory inside the Keybase client repo. This ensures that the types that the bot uses are consistent across bots and always up to date with the output of the API.

To build the types for the TypeScript bot, you'll need to clone the `client` repo. This requires [Go](https://golang.org/) and your [GOPATH](https://github.com/golang/go/wiki/SettingGOPATH) to be set up.

```shell
go get github.com/keybase/client/go/keybase
```

and install the necessary dependencies for compiling the protocol files. This requires [node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com).

```shell
cd client/protocol
yarn install
```

Then you can generate the types by using the provided Makefile in this repo.

```shell
cd path/to/keybase-bot
make
```

Should you need to remove all the types for some reason, you can run `make clean`.

### Release

We automatically generate a CHANGELOG and version (using [Semantic Versioning](https://semver.org)) `keybase-bot` with [`standard-version`](https://github.com/conventional-changelog/standard-version). To cut a new release:

1.  Make sure all commits that are to be included in the release are squash-merged into `master` branch.
2.  On your local copy of the bot, checkout `master` and ensure it's up to date with `origin/master`.
3.  Run `standard-version` with the command `yarn release`.
4.  Push the new git tags to `origin`. (`git push --follow-tags origin master`)
5.  Publish to npm with `yarn publish`.

## License

BSD-3-Clause
