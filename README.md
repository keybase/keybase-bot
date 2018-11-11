# keybase-chat-bot

Script Keybase Chat in Node.js!

This module is a side-project/work in progress and may change or have crashers, but feel free to play with it. As long as you have a Keybase account and a paper key, you can use this module to script basic chat commands.

For more information about the API this module uses, run `keybase chat api -h` from your terminal.

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

### Commands

Anywhere a promise is returned from the bot API, you should handle error with `.cathc(err => { ... })`

#### `bot.init(options)`

As shown above, this must be run to initialize a bot before using it. It checks to make sure you're properly logged into Keybase and gets basic info about your session. Afterwards, feel free to check bot.myInfo() to see or check who you're logged in as.

`options` is a dictionary expecting `username` and `paperkey` (which are pretty self-explanatory), as well as `verbose`, which says whether the bot should log much of what it's doing.

**options**:

```javascript
{
  username: string,
  paperkey: string,
  verbose?: boolean,
}
```

#### `bot.deinit()`

This should be run to after your bot finishes running. It logs you out of your Keybase session.

#### `bot.myInfo()`

returns your username and devicename.

**Return value**:

```javascript
{
  username: string,
  devicename: string,
}
```

#### `bot.chatList(chatOptionsList) : Promise`

lists your chats, with info on which ones have unread messages.

**Chat Options List**:

```javascript
{
  topic_type?: 'chat' | 'DEV',
  unread_only?: boolean,
  show_errors?: boolean,
  fail_offline?: boolean,
}
```

#### `bot.chatSend(chatOptionsSend) : Promise`

Sends a message to a certain channel.

Options should be a data structure like this:

**Chat Options Send**

```javascript
// example options
{
  channel: {
    name:       'yourname,palsname,otherpalsname',
    public:     false,
    topic_type: 'chat',
  },
  message: {
    body: 'This is the body of the message to send.',
  },
  // optional
  conversation_id: 'id_here',
  topic_type: 'chat' | 'dev',
  nonblock: true,
  members_type: 'team',
}
```

#### `bot.chatRead(chatOptionsRead) : Promise`

Reads the messages in a channel. You can read with or without marking as read.

**Chat Options Read**

```javascript
// example options
{
  channel: {
    name:       'yourname,palsname,otherpalsname',
    public:     false,
    topic_type: 'chat',
  }
  // optional
  conversation_id: 'id_here',
  unreadOnly:       true,  // only return unread messages
  peek:             false, // actually mark messages as read
  pagination: {
    num: 10,
    next: '<result.pagination.next from last reply>',
    previous: '<result.pagination.previous from last reply>',
    last: '', // TODO
  }
}
```

#### `bot.chatDelete(ChatOptionsDelete) : Promise`

Deletes a message in a channel. Messages have `messageId`'s associated with them, which you can learn in `bot.chatRead`.

Known bug: the GUI has a cache, and deleting from the CLI may not become apparent immediately.

**Chat Options Delete**

```javascript
// example options
{
  messageId: 12
  channel: {
    name:       'yourname,palsname,otherpalsname',
    public:     false,
    topic_type: 'chat',
  },
  // optional
  conversation_id: 'id_here',
}
```

#### `bot.watchAllChannelsForNewMessages(options)`

This function will put your bot into insane mode, where it reads everything it can (marking messages as read as it reads them), and every new message it finds it will pass to you, so you can do what you want with it. For example, if you want to write a Keybase bot that talks shit at anyone who dares approach it, this is the function to use.

Specifically, it will call the `onMessages` function you provide, clustering messages together by channel. So, for example, if it detects 3 messages from person A, and 2 messages from person B, it will call your `onMessages` function twice; once for each channel.

Example usage:

```javascript
// reply to incoming traffic on all channels with 'thanks!'
var onMessages = function(m) {
  var channel = m.channel
  var messages = m.messages // we could look in this array to read them and write custom replies
  bot.chatSend(
    {
      channel: channel,
      message: {
        body: 'thanks!!!',
      },
    },
    function(err, res) {
      if (err) {
        console.log(err)
      }
    }
  )
}
bot.watchAllChannelsForNewMessages({onMessages: onMessages})
```

This function may take a few seconds to recognize new messages, as the current implementation polls. Soon we expose a realtime stream in the API.

#### `bot.watchChannelForNewMessages(options)`

This is exactly the same as `bot.watchAllChannelsForNewMessages` except the options argument should include a specific channel. Other channels are ignored.

```javascript
bot.watchAllChannelsForNewMessages({
  onMessages: onMessages,
  channel: {
    name:       'yourname,palsname,otherpalsname'
    public:     false,
    topic_type: 'chat',
  }
});
```

This function may take a few seconds to recognize new messages, as the current implementation polls. Soon we expose a realtime stream in the API.

### Contributions

- please install dev dependencies and yarn (an improved npm)
- make sure this passes `yarn build` and `yarn flow`
- if adding a new feature, make a demo or something
