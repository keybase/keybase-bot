# keybase-bot

[![npm](https://img.shields.io/npm/v/keybase-bot.svg)](https://www.npmjs.com/package/keybase-bot)

Script Keybase functionality in Node.js.

This module is a side-project/work in progress and may change or have crashers, but feel free to play with it. As long as you have a Keybase account, you can use this module to script basic Keybase commands.

- [Installation](#installation)
- [Hello World](#hello-world)
- [API](#api)
- [Contributions](#contributions)

## Installation

1.  Install Node.js 8 or above. You can do this [directly from the Node.js website](https://nodejs.org/en/download) or [via your favorite package manager](https://nodejs.org/en/download/package-manager/).
2.  Make sure that you have Keybase [installed](https://keybase.io/download) and running.
3.  Install `keybase-bot`. You can do this using either [npm](https://www.npmjs.com) or [Yarn](https://yarnpkg.com).
    ```bash
    npm install keybase-bot
    # or
    yarn add keybase-bot
    ```

You're ready to make your first Keybase bot!

## Hello world via your Keybase bot

Let's make a bot that says hello to the Keybase user [kbot](https://keybase.io/kbot).

```javascript
const Bot = require('keybase-bot')

const bot = new Bot()
const username = 'your username'
const paperkey = 'your paperkey'
bot
  .init(username, paperkey, {verbose: false})
  .then(() => {
    console.log(`Your bot is initialized. It is logged in as ${bot.myInfo().username}`)

    const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
    const message = {
      body: `Hello kbot! This is ${bot.myInfo().username} saying hello from my device ${
        bot.myInfo().devicename
      }`,
    }

    bot.chat
      .send(channel, message)
      .then(() => {
        console.log('Message sent!')
        bot.deinit()
      })
      .catch(error => {
        console.error(error)
        bot.deinit()
      })
  })
  .catch(error => {
    console.error(error)
    bot.deinit()
  })
```

To run the above bot, you want to save that code into a file and run it with node:

```bash
node <my-awesome-file-name>.js
```

This code is also in [`demos/hello-world.js`](demos/hello-world.js), if you want to take a look in there. There are also some other cool bots in the demos directory, including a bot that tells you how many unread messages you have and a bot that does math for you and your friends. You can write a bot in any language that can compile to JavaScript and run on Node.js. We have some ES7+ (with `async/await`) demos in [`demos/ES7`](demos/es7) and even a bot in [Iced CoffeeScript](http://maxtaco.github.io/coffee-script/)! (in [`demos/iced`](demos/iced))

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
- [Bot Types](#bot-types)
  - [InitOptions](#initoptions)
    - [Properties](#properties)
  - [BotInfo](#botinfo)
    - [Properties](#properties-1)
- [Chat](#chat)
  - [list](#list)
    - [Parameters](#parameters-2)
    - [Examples](#examples-4)
  - [read](#read)
    - [Parameters](#parameters-3)
    - [Examples](#examples-5)
  - [send](#send)
    - [Parameters](#parameters-4)
    - [Examples](#examples-6)
  - [delete](#delete)
    - [Parameters](#parameters-5)
    - [Examples](#examples-7)
  - [watchChannelForNewMessages](#watchchannelfornewmessages)
    - [Parameters](#parameters-6)
    - [Examples](#examples-8)
  - [watchAllChannelsForNewMessages](#watchallchannelsfornewmessages)
    - [Parameters](#parameters-7)
    - [Examples](#examples-9)
- [Chat Types](#chat-types)
  - [ChatChannel](#chatchannel)
    - [Properties](#properties-2)
  - [ChatMessage](#chatmessage)
    - [Properties](#properties-3)
  - [ChatConversation](#chatconversation)
    - [Properties](#properties-4)
  - [ChatListOptions](#chatlistoptions)
    - [Properties](#properties-5)
  - [ChatReadOptions](#chatreadoptions)
    - [Properties](#properties-6)
  - [ChatSendOptions](#chatsendoptions)
    - [Properties](#properties-7)
  - [ChatDeleteOptions](#chatdeleteoptions)
    - [Properties](#properties-8)
  - [OnMessage](#onmessage)
  - [OnError](#onerror)
- [Wallet](#wallet)
  - [balances](#balances)
    - [Examples](#examples-10)
  - [history](#history)
    - [Parameters](#parameters-8)
    - [Examples](#examples-11)
  - [details](#details)
    - [Parameters](#parameters-9)
    - [Examples](#examples-12)
  - [lookup](#lookup)
    - [Parameters](#parameters-10)
    - [Examples](#examples-13)
  - [send](#send-1)
    - [Parameters](#parameters-11)
    - [Examples](#examples-14)
  - [cancel](#cancel)
    - [Parameters](#parameters-12)
    - [Examples](#examples-15)
- [PaymentStatus](#paymentstatus)
- [Asset](#asset)
  - [Properties](#properties-9)
- [ExchangeRate](#exchangerate)
  - [Properties](#properties-10)
- [Balance](#balance)
  - [Properties](#properties-11)
- [Account](#account)
  - [Properties](#properties-12)
- [Transaction](#transaction)
  - [Properties](#properties-13)

### Bot

A Keybase bot.

#### init

Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.

##### Parameters

- `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The username of your bot's Keybase account.
- `paperkey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The paperkey of your bot's Keybase account.
- `options` **[InitOptions](#initoptions)** The initialization options for your bot.

##### Examples

```javascript
bot.init('username', 'paperkey')
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### initFromRunningService

Initialize your bot by using an existing running service with a logged in user.

##### Parameters

- `homeDir` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The home directory of this currently running service. Leave blank to use the default homeDir for your system.
- `options` **[InitOptions](#initoptions)** The initialization options for your bot.

##### Examples

```javascript
bot.initFromRunningService()
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### myInfo

Get info about your bot!

##### Examples

```javascript
const info = bot.myInfo()
```

Returns **[BotInfo](#botinfo)?** – Useful information like the username, device, and home directory of your bot. If your bot isn't initialized, you'll get `null`.

#### deinit

Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.

##### Examples

```javascript
bot.deinit()
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

### Bot Types

A collection of types used by the bot.

#### InitOptions

Options for initializing the bot.

Type: {verbose: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?}

##### Properties

- `verbose` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**

#### BotInfo

Useful information like the username, device, and home directory of your bot.

Type: {username: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), devicename: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), homeDir: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?}

##### Properties

- `username` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `devicename` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `homeDir` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**

### Chat

**Extends ClientBase**

The chat module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase chat api`.

#### list

Lists your chats, with info on which ones have unread messages.

##### Parameters

- `options` **[ChatListOptions](#chatlistoptions)** An object of options that can be passed to the method.

##### Examples

```javascript
bot.chat.list({unreadOnly: true}).then(chatConversations => console.log(chatConversations))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[ChatConversation](#chatconversation)>>** An array of chat conversations. If there are no conversations, the array is empty.

#### read

Reads the messages in a channel. You can read with or without marking as read.

##### Parameters

- `channel` **[ChatChannel](#chatchannel)** The chat channel to read messages in.
- `options` **[ChatReadOptions](#chatreadoptions)** An object of options that can be passed to the method.

##### Examples

```javascript
alice.chat.read(channel).then(messages => console.log(messages))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;MessageSummary>>** A summary of data about a message, including who send it, when, the content of the message, etc. If there are no messages in your channel, then an error is thrown.

#### send

Send a message to a certain channel.

##### Parameters

- `channel` **[ChatChannel](#chatchannel)** The chat channel to send the message in.
- `message` **[ChatMessage](#chatmessage)** The chat message to send.
- `options` **[ChatSendOptions](#chatsendoptions)** An object of options that can be passed to the method.

##### Examples

```javascript
const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topic_type: 'chat'}
const message = {body: 'Hello kbot!'}
bot.chat.send(channel, message).then(() => console.log('message sent!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### delete

Deletes a message in a channel. Messages have messageId's associated with
them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
and deleting from the CLI may not become apparent immediately.

##### Parameters

- `channel` **[ChatChannel](#chatchannel)** The chat channel to send the message in.
- `messageId` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The chat message to send.
- `options` **[ChatDeleteOptions](#chatdeleteoptions)** An object of options that can be passed to the method.

##### Examples

```javascript
bot.chat.delete(channel, 314).then(() => console.log('message deleted!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### watchChannelForNewMessages

Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel. Note that it receives messages your own bot posts, but from other devices. You can filter out your own messages by looking at a message's sender object.

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

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

#### watchAllChannelsForNewMessages

This function will put your bot into full-read mode, where it reads
everything it can and every new message it finds it will pass to you, so
you can do what you want with it. For example, if you want to write a
Keybase bot that talks shit at anyone who dares approach it, this is the
function to use. Note that it receives messages your own bot posts, but from other devices.
You can filter out your own messages by looking at a message's sender object.

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

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

### Chat Types

A collection of types used by the Chat module.

#### ChatChannel

A Keybase chat channel. This can be a channel in a team, or just an informal channel between two users.

Type: {name: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), public: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean), membersType: MembersType, topicType: TopicType?, topicName: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?}

##### Properties

- `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `public` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
- `membersType` **MembersType**
- `topicType` **TopicType?**
- `topicName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**

#### ChatMessage

A chat message. The content goes in the `body` property!

Type: {body: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

##### Properties

- `body` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

#### ChatConversation

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

Options for the `list` method of the chat module.

Type: {failOffline: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, showErrors: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, topicType: TopicType?, unreadOnly: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?}

##### Properties

- `failOffline` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `showErrors` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `topicType` **TopicType?**
- `unreadOnly` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**

#### ChatReadOptions

Options for the `read` method of the chat module.

Type: {conversationId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?, failOffline: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, pagination: Pagination?, peek: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, unreadOnly: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?}

##### Properties

- `conversationId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**
- `failOffline` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `pagination` **Pagination?**
- `peek` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `unreadOnly` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**

#### ChatSendOptions

Options for the `send` method of the chat module.

Type: {conversationId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?, nonblock: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?, membersType: MembersType}

##### Properties

- `conversationId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**
- `nonblock` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?**
- `membersType` **MembersType**

#### ChatDeleteOptions

Options for the `delete` method of the chat module.

Type: {conversationId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?}

##### Properties

- `conversationId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?**

#### OnMessage

A function to call when a message is received.

Type: function (message: MessageSummary): (void | [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>)

#### OnError

A function to call when an error occurs.

Type: function (error: [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)): (void | [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>)

### Wallet

**Extends ClientBase**

The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`.

#### balances

Provides a list of all accounts owned by the current Keybase user.

##### Examples

```javascript
bot.wallet.balances().then(accounts => console.log(accounts))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Account](#account)>>** An array of accounts. If there are no accounts, the array is empty.

#### history

Provides a list of all transactions in a single account.

##### Parameters

- `accountId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The id of an account owned by a Keybase user.

##### Examples

```javascript
bot.wallet
  .history('GDUKZH6Q3U5WQD4PDGZXYLJE3P76BDRDWPSALN4OUFEESI2QL5UZHCK')
  .then(transactions => console.log(transactions))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Transaction](#transaction)>>** An array of transactions related to the account.

#### details

Get details about a particular transaction

##### Parameters

- `transactionId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The id of the transaction you would like details about.

##### Examples

```javascript
bot.wallet
  .details('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4')
  .then(details => console.log(details))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Transaction](#transaction)>** An object of details about the transaction specified.

#### lookup

Lookup the primary Stellar account ID of a Keybase user.

##### Parameters

- `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the user you want to lookup.

##### Examples

```javascript
const {accountID} = bot.wallet.lookup('patrick')
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;{accountID: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), username: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}>** An object containing the account ID and Keybase username of the found user.

#### send

Send money with your bot!

##### Parameters

- `recipient` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Who you're sending your money to!
- `amount` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** How much money to send.
- `currency` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The currency of the value you're sending. If not included, defaults to XLM.
- `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The message for your payment

##### Examples

```javascript
bot.wallet
  .send('nathunsmitty', '3.50', 'USD', 'Shut up and take my money!')
  .then(() => console.log('Money sent!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Transaction](#transaction)>** The trasaction object of the transaction.

#### cancel

If you send XLM to a Keybase user who has not established a wallet, you can cancel the payment before the recipient claims it and the XLM will be returned to your account.

##### Parameters

- `transactionId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The id of the transaction to cancel.

##### Examples

```javascript
bot.wallet
  .cancel('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4')
  .then(() => console.log('Transaction successfully canceled!'))
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

### PaymentStatus

The status of a payment.

Type: (`"none"` \| `"pending"` \| `"claimable"` \| `"completed"` \| `"error"` \| `"unknown"` \| `"canceled"`)

### Asset

An asset.

Type: {type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), code: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), issuer: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), verifiedDomain: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), issuerName: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

#### Properties

- `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `issuer` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `verifiedDomain` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `issuerName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

### ExchangeRate

An exchange rate, which specifies a currency and the rate of exchange between an asset and that currency.

Type: {currency: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), rate: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

#### Properties

- `currency` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `rate` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

### Balance

A balance.

Type: {asset: [Asset](#asset), amount: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), limit: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

#### Properties

- `asset` **[Asset](#asset)**
- `amount` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `limit` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

### Account

An account, with money inside!

Type: {accountId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), name: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), isPrimary: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean), balance: (null | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Balance](#balance)>), exchangeRate: [ExchangeRate](#exchangerate)}

#### Properties

- `accountId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `isPrimary` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
- `balance` **(null | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Balance](#balance)>)**
- `exchangeRate` **[ExchangeRate](#exchangerate)**

### Transaction

A transaction, where a user sends money to another user.

Type: {txId: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), time: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), status: [PaymentStatus](#paymentstatus), statusDetail: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), amount: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), asset: [Asset](#asset), displayAmount: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), displayCurrency: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), fromStellar: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), toStellar: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), fromUsername: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), toUsername: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), note: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), noteErr: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), unread: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)}

#### Properties

- `txId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `time` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**
- `status` **[PaymentStatus](#paymentstatus)**
- `statusDetail` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `amount` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `asset` **[Asset](#asset)**
- `displayAmount` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `displayCurrency` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `fromStellar` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `toStellar` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `fromUsername` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `toUsername` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `note` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `noteErr` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
- `unread` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## Contributions

Make sure that you have Node, Yarn, and the Keybase application installed. We also use developer tools such as [EditorConfig](https://editorconfig.org), [ESLint](https://eslint.org), [Flow](https://flow.org), and [Prettier](https://prettier.io) so you'll probably want to make sure that your development is configured to use those tools somewhere in your code writing process.

### Setting up the source code

1.  Clone this repo.
2.  Install dependencies with `yarn`.
3.  Build the bot in watch mode with `yarn dev`.
4.  Build the bot for production with `yarn build`.
5.  Build the docs for the bot with `yarn docs`.

That's it. We accept changes via Pull Requests; please make sure that any changes you make build successfully and pass Flow, Prettier, and ESLint checks. We'd also really appreciate it if your PR could follow the [Conventional Commit](https://www.conventionalcommits.org) specification. If you're adding a new feature, please add/update tests, demos, documentation, and whatever else makes sense to go with it. If you have any questions about contributing, please feel free to ask a maintainer!

### Release

We automatically generate a CHANGELOG and version (using [Semantic Versioning](https://semver.org)) `keybase-bot` with [`standard-version`](https://github.com/conventional-changelog/standard-version). To cut a new release:

1.  Make sure all commits that are to be included in the release are squash-merged into `master` branch.
2.  On your local copy of the bot, checkout `master` and ensure it's up to date with `origin/master`.
3.  Run `standard-version` with the command `yarn release`.
4.  Push the new git tags to `origin`. (`git push --follow-tags origin master`)
5.  Publish to npm with `yarn publish`.

## License

BSD-3-Clause
