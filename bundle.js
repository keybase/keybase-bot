'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var child_process = require('child_process');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// JSON in stdout. calls back with an error if output doesn't
// parse as JSON or there's an error in execution
//
// if passed a Buffer in stdinBuffer, pipes that into the program

var execToJson = function execToJson(params) {
  var stdinBuffer = params.stdinBuffer;
  var out = null;
  var outBuffers = [];
  var child = child_process.spawn(params.command, params.args || []);

  if (stdinBuffer) {
    child.stdin.write(stdinBuffer);
    child.stdin.end();
  }

  child.stdout.on('data', function (chunk) {
    outBuffers.push(chunk);
  });
  return new Promise(function (resolve, reject) {
    child.on('close', function (code) {
      if (code) {
        reject(new Error("exited with code ".concat(code)));
      } else {
        var stdout = Buffer.concat(outBuffers).toString('utf8');

        try {
          out = JSON.parse(stdout);
        } catch (e) {
          reject(e);
        }
      }

      resolve(out);
    });
  });
};

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------
var getKeybaseNativeStatusJson = function getKeybaseNativeStatusJson() {
  return execToJson({
    command: 'keybase',
    args: ['status', '-j']
  });
}; // ----------------------------------------------------------------------------
// calls back with just {username, devicename}, if fully logged in and
// unlocked.
// ----------------------------------------------------------------------------


var getKeybaseUsernameAndDevicename = function getKeybaseUsernameAndDevicename() {
  return new Promise(function (resolve, reject) {
    getKeybaseNativeStatusJson().then(function (status) {
      if (status && status.Username && status.Device && status.Device.name) {
        resolve({
          username: status.Username,
          devicename: status.Device.name
        });
      } else {
        reject(new Error('failed to get username + device name'));
      }
    });
  });
};

var CHAT_API_VERSION = 1;

// ----------------------------------------------------------------------------
// calls back with a JSON object describing the user's
// status with Keybase. For example, status.Username and status.Device.name
// may be of interest
// ----------------------------------------------------------------------------
var runApiCommand = function runApiCommand(arg) {
  var input = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options: arg.options
    }
  };
  return new Promise(function (resolve, reject) {
    var inputString = JSON.stringify(input);
    var size = inputString.length;
    execToJson({
      command: 'keybase',
      args: ['chat', 'api'],
      stdinBuffer: Buffer.alloc(size, inputString, 'utf8')
    }).then(function (o) {
      var res = null;

      if (o && o.result) {
        res = o.result;
      } else if (o && o.error) {
        var oError = o.error;
        reject(new Error(oError.message || oError.toString()));
      } else {
        reject(new Error("Unknown error parsing result - no \"result\" field"));
      }

      resolve(res);
    }).catch(function (err) {
      reject(err);
    });
  });
};

