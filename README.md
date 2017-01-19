# keybase-chat-bot

Exploration with the keybase chat API

This module is a work in progress and may change, but feel free to play with it. As long as you're logged in as a Keybase user, you can use this module to script basic chat commands.

# Installation

```bash
npm install keybase-chat-bot
```

### Hello world

```javascript
//
// This creates a bot and sends a message announcing your own device name
// and username to `kbot`, a Keybase user...who, despite its name, probably
// won't reply to you.
//

var keybaseChatBot = require('keybase-chat-bot')

var bot = new keybaseChatBot.Bot()

bot.init(function (err) {
  if !(err) {
    console.log("Your bot is initialized. It is logged in as " + bot.myInfo().username);

    var channel = {
      name:       'kbot,' + bot.myInfo().username,
      public:     false,
      topic_type: 'chat'
    }

    var send_arg = {
      channel: channel,
      message: {
        body: "Hello kbot! This is " + bot.myInfo().username + " saying hello from my device " + bot.myInfo().devicename
      }
    }

    bot.chatSend(send_arg, function(err) {
      console.log("Done...");
    });
  }

});
```

### Commands

Callback functions always call back with `err` if a reply isn't needed, or `err, result` if a reply is expected.

#### `bot.init(cb)`

As shown above, this must be run to initialize a bot before using it. It checks to make sure you're properly logged into Keybase and gets basic info about your session. Afterwards, feel free to check bot.myInfo() to see or check who you're logged in as.

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

This function will put your bot into insane mode, where it reads everything it can (marking messages as read as it reads them), and every new message it finds it will pass to you, so you can do what you want with it. For example, if you want to write a Keybase bbot that replies to anyone, this is the function to use.

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


## TODO:
  - attachment handling
  - support for chatList options (other dev channels)
  - `messages` and `conversations` come back as null right now if a conversation or inbox is empty, instead of an empty array. I added a workaround, wondering if this should survive or be fixed in the API
