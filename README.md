# keybase-chat-bot

Script Keybase Chat in Node.js!

This module is a side-project/work in progress and may change or have crashers, but feel free to play with it. As long as you have a Keybase account and a paper key, you can use this module to script basic chat commands.

For more information about the API this module uses, run `keybase chat api -h` from your terminal.

- [Installation](#installation)
- [Hello World](#hello-world)
- [API](#api)
- [Contributions](#contributions)

# Installation

Make sure to [install Keybase](https://keybase.io/download).

```bash
npm install keybase-chat-bot
```

### Hello world

```javascript
//
// Says hello to the keybase `kbot` account
//

const bot = new Bot()

try {
  await bot.init({username: process.env.KB_USERNAME, paperkey: process.env.KB_PAPERKEY, verbose: false})
  console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)
  const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
  const sendArg = {
    channel: channel,
    message: {
      body: `Hello kbot! This is ${bot.myInfo().username} saying hello from my device ${
        bot.myInfo().devicename
      }`,
    },
  }
  await bot.chatSend(sendArg)
  console.log('Message sent!')
} catch (error) {
  console.error(error)
} finally {
  await bot.deinit()
}
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Chat](#chat)
  - [list](#list)
    - [Parameters](#parameters)
    - [Examples](#examples)
  - [read](#read)
    - [Parameters](#parameters-1)
  - [send](#send)
    - [Parameters](#parameters-2)
    - [Examples](#examples-1)
  - [delete](#delete)
    - [Parameters](#parameters-3)
    - [Examples](#examples-2)
  - [watchChannelForNewMessages](#watchchannelfornewmessages)
    - [Parameters](#parameters-4)
    - [Examples](#examples-3)
  - [watchAllChannelsForNewMessages](#watchallchannelsfornewmessages)
    - [Parameters](#parameters-5)
    - [Examples](#examples-4)
- [Chat Types](#chat-types)
  - [ChatChannel](#chatchannel)
    - [Properties](#properties)
  - [ChatMessage](#chatmessage)
    - [Properties](#properties-1)
  - [ChatConversation](#chatconversation)
    - [Properties](#properties-2)
  - [ChatListOptions](#chatlistoptions)
    - [Properties](#properties-3)
  - [ChatReadOptions](#chatreadoptions)
    - [Properties](#properties-4)
  - [ChatSendOptions](#chatsendoptions)
    - [Properties](#properties-5)
  - [ChatDeleteOptions](#chatdeleteoptions)
    - [Properties](#properties-6)
  - [OnMessage](#onmessage)
  - [OnError](#onerror)

### Chat

[lib/chat-client/index.js:28-200](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L28-L200 'Source code on GitHub')

**Extends ClientBase**

A Keybase bot.

#### list

[lib/chat-client/index.js:37-41](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L37-L41 'Source code on GitHub')

Lists your chats, with info on which ones have unread messages.

##### Parameters

- `options` **[ChatListOptions](#chatlistoptions)** An object of options that can be passed to the method.

##### Examples

```javascript
const chatConversations = bot.chat.list({unreadOnly: true})
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[ChatConversation](#chatconversation)>>** An array of chat conversations. If there are no conversations, the array is empty.

#### read

[lib/chat-client/index.js:49-58](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L49-L58 'Source code on GitHub')

Reads the messages in a channel. You can read with or without marking as read.

##### Parameters

- `channel` **[ChatChannel](#chatchannel)** The chat channel to read messages in.
- `options` **[ChatReadOptions](#chatreadoptions)** An object of options that can be passed to the method.

#### send

[lib/chat-client/index.js:71-90](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L71-L90 'Source code on GitHub')

Send a message to a certain channel.

##### Parameters

- `channel` **[ChatChannel](#chatchannel)** The chat channel to send the message in.
- `message` **[ChatMessage](#chatmessage)** The chat message to send.
- `options` **[ChatSendOptions](#chatsendoptions)** An object of options that can be passed to the method.

##### Examples

```javascript
const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
const message = {body: 'Hello kbot!'}
bot.chat.send(channel, message)
```

#### delete

[lib/chat-client/index.js:103-111](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L103-L111 'Source code on GitHub')

Deletes a message in a channel. Messages have messageId's associated with
them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
and deleting from the CLI may not become apparent immediately.

##### Parameters

- `channel` **[ChatChannel](#chatchannel)** The chat channel to send the message in.
- `messageId` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The chat message to send.
- `options` **[ChatDeleteOptions](#chatdeleteoptions)** An object of options that can be passed to the method.

##### Examples

```javascript
bot.chat.delete(channel, 314)
```

#### watchChannelForNewMessages

[lib/chat-client/index.js:133-136](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L133-L136 'Source code on GitHub')

Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.

##### Parameters

- `channel` **[ChatChannel](#chatchannel)** The chat channel to watch.
- `onMessage` **[OnMessage](#onmessage)** A callback that is triggered on every message your bot receives.
- `onError` **[OnError](#onerror)** A callback that is triggered on any error that occurs while the method is executing.

##### Examples

```javascript
// Reply to all messages between you and `kbot` with 'thanks!'
const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
const onMessage = message => {
  const channel = message.channel
  bot.chat.send({
    channel: channel,
    message: {
      body: 'thanks!!!',
    },
  })
}
bot.chat.watchChannelForNewMessages(channel, onMessage)
```

#### watchAllChannelsForNewMessages

[lib/chat-client/index.js:161-164](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L161-L164 'Source code on GitHub')

This function will put your bot into full-read mode, where it reads
everything it can and every new message it finds it will pass to you, so
you can do what you want with it. For example, if you want to write a
Keybase bot that talks shit at anyone who dares approach it, this is the
function to use.

##### Parameters

- `onMessage` **[OnMessage](#onmessage)** A callback that is triggered on every message your bot receives.
- `onError` **[OnError](#onerror)** A callback that is triggered on any error that occurs while the method is executing.

##### Examples

```javascript
// Reply to incoming traffic on all channels with 'thanks!'
const onMessage = message => {
  const channel = message.channel
  bot.chat.send({
    channel: channel,
    message: {
      body: 'thanks!!!',
    },
  })
}
bot.chat.watchAllChannelsForNewMessages(onMessage)
```

### Chat Types

A collection of types used by the Chat module.

#### ChatChannel

[lib/chat-client/types.js:23-29](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/types.js#L20-L22 'Source code on GitHub')

A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.

Type: {name: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), public: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean), membersType: MembersType, topicType: TopicType?, topicName: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?}

##### Properties

- `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `public` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
- `membersType` **MembersType**
- `topicType` **TopicType?**
- `topicName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**

#### ChatMessage

[lib/chat-client/types.js:34-36](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/types.js#L31-L33 'Source code on GitHub')

A chat message. The content goes in the `body` property!

Type: {body: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

##### Properties

- `body` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

#### ChatConversation

[lib/chat-client/types.js:41-48](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/types.js#L38-L40 'Source code on GitHub')

A chat conversation. This is essentially a chat channel plus some additional metadata.

Type: {id: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), channel: [ChatChannel](#chatchannel), unread: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean), activeAt: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), activeAtMs: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), memberStatus: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

##### Properties

- `id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `channel` **[ChatChannel](#chatchannel)**
- `unread` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
- `activeAt` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**
- `activeAtMs` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**
- `memberStatus` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

#### ChatListOptions

[lib/chat-client/types.js:174-179](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/types.js#L171-L173 'Source code on GitHub')

Options for the `list` method of the chat module.

Type: {unreadOnly: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, topicType: TopicType?, showErrors: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, failOffline: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?}

##### Properties

- `unreadOnly` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `topicType` **TopicType?**
- `showErrors` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `failOffline` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**

#### ChatReadOptions

[lib/chat-client/types.js:184-190](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/types.js#L181-L183 'Source code on GitHub')

Options for the `read` method of the chat module.

Type: {conversationId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?, peek: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, pagination: Pagination?, unreadOnly: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, failOffline: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?}

##### Properties

- `conversationId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**
- `peek` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `pagination` **Pagination?**
- `unreadOnly` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `failOffline` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**

#### ChatSendOptions

[lib/chat-client/types.js:195-199](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/types.js#L192-L194 'Source code on GitHub')

Options for the `send` method of the chat module.

Type: {conversationId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?, nonblock: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, membersType: MembersType}

##### Properties

- `conversationId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**
- `nonblock` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `membersType` **MembersType**

#### ChatDeleteOptions

[lib/chat-client/types.js:204-206](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/types.js#L201-L203 'Source code on GitHub')

Options for the `delete` method of the chat module.

Type: {conversationId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?}

##### Properties

- `conversationId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**

#### OnMessage

[lib/chat-client/index.js:20-20](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L19-L19 'Source code on GitHub')

A function to call when a message is received.

Type: function (message: MessageSummary): void

#### OnError

[lib/chat-client/index.js:22-22](https://github.com/keybase/keybase-chat-bot/blob/4e1469126a55266a2f4ea5c9cc086c73f7bf9857/lib/chat-client/index.js#L21-L21 'Source code on GitHub')

A function to call when an error occurs.

Type: function (error: [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)): void