var ChannelWatcher =
/*#__PURE__*/
function () {
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  function ChannelWatcher(arg) {
    _classCallCheck(this, ChannelWatcher);

    this._bot = arg.bot;
    this._onMessages = arg.onMessages;
    this._channel = arg.channel;
    this._highestId = -1;
    this._loopCount = 0;

    this._watchLoop();
  } // --------------------------------------------------------------------------


  _createClass(ChannelWatcher, [{
    key: "_didISendMessage",
    value: function _didISendMessage(m) {
      var myInfo = this._bot.myInfo();

      return myInfo ? myInfo.username === m.msg.sender.username : false;
    } // --------------------------------------------------------------------------

  }, {
    key: "_checkForNewMessages",
    value: function _checkForNewMessages() {
      var _this = this;

      var newMessages = [];
      return this._bot.chatRead({
        channel: this._channel,
        unreadOnly: true
      }).then(function (res) {
        if (res && res.ratelimits) {
          _this._bot._gasPreserver.passGas(res.ratelimits);
        }

        if (res && res.messages) {
          newMessages = res.messages;
          _this._highestId = res.messages.reduce(function (a, m) {
            return Math.max(a, m.msg.id);
          }, _this._highestId);
        }

        console.log("loopCount: ".concat(_this._loopCount, " newMessages: ").concat(newMessages.length));

        if (newMessages.length) {
          return _this._onMessages({
            messages: newMessages,
            channel: _this._channel
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "_watchLoop",
    value: function _watchLoop() {
      var _this2 = this;

      console.log("".concat(this._loopCount, " '").concat(this._channel.name, " entering watchLoop"));

      this._checkForNewMessages().then(function () {
        var delay = _this2._bot._gasPreserver.recommendedWait();

        console.log("".concat(_this2._loopCount, " '").concat(_this2._channel.name, " finishing watchLoop ").concat(delay));
        setTimeout(function () {
          _this2._loopCount++;

          _this2._watchLoop();
        }, delay);
      });
    }
  }]);

  return ChannelWatcher;
}();

function chatChannelToKey(channel) {
  // TODO: come back to this
  return JSON.stringify([channel.name, channel.public, channel.topic_type]);
}

var FullWatcher =
/*#__PURE__*/
function () {
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  function FullWatcher(arg) {
    _classCallCheck(this, FullWatcher);

    this._bot = arg.bot;
    this._onMessages = arg.onMessages;
    this._loopCount = 0;

    this._watchLoop();
  } // --------------------------------------------------------------------------


  _createClass(FullWatcher, [{
    key: "_checkForNewMessagesInOneConversation",
    value: function _checkForNewMessagesInOneConversation(conversation) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._bot.chatRead({
          channel: conversation.channel,
          unreadOnly: true
        }).then(function (res) {
          if (res && res.ratelimits) {
            _this._bot._gasPreserver.passGas(res.ratelimits);

            resolve();
          }

          if (res && res.messages) {
            var newMessages = res.messages;
            console.log("found: ".concat(newMessages.length, " newMessages: ").concat(conversation.channel));

            if (res.messages.length) {
              _this._onMessages({
                messages: newMessages,
                channel: conversation.channel
              });

              resolve();
            }
          }
        });
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "_checkForNewMessagesInConversations",
    value: function _checkForNewMessagesInConversations(arg) {
      var _this2 = this;

      var conversations = arg.conversations;
      var index = arg.index;

      if (!index) {
        index = 0;
      }

      if (index === conversations.length) {
        return Promise.resolve(null);
      }

      console.log("CHECKING ".concat(index, ", ").concat(conversations[index].channel, " for new messages"));
      return this._checkForNewMessagesInOneConversation(conversations[index]).then(function () {
        if (index + 1 === conversations.length) ;

        return _this2._checkForNewMessagesInConversations({
          conversations: conversations,
          index: index + 1
        });
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "_checkForNewMessagesInAllConversations",
    value: function _checkForNewMessagesInAllConversations() {
      var _this3 = this;

      return this._bot.chatList({}).then(function (res) {
        if (res && res.ratelimits) {
          _this3._bot._gasPreserver.passGas(res.ratelimits);
        }

        if (res && res.conversations) {
          var conversations = res.conversations.filter(function (c) {
            return c.unread;
          });
          console.log("Of ".concat(res.conversations.length, " there are ").concat(conversations.length, " that are unread."));
          return _this3._checkForNewMessagesInConversations({
            conversations: conversations
          });
        }
      }).catch(function (err) {
        console.log('Got error getting chat list:', err);
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "_watchLoop",
    value: function _watchLoop() {
      var _this4 = this;

      this._checkForNewMessagesInAllConversations().then(function () {
        var delay = _this4._bot._gasPreserver.recommendedWait();

        setTimeout(function () {
          _this4._loopCount++;

          _this4._watchLoop();
        }, delay);
      });
    } // --------------------------------------------------------------------------

  }]);

  return FullWatcher;
}();

var tweakables = {
  MIN_CHANNEL_WATCH_LOOP: 1000,
  MAX_CHANNEL_WATCH_LOOP: 60000,
  DEFAULT_GAS: 500,
  DEFAULT_TIME_LEFT: 1500,
  TARGET_GAS_REMAINING: 100,
  SAFETY_BUFFER: 1.5,
  GAS_MONITOR_WINDOW: 10000,
  GAS_ADJ_MULT: 1.1
};

var GasPreserver =
/*#__PURE__*/
function () {
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  function GasPreserver() {
    _classCallCheck(this, GasPreserver);

    this._lastPassedGas = [];
    this._currentWait = tweakables.MIN_CHANNEL_WATCH_LOOP;
  } // --------------------------------------------------------------------------


  _createClass(GasPreserver, [{
    key: "passGas",
    value: function passGas(rateLimits) {
      this._lastPassedGas.push(rateLimits[0]); // let's just take the first for now


      this._filterOldGas();
    } // --------------------------------------------------------------------------

  }, {
    key: "recommendedWait",
    value: function recommendedWait() {
      var speed = this._getCurrentSpeed();

      var gas = this._getRemainingGas();

      var gas_left_with_buffer = Math.max(0, gas - tweakables.TARGET_GAS_REMAINING);

      var timeLeft = this._getTimeTillReset(); // this._currentWait = 1000 * (speed * timeLeft / gas) * tweakables.SAFETY_BUFFER


      if (speed * timeLeft > gas_left_with_buffer) {
        this._currentWait *= tweakables.GAS_ADJ_MULT;
      } else {
        this._currentWait /= tweakables.GAS_ADJ_MULT;
      }

      this._currentWait = Math.max(tweakables.MIN_CHANNEL_WATCH_LOOP, this._currentWait);
      this._currentWait = Math.min(tweakables.MAX_CHANNEL_WATCH_LOOP, this._currentWait);
      console.log("...speed=".concat(speed.toFixed(2), ", gas=").concat(gas, ", timeLeft=").concat(timeLeft, ", currentWait=").concat(this._currentWait, ", history=").concat(this._lastPassedGas.length));
      return this._currentWait;
    } // --------------------------------------------------------------------------

  }, {
    key: "_filterOldGas",
    value: function _filterOldGas() {
      var ind = 0; // throw away any data before a reset

      for (ind = this._lastPassedGas.length - 2; ind >= 0; ind--) {
        var latest = this._lastPassedGas[this._lastPassedGas.length - 1];
        var curr = this._lastPassedGas[ind];

        if (curr.gas < latest.gas || curr.reset < latest.reset) {
          break;
        }
      }

      if (ind >= 0) {
        console.log('BEFORE GAS CLEANUP', this._lastPassedGas);

        this._lastPassedGas.splice(0, ind + 1);

        console.log('AFTER GAS CLEANUP', this._lastPassedGas);
      } // now throw away anything over a certain age


      if (this._lastPassedGas.length > 2) {
        var keepers = this._lastPassedGas.slice(-2);

        var candidates = this._lastPassedGas.slice(0, -2);

        candidates = candidates.filter(function (c) {
          return c.reset < keepers[1].reset + tweakables.GAS_MONITOR_WINDOW / 1000;
        });
        this._lastPassedGas = candidates.concat(keepers); // console.log(this._lastPassedGas)
      }
    } // --------------------------------------------------------------------------

  }, {
    key: "_getCurrentSpeed",
    value: function _getCurrentSpeed() {
      if (this._lastPassedGas.length < 2) {
        return 1;
      } else {
        var g = this._lastPassedGas;
        var glast = g[g.length - 1];
        var speed = (g[0].gas - glast.gas) / (1 + g[0].reset - glast.reset);
        return speed;
      }
    } // --------------------------------------------------------------------------

  }, {
    key: "_getRemainingGas",
    value: function _getRemainingGas() {
      if (this._lastPassedGas.length < 1) {
        return tweakables.DEFAULT_GAS;
      } else {
        return this._lastPassedGas[this._lastPassedGas.length - 1].gas;
      }
    } // --------------------------------------------------------------------------

  }, {
    key: "_getTimeTillReset",
    value: function _getTimeTillReset() {
      if (this._lastPassedGas.length < 1) {
        return tweakables.DEFAULT_TIME_LEFT;
      } else {
        return this._lastPassedGas[this._lastPassedGas.length - 1].reset;
      }
    } // --------------------------------------------------------------------------

  }]);

  return GasPreserver;
}();

function keybaseExec(args, stdinBuffer) {
  var child = child_process.spawn('keybase', args);
  var outBuffers = [];
  var out = null;

  if (stdinBuffer) {
    child.stdin.write(stdinBuffer);
  }

  child.stdin.end();
  child.stdout.on('data', function (chunk) {
    outBuffers.push(chunk);
  });
  return new Promise(function (resolve, reject) {
    child.on('close', function (code) {
      if (code) {
        reject(new Error("exited with code ".concat(code)));
      } else {
        var stdout = Buffer.concat(outBuffers).toString('utf8');

        try {
          out = stdout === '' ? stdout : JSON.parse(stdout);
        } catch (e) {
          reject(e);
        }
      }

      resolve(out);
    });
  });
}

/**
 * A Keybase bot.
 *
 * @class Bot
 */
var Bot =
/*#__PURE__*/
function () {
  // --------------------------------------------------------------------------
  function Bot() {
    _classCallCheck(this, Bot);

    this._verbose = false;
    this._dPair = null;
    this._initialized = false;
    this._channelWatchers = new Map();
    this._fullWatcher = null;
    this._gasPreserver = new GasPreserver();
  }
  /**
   * Initializes a bot by logging in with the given credentials. This must be run before your bot can be used.
   *
   * @param {InitOptions} options – An object expecting `username` and `paperkey` (which are pretty self-explanatory), as well as `verbose`, which says whether the bot should log much of what it's doing.
   * @returns {Promise<?string>}
   * @memberof Bot
   */


  _createClass(Bot, [{
    key: "init",
    value: function init(options) {
      var _this = this;

      this._verbose = options.verbose || false;
      return keybaseExec(['oneshot', '--username', options.username], options.paperkey).then(function () {
        return getKeybaseUsernameAndDevicename().then(function (currentDPair) {
          if (currentDPair) {
            _this._dPair = currentDPair;

            _this._log("intialized ".concat(currentDPair.username, " (device=").concat(currentDPair.devicename, ")"));
          }

          _this._initialized = true;
        });
      });
    }
    /**
     * Deinitializes a bot by logging it out of its current Keybase session. Should be run after your bot finishes.
     *
     * @returns {Promise<void>}
     * @memberof Bot
     */

  }, {
    key: "deinit",
    value: function deinit() {
      keybaseExec({
        args: ['logout']
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "chatList",
    value: function chatList(options) {
      return this._safelyRunApiCommand({
        method: 'list',
        options: options
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "chatSend",
    value: function chatSend(options) {
      var channel = options.channel,
          message = options.message;
      return this._safelyRunApiCommand({
        method: 'send',
        options: {
          channel: channel,
          message: message
        }
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "chatRead",
    value: function chatRead(options) {
      var channel = options.channel;
      var peek = false;
      var unreadOnly = false;

      if (typeof options.peek !== 'undefined') {
        peek = options.peek;
      }

      if (typeof options.unreadOnly !== 'undefined') {
        unreadOnly = options.unreadOnly;
      }

      return this._safelyRunApiCommand({
        method: 'read',
        options: {
          channel: channel,
          peek: peek,
          unreadOnly: unreadOnly
        }
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "chatDelete",
    value: function chatDelete(options) {
      var channel = options.channel,
          messageId = options.messageId;
      return this._safelyRunApiCommand({
        method: 'delete',
        options: {
          channel: channel,
          messageId: messageId
        }
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "myInfo",
    value: function myInfo() {
      return this._dPair;
    } // --------------------------------------------------------------------------

  }, {
    key: "watchChannelForNewMessages",
    value: function watchChannelForNewMessages(options) {
      var channel = options.channel,
          onMessages = options.onMessages;
      var key = chatChannelToKey(channel);

      if (this._channelWatchers.has(key)) {
        throw new Error("already watching the channel ".concat(JSON.stringify(channel)));
      } else {
        this._channelWatchers.set(key, new ChannelWatcher({
          channel: channel,
          onMessages: onMessages,
          bot: this
        }));
      }
    } // --------------------------------------------------------------------------

  }, {
    key: "watchAllChannelsForNewMessages",
    value: function watchAllChannelsForNewMessages(options) {
      var onMessages = options.onMessages;

      if (this._fullWatcher) {
        throw new Error("already watching watching; can't have 2 message watchers}");
      } else {
        this._fullWatcher = new FullWatcher({
          onMessages: onMessages,
          bot: this
        });
      }
    } // --------------------------------------------------------------------------
    // --------------------------------------------------------------------------
    //  - make sure inited ok
    //  - make sure user is still the same user since init
    // --------------------------------------------------------------------------

  }, {
    key: "_log",
    value: function _log(msg) {
      if (this._verbose) {
        console.log(msg);
      }
    }
  }, {
    key: "_checkUserAndInit",
    value: function _checkUserAndInit() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        getKeybaseUsernameAndDevicename().then(function (currentDPair) {
          if (!_this2._initialized || !currentDPair || !_this2._dPair || currentDPair.username !== _this2._dPair.username) {
            reject(new Error("Uh-oh, username has changed or we never initialized correctly."));
          }

          resolve();
        });
      });
    } // --------------------------------------------------------------------------

  }, {
    key: "_safelyRunApiCommand",
    value: function _safelyRunApiCommand(arg) {
      return this._checkUserAndInit().then(function () {
        return runApiCommand(arg);
      });
    }
  }]);

  return Bot;
}();

exports.Bot = Bot;
