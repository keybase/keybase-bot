# keybase-chat-bot

Script Keybase Chat in Node.js!

This module is a side-project/work in progress and may change or have crashers, but feel free to play with it. As long as you're logged in as a Keybase user, you can use this module to script basic chat commands.

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

var keybaseChatBot = require('keybase-chat-bot')

var bot = new keybaseChatBot.Bot()

bot.init({verbose: false}, function (err) {
  if (!err) {

    var channel = {
      name:       'kbot,' + bot.myInfo().username,
      public:     false,
      topic_type: 'chat'
    }

    var send_arg = {
      channel: channel,
      message: {
        body: 'Hello kbot! Saying hello from my device ' + bot.myInfo().devicename
      }
    }

    bot.chatSend(send_arg, function(err) {
      console.log('That probably sent!', err);
    });
  }

});
```

### Commands

Anywhere we deal with callbacks functions (`cb`), you are required to supply this argument, and expect them to pass `err` or, if appropriate, `err, result`.

#### `bot.init(options, cb)`

As shown above, this must be run to initialize a bot before using it. It checks to make sure you're properly logged into Keybase and gets basic info about your session. Afterwards, feel free to check bot.myInfo() to see or check who you're logged in as.

`options` is a dictionary expecting `verbose`, which says whether the bot should log much of what it's doing.

#### `bot.myInfo()`

returns your username and devicename.

#### `bot.chatList(options, cb)`

lists your chats, with info on which ones have unread messages.

For now, please pass `null` to options, as I haven't implemented options for this yet.

#### `bot.chatSend (options, cb)`

Sends a message to a certain channel.

Options should be a data structure like this:

```javascript
// example options
{
  channel: {
    name:       'yourname,palsname,otherpalsname'
    public:     false,
    topic_type: 'chat'
  },
  message: {
    body: 'This is the body of the message to send.'
  }
}
```

#### `bot.chatRead(options, cb)`

Reads the messages in a channel. You can read with or without marking as read.

```javascript
// example options
{
  unreadOnly:   true  // only return unread messages
  peek:         false // actually mark messages as read
  channel: {
    name:       'yourname,palsname,otherpalsname'
    public:     false,
    topic_type: 'chat'
  }
}
```

#### `bot.chatDelete(options, cb)`

Deletes a message in a channel. Messages have `messageId`'s associated with them, which you can learn in `bot.chatRead`.

Known bug: the GUI has a cache, and deleting from the CLI may not become apparent immediately.

```javascript
// example options
{
  messageId: 12
  channel: {
    name:       'yourname,palsname,otherpalsname'
    public:     false,
    topic_type: 'chat'
  }
}
```

#### `bot.watchAllChannelsForNewMessages(options)`

This function will put your bot into insane mode, where it reads everything it can (marking messages as read as it reads them), and every new message it finds it will pass to you, so you can do what you want with it. For example, if you want to write a Keybase bot that talks shit at anyone who dares approach it, this is the function to use.

Specifically, it will call the `onMessages` function you provide, clustering messages together by channel. So, for example, if it detects 3 messages from person A, and 2 messages from person B, it will call your `onMessages` function twice; once for each channel.

Example usage:

```javascript
// reply to incoming traffic on all channels with 'thanks!'
var onMessages = function(m) {
  var channel  = m.channel
  var messages = m.messages // we could look in this array to read them and write custom replies
  bot.chatSend({
    channel: channel
    message: {
      body: 'thanks!!!'
    }
  }, function(err, res) {
    if (err) {console.log(err);}
  });
}
bot.watchAllChannelsForNewMessages({onMessages: onMessages});
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
    topic_type: 'chat'
  }
});
```

This function may take a few seconds to recognize new messages, as the current implementation polls. Soon we expose a realtime stream in the API.


## TODO:
  - attachment handling (posting/getting)
  - `verbose` option in init is mostly meaningless now. need to finish that
  - support for chatList options (other dev channels)

### Contributions

- please install dev dependencies and yarn (an improved npm)
- make sure this passes `yarn build` and `yarn flow`
- if adding a new feature, make a demo or something

