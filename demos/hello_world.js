#!/usr/bin/env node
var Bot = require('../index.js').Bot

var bot = new Bot()

bot.init(function (err) {
  if (err) {
    console.log(err)
  } else {

    console.log("Your bot is initialized. It is logged in as " + bot.myInfo().username);

    var channel = {
      name: 'kbot,' + bot.myInfo().username,
      public: false,
      topic_type: 'chat'
    }

    var send_arg = {
      channel: channel,
      message: {
        body: "Hello kbot! This is " + bot.myInfo().username + " saying hello from my device " + bot.myInfo().devicename
      }
    }

    bot.chatSend(send_arg, function(err) {
      if (err) {
        console.log(err);
      }
    });
  }

});
