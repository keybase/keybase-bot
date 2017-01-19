#!/usr/bin/env node
var Bot    = require('../index.js').Bot
var mathjs = require('mathjs')

//
// This bot replies to any message from any user,
// starting with `/math` (in any channel)
// by actually trying to do the math. For example
// send it :
//
//          /math sqrt(pi/2) * 3!`
//

// -----------------------------------------------------------------------------

var msgReply = function(s) {
  var a1, a2, ans, b1, b2, e, eqn;
  try {
    ans = '= ' + mathjs["eval"](s).toString();
  } catch (error) {
    e = error;
    a1 = Math.floor(Math.random() * 10);
    b1 = Math.floor(Math.random() * 10);
    a2 = Math.floor(Math.random() * 10);
    b2 = Math.floor(Math.random() * 10);
    eqn = "(" + a1 + " + " + b1 + "i) * (" + a2 + " + " + b2 + "i)";
    ans = "Sorry, I can't do that math. Did you know " + eqn + " = " + (mathjs["eval"](eqn).toString()) + "? True.";
  }
  return ans;
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

var bot = new Bot()

bot.init(null, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('I am me! ', bot.myInfo().username, bot.myInfo().devicename)
    var onMessages = function(o) {
      for (m of o.messages) {
        var prefix = m.msg.content.text.body.slice(0,6)
        console.log(prefix)
        if (prefix === '/math ') {
          var reply = {
            body: msgReply(m.msg.content.text.body.slice(6)),
          }
          bot.chatSend({channel: o.channel, message: reply}, function(err,res) {
            if (err) {
              console.log(err);
            }
          });
        }
      }
    }
    console.log('Beginning watch for new messages.');
    console.log('Tell anyone to send a message to ' + bot.myInfo().username + 'starting with /math');
    bot.watchAllChannelsForNewMessages({onMessages: onMessages});
  }
})

