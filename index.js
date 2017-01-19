(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("child_process"));
	else if(typeof define === 'function' && define.amd)
		define(["child_process"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("child_process")) : factory(root["child_process"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Bot = undefined;

	var _bot = __webpack_require__(1);

	exports.Bot = _bot.Bot;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Bot = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        ======\n        Initialized ', '! This chat module is a work in progress. Please do not use.\n        ======\n      '], ['\n        ======\n        Initialized ', '! This chat module is a work in progress. Please do not use.\n        ======\n      ']);

	var _keybaseStatus = __webpack_require__(2);

	var _chatApi = __webpack_require__(5);

	var _channelWatcher = __webpack_require__(7);

	var _utils = __webpack_require__(8);

	var _fullWatcher = __webpack_require__(9);

	var _gasPreserver = __webpack_require__(10);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ============================================================================

	var Bot = function () {

	  // --------------------------------------------------------------------------

	  function Bot() {
	    _classCallCheck(this, Bot);

	    this._dPair = null;
	    this._initialized = false;
	    this._channelWatchers = new Map();
	    this._fullWatcher = null;
	    this._gasPreserver = new _gasPreserver.GasPreserver();
	  }

	  // --------------------------------------------------------------------------

	  _createClass(Bot, [{
	    key: 'init',
	    value: function init(cb) {
	      var _this = this;

	      (0, _keybaseStatus.getKeybaseUsernameAndDevicename)(function (err, currentDPair) {
	        if (currentDPair) {
	          _this._dPair = currentDPair;
	          console.log('intialized ' + currentDPair.username + ' (device=' + currentDPair.devicename + ')');
	        }
	        _this._initialized = true;
	        var successStr = err ? 'WITH ERROR' : 'successfully';
	        console.log(_templateObject, successStr);

	        cb(err);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'chatList',
	    value: function chatList(cb) {
	      this._safelyRunApiCommand({ method: 'list', options: {} }, function (err, res) {
	        return cb(err, res);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'chatSend',
	    value: function chatSend(options, cb) {
	      var channel = options.channel,
	          message = options.message;

	      this._safelyRunApiCommand({ method: 'send', options: { channel: channel, message: message } }, function (err, res) {
	        return cb(err, res);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'chatRead',
	    value: function chatRead(options, cb) {
	      var channel = options.channel;

	      var peek = false;
	      var unread_only = false;
	      if (typeof options.peek !== 'undefined') {
	        peek = options.peek;
	      }
	      if (typeof options.unreadOnly !== 'undefined') {
	        unread_only = options.unreadOnly;
	      }
	      this._safelyRunApiCommand({ method: 'read', options: { channel: channel, peek: peek, unread_only: unread_only } }, function (err, res) {
	        return cb(err, res);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'chatDelete',
	    value: function chatDelete(options, cb) {
	      var channel = options.channel;

	      var message_id = options.messageId;
	      this._safelyRunApiCommand({ method: 'delete', options: { channel: channel, message_id: message_id } }, function (err, res) {
	        return cb(err, res);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'myInfo',
	    value: function myInfo() {
	      return this._dPair;
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'watchChannelForNewMessages',
	    value: function watchChannelForNewMessages(options) {
	      // TODO: once I have real new message info from patrick drop this "starting now" idea.
	      var channel = options.channel,
	          onMessages = options.onMessages;

	      var key = (0, _utils.chatChannelToKey)(channel);
	      if (this._channelWatchers.has(key)) {
	        throw new Error('already watching the channel ' + JSON.stringify(channel));
	      } else {
	        this._channelWatchers.set(key, new _channelWatcher.ChannelWatcher({ channel: channel, onMessages: onMessages, bot: this }));
	      }
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'watchAllChannelsForNewMessages',
	    value: function watchAllChannelsForNewMessages(options) {
	      // TODO: once I have real new message info from patrick drop this "starting now" idea.
	      var onMessages = options.onMessages;

	      if (this._fullWatcher) {
	        throw new Error('already watching watching; can\'t have 2 message watchers}');
	      } else {
	        this._fullWatcher = new _fullWatcher.FullWatcher({ onMessages: onMessages, bot: this });
	      }
	    }

	    // --------------------------------------------------------------------------


	    // --------------------------------------------------------------------------
	    //  - make sure inited ok
	    //  - make sure user is still the same user since init
	    // --------------------------------------------------------------------------

	  }, {
	    key: '_checkUserAndInit',
	    value: function _checkUserAndInit(cb) {
	      var _this2 = this;

	      // console.log('+ checking user and init')
	      (0, _keybaseStatus.getKeybaseUsernameAndDevicename)(function (err, currentDPair) {
	        if (!err && (!_this2._initialized || !currentDPair || !_this2._dPair || currentDPair.username !== _this2._dPair.username)) {
	          err = new Error('Uh-oh, username has changed or we never initialized correctly.');
	        }
	        // let ok:string = (err === null).toString()
	        // console.log(`- checking user and init (ok=${ok})`)
	        return cb(err);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_safelyRunApiCommand',
	    value: function _safelyRunApiCommand(arg, cb) {
	      this._checkUserAndInit(function (err) {
	        if (!err) {
	          (0, _chatApi.runApiCommand)(arg, function (err, res) {
	            return cb(err, res);
	          });
	        } else {
	          return cb(err, null);
	        }
	      });
	    }
	  }]);

	  return Bot;
	}();

	exports.Bot = Bot;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getKeybaseUsernameAndDevicename = exports.getKeybaseNativeStatusJson = undefined;

	var _execToJson = __webpack_require__(3);

	// ----------------------------------------------------------------------------
	// calls back with a JSON object describing the user's
	// status with Keybase. For example, status.Username and status.Device.name
	// may be of interest
	// ----------------------------------------------------------------------------

	function getKeybaseNativeStatusJson(cb) {
	  (0, _execToJson.execToJson)({ command: 'keybase', args: ['status', '-j'] }, function (err, status) {
	    cb(err, status);
	  });
	}

	// ----------------------------------------------------------------------------
	// calls back with just {username, devicename}, if fully logged in and
	// unlocked.
	// ----------------------------------------------------------------------------

	function getKeybaseUsernameAndDevicename(cb) {
	  getKeybaseNativeStatusJson(function (err, status) {
	    if (status && status.Username && status.Device && status.Device.name) {
	      return cb(null, { username: status.Username, devicename: status.Device.name });
	    } else {
	      if (!err) {
	        err = new Error('failed to get username + device name');
	      }
	      return cb(err, null);
	    }
	  });
	}

	exports.getKeybaseNativeStatusJson = getKeybaseNativeStatusJson;
	exports.getKeybaseUsernameAndDevicename = getKeybaseUsernameAndDevicename;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.execToJson = undefined;

	var _child_process = __webpack_require__(4);

	// takes a string to run on the command line that is expecting
	// JSON in stdout. calls back with an error if output doesn't
	// parse as JSON or there's an error in execution
	//
	// if passed a Buffer in stdinBuffer, pipes that into the program

	function execToJson(params, cb) {
	  var stdinBuffer = params.stdinBuffer;
	  var out = null;
	  var startTime = Date.now();
	  var err = null;
	  var outBuffers = [];
	  var child = (0, _child_process.spawn)(params.command, params.args || []);

	  if (stdinBuffer) {
	    console.log(stdinBuffer.toString('utf8'));
	    child.stdin.write(stdinBuffer);
	    child.stdin.end();
	  }

	  child.stdout.on('data', function (chunk) {
	    outBuffers.push(chunk);
	  });

	  child.on('close', function (code) {
	    if (code) {
	      err = new Error('exited with code ' + code);
	    } else {
	      var stdout = Buffer.concat(outBuffers).toString('utf8');
	      try {
	        out = JSON.parse(stdout);
	      } catch (e) {
	        err = e;
	      }
	    }

	    // if (stdinBuffer) {
	    //   console.log(`...(${Date.now() - startTime}ms)` + stdinBuffer.toString('utf8'))
	    // }

	    cb(err, out);
	  });
	}
	exports.execToJson = execToJson;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runApiCommand = undefined;

	var _execToJson = __webpack_require__(3);

	var _constants = __webpack_require__(6);

	// ----------------------------------------------------------------------------
	// calls back with a JSON object describing the user's
	// status with Keybase. For example, status.Username and status.Device.name
	// may be of interest
	// ----------------------------------------------------------------------------

	function runApiCommand(arg, cb) {
	  var input = {
	    method: arg.method,
	    params: {
	      version: _constants.CHAT_API_VERSION,
	      options: arg.options
	    }
	  };

	  (0, _execToJson.execToJson)({ command: 'keybase', args: ['chat', 'api'], stdinBuffer: new Buffer(JSON.stringify(input), 'utf8') }, function (err, o) {
	    var res = null;
	    if (!err) {
	      if (o && o.result) {
	        res = o.result;
	      } else if (o && o.error) {
	        var oError = o.error;
	        err = new Error(oError.message || oError.toString());
	      } else {
	        err = new Error('Unknown error parsing result - no "result" field');
	      }
	    }

	    cb(err, res);
	  });
	}

	exports.runApiCommand = runApiCommand;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CHAT_API_VERSION = 1;

	exports.CHAT_API_VERSION = CHAT_API_VERSION;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChannelWatcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _bot = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ChannelWatcher = function () {

	  // --------------------------------------------------------------------------

	  // --------------------------------------------------------------------------

	  function ChannelWatcher(arg) {
	    _classCallCheck(this, ChannelWatcher);

	    this._bot = arg.bot;
	    this._onMessages = arg.onMessages;
	    this._channel = arg.channel;
	    this._highestId = -1;
	    this._loopCount = 0;
	    this._treatOldMessagesAsNew = !!arg.treatOldMessagesAsNew;
	    this._watchLoop();
	  }

	  // --------------------------------------------------------------------------

	  _createClass(ChannelWatcher, [{
	    key: '_didISendMessage',
	    value: function _didISendMessage(m) {
	      var myInfo = this._bot.myInfo();
	      return myInfo ? myInfo.username === m.msg.sender.username : false;
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_checkForNewMessages',
	    value: function _checkForNewMessages(cb) {
	      var _this = this;

	      var newMessages = [];
	      this._bot.chatRead({ channel: this._channel, unreadOnly: true }, function (err, res) {
	        if (err) {
	          console.log(err);
	        }
	        if (res && res.ratelimits) {
	          _this._bot._gasPreserver.passGas(res.ratelimits);
	        }
	        if (res && res.messages) {
	          newMessages = res.messages;
	          _this._highestId = res.messages.reduce(function (a, m) {
	            return Math.max(a, m.msg.id);
	          }, _this._highestId);
	        }
	        console.log('loopCount: ' + _this._loopCount + ' newMessages: ' + newMessages.length);
	        if (newMessages.length) {
	          _this._onMessages({ messages: newMessages, channel: _this._channel });
	        }
	        return cb(err);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_watchLoop',
	    value: function _watchLoop() {
	      var _this2 = this;

	      console.log(this._loopCount + ' \'' + this._channel.name + ' entering watchLoop');
	      this._checkForNewMessages(function () {
	        var delay = _this2._bot._gasPreserver.recommendedWait();
	        console.log(_this2._loopCount + ' \'' + _this2._channel.name + ' finishing watchLoop ' + delay);
	        setTimeout(function () {
	          _this2._loopCount++;
	          _this2._watchLoop();
	        }, delay);
	      });
	    }
	  }]);

	  return ChannelWatcher;
	}();

	exports.ChannelWatcher = ChannelWatcher;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	function chatChannelToKey(channel) {
	  // TODO: come back to this
	  return JSON.stringify([channel.name, channel.public, channel.topic_type]);
	}
	exports.chatChannelToKey = chatChannelToKey;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FullWatcher = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _bot = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FullWatcher = function () {

	  // --------------------------------------------------------------------------

	  function FullWatcher(arg) {
	    _classCallCheck(this, FullWatcher);

	    this._bot = arg.bot;
	    this._onMessages = arg.onMessages;
	    this._loopCount = 0;
	    this._watchLoop();
	  }

	  // --------------------------------------------------------------------------

	  // --------------------------------------------------------------------------

	  _createClass(FullWatcher, [{
	    key: '_checkForNewMessagesInOneConversation',
	    value: function _checkForNewMessagesInOneConversation(conversation, cb) {
	      var _this = this;

	      this._bot.chatRead({ channel: conversation.channel, unreadOnly: true }, function (err, res) {
	        if (res && res.ratelimits) {
	          _this._bot._gasPreserver.passGas(res.ratelimits);
	        }
	        if (res && res.messages) {
	          var newMessages = res.messages;
	          console.log('found: ' + newMessages.length + ' newMessages: ' + conversation.channel);
	          if (res.messages.length) {
	            _this._onMessages({ messages: newMessages, channel: conversation.channel });
	          }
	        }
	        cb(err);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_checkForNewMessagesInConversations',
	    value: function _checkForNewMessagesInConversations(arg, cb) {
	      var _this2 = this;

	      var conversations = arg.conversations,
	          index = arg.index;

	      if (!index) {
	        index = 0;
	      }
	      console.log('CHECKING ' + index + ', ' + conversations[index].channel + ' for new messages');
	      this._checkForNewMessagesInOneConversation(conversations[index], function (err, res) {
	        if (index + 1 === conversations.length) {
	          return cb(err);
	        } else {
	          _this2._checkForNewMessagesInConversations({ conversations: conversations, index: index + 1 }, cb);
	        }
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_checkForNewMessagesInAllConversations',
	    value: function _checkForNewMessagesInAllConversations(cb) {
	      var _this3 = this;

	      this._bot.chatList(function (err, res) {
	        if (err) {
	          console.log(err);
	        } else {
	          if (res && res.ratelimits) {
	            _this3._bot._gasPreserver.passGas(res.ratelimits);
	          }
	          if (res && res.conversations) {
	            var conversations = res.conversations.filter(function (c) {
	              return c.unread;
	            });
	            console.log('Of ' + res.conversations.length + ' there are ' + conversations.length + ' that are unread.');
	            _this3._checkForNewMessagesInConversations({ conversations: conversations }, function (err) {
	              cb(err);
	              return;
	            });
	          }
	        }
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_watchLoop',
	    value: function _watchLoop() {
	      var _this4 = this;

	      this._checkForNewMessagesInAllConversations(function () {
	        var delay = _this4._bot._gasPreserver.recommendedWait();
	        setTimeout(function () {
	          _this4._loopCount++;
	          _this4._watchLoop();
	        }, delay);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }]);

	  return FullWatcher;
	}();

	exports.FullWatcher = FullWatcher;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GasPreserver = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tweakables = __webpack_require__(11);

	var _tweakables2 = _interopRequireDefault(_tweakables);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GasPreserver = function () {

	  // --------------------------------------------------------------------------

	  // --------------------------------------------------------------------------

	  function GasPreserver() {
	    _classCallCheck(this, GasPreserver);

	    this._lastPassedGas = [];
	    this._currentWait = _tweakables2.default.MIN_CHANNEL_WATCH_LOOP;
	  }

	  // --------------------------------------------------------------------------

	  _createClass(GasPreserver, [{
	    key: 'passGas',
	    value: function passGas(rateLimits) {
	      this._lastPassedGas.push(rateLimits[0]); // let's just take the first for now
	      this._filterOldGas();
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: 'recommendedWait',
	    value: function recommendedWait() {
	      var speed = this._getCurrentSpeed();
	      var gas = this._getRemainingGas();
	      var gas_left_with_buffer = Math.max(0, gas - _tweakables2.default.TARGET_GAS_REMAINING);
	      var timeLeft = this._getTimeTillReset();
	      // this._currentWait = 1000 * (speed * timeLeft / gas) * tweakables.SAFETY_BUFFER
	      if (speed * timeLeft > gas_left_with_buffer) {
	        this._currentWait *= _tweakables2.default.GAS_ADJ_MULT;
	      } else {
	        this._currentWait /= _tweakables2.default.GAS_ADJ_MULT;
	      }
	      this._currentWait = Math.max(_tweakables2.default.MIN_CHANNEL_WATCH_LOOP, this._currentWait);
	      this._currentWait = Math.min(_tweakables2.default.MAX_CHANNEL_WATCH_LOOP, this._currentWait);
	      console.log('...speed=' + speed + ', gas=' + gas + ', timeLeft=' + timeLeft + ', currentWait=' + this._currentWait + ', history=' + this._lastPassedGas.length);
	      return this._currentWait;
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_filterOldGas',
	    value: function _filterOldGas() {
	      var _this = this;

	      var ind = 0;
	      // throw away any data before a reset
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
	      }
	      // now throw away anything over a certain age
	      if (this._lastPassedGas.length > 2) {
	        (function () {
	          var keepers = _this._lastPassedGas.slice(-2);
	          var candidates = _this._lastPassedGas.slice(0, -2);
	          candidates = candidates.filter(function (c) {
	            return c.reset < keepers[1].reset + _tweakables2.default.GAS_MONITOR_WINDOW / 1000;
	          });
	          _this._lastPassedGas = candidates.concat(keepers);
	          //console.log(this._lastPassedGas)
	        })();
	      }
	      return;
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_getCurrentSpeed',
	    value: function _getCurrentSpeed() {
	      if (this._lastPassedGas.length < 2) {
	        return 1;
	      } else {
	        var g = this._lastPassedGas;
	        var glast = g[g.length - 1];
	        var speed = (g[0].gas - glast.gas) / (1 + g[0].reset - glast.reset);
	        return speed;
	      }
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_getRemainingGas',
	    value: function _getRemainingGas() {
	      if (this._lastPassedGas.length < 1) {
	        return _tweakables2.default.DEFAULT_GAS;
	      } else {
	        return this._lastPassedGas[this._lastPassedGas.length - 1].gas;
	      }
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: '_getTimeTillReset',
	    value: function _getTimeTillReset() {
	      if (this._lastPassedGas.length < 1) {
	        return _tweakables2.default.DEFAULT_TIME_LEFT;
	      } else {
	        return this._lastPassedGas[this._lastPassedGas.length - 1].reset;
	      }
	    }

	    // --------------------------------------------------------------------------

	  }]);

	  return GasPreserver;
	}();

	exports.GasPreserver = GasPreserver;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	exports.default = tweakables;

/***/ }
/******/ ])
});
;