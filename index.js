(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("child_process"));
	else if(typeof define === 'function' && define.amd)
		define(["child_process"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("child_process")) : factory(root["child_process"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Bot = undefined;

	var _keybaseStatus = __webpack_require__(1);

	var keybaseStatus = _interopRequireWildcard(_keybaseStatus);

	var _bot = __webpack_require__(4);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.Bot = _bot.Bot;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getKeybaseUsernameAndDevicename = exports.getKeybaseNativeStatusJson = undefined;

	var _execToJson = __webpack_require__(2);

	// ----------------------------------------------------------------------------
	// calls back with a JSON object describing the user's
	// status with Keybase. For example, status.Username and status.Device.name
	// may be of interest
	// ----------------------------------------------------------------------------

	function getKeybaseNativeStatusJson(cb) {

	  (0, _execToJson.execToJson)({ command: 'keybase status -j' }, function (err, status) {
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
	      var _err = new Error("failed to get username + device name");
	      return cb(_err, null);
	    }
	  });
	}

	exports.getKeybaseNativeStatusJson = getKeybaseNativeStatusJson;
	exports.getKeybaseUsernameAndDevicename = getKeybaseUsernameAndDevicename;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.execToJson = undefined;

	var _child_process = __webpack_require__(3);

	// takes a string to run on the command line that is expecting
	// JSON in stdout. calls back with an error if output doesn't
	// parse as JSON or there's an error in execution

	function execToJson(params, cb) {

	  var out = null;

	  (0, _child_process.exec)(params.command, function (err, stdout) {
	    if (err === null) {
	      try {
	        out = JSON.parse(stdout);
	      } catch (e) {
	        err = e;
	      }
	    }
	    cb(err, out);
	  });
	}
	exports.execToJson = execToJson;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Bot = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _keybaseStatus = __webpack_require__(1);

	var _chatApi = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ============================================================================

	var Bot = exports.Bot = function () {

	  // --------------------------------------------------------------------------

	  function Bot() {
	    _classCallCheck(this, Bot);

	    this.dPair = null;
	    this.initialized = false;
	  }

	  // --------------------------------------------------------------------------

	  _createClass(Bot, [{
	    key: "init",
	    value: function init(cb) {
	      var _this = this;

	      (0, _keybaseStatus.getKeybaseUsernameAndDevicename)(function (err, currentDPair) {
	        if (currentDPair) {
	          _this.dPair = currentDPair;
	          console.log("intialized " + currentDPair.username + " (device=" + currentDPair.devicename + ")");
	        }
	        _this.initialized = true;
	        cb(err);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: "chatList",
	    value: function chatList(cb) {
	      this._safelyRunApiCommand({ method: "list", options: {} }, function (err, res) {
	        return cb(err, res);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: "chatSend",
	    value: function chatSend(arg, cb) {
	      var channel = arg.channel,
	          message = arg.message;

	      this._safelyRunApiCommand({ method: "send", options: { channel: channel, message: message } }, function (err, res) {
	        return cb(err, res);
	      });
	    }

	    // --------------------------------------------------------------------------
	    //  - make sure inited ok
	    //  - make sure user is still the same user since init
	    // --------------------------------------------------------------------------

	  }, {
	    key: "_checkUserAndInit",
	    value: function _checkUserAndInit(cb) {
	      var _this2 = this;

	      console.log('+ checking user and init');
	      (0, _keybaseStatus.getKeybaseUsernameAndDevicename)(function (err, currentDPair) {
	        if (!err && (!_this2.initialized || !currentDPair || !_this2.dPair || currentDPair.username != _this2.dPair.username)) {
	          err = new Error("Uh-oh, username has changed or we never initialized correctly.");
	        }
	        var ok = (err === null).toString();
	        console.log("- checking user and init (ok=" + ok + ")");
	        return cb(err);
	      });
	    }

	    // --------------------------------------------------------------------------

	  }, {
	    key: "_safelyRunApiCommand",
	    value: function _safelyRunApiCommand(arg, cb) {
	      this._checkUserAndInit(function (err) {
	        if (!err) {
	          (0, _chatApi.runApiCommand)(arg, function (err, res) {
	            return cb(err, res);
	          });
	        } else {
	          return cb(err);
	        }
	      });
	    }
	  }]);

	  return Bot;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runApiCommand = undefined;

	var _execToJson = __webpack_require__(2);

	var _constants = __webpack_require__(6);

	// ----------------------------------------------------------------------------
	// calls back with a JSON object describing the user's
	// status with Keybase. For example, status.Username and status.Device.name
	// may be of interest
	// ----------------------------------------------------------------------------

	function runApiCommand(arg, cb) {
	  //
	  // TODO: once confirmed working, we should switch this
	  // to streaming stdin correctly instead of `exec`
	  var input = {
	    method: arg.method,
	    params: {
	      version: _constants.CHAT_API_VERSION,
	      options: arg.options
	    }
	  };

	  // TODO: as stated above, not the appropriate technique; will come bcak to
	  var input_str = '"' + JSON.stringify(input).replace(/(["'$`\\])/g, '\\$1') + '"';

	  (0, _execToJson.execToJson)({ command: 'echo ' + input_str + ' | keybase chat api' }, function (err, res) {
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

/***/ }
/******/ ])
});
;