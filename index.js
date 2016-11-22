(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("child_process"));
	else if(typeof define === 'function' && define.amd)
		define(["child_process"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("child_process")) : factory(root["child_process"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	var _bot = __webpack_require__(3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.Bot = _bot.Bot;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getKeybaseUsernameAndDevicename = exports.getKeybaseNativeStatusJson = undefined;

	var _child_process = __webpack_require__(2);

	// ----------------------------------------------------------------------------
	// calls back with a JSON object describing the user's
	// status with Keybase. For example, status.Username and status.Device.name
	// may be of interest
	// ----------------------------------------------------------------------------

	function getKeybaseNativeStatusJson(cb) {

	  var err = null;
	  var status = null;

	  (0, _child_process.exec)("keybase status -j", function (err, stdout) {
	    if (err === null) {
	      try {
	        status = JSON.parse(stdout);
	      } catch (e) {
	        err = e;
	      }
	    }
	    cb(err, status);
	  });
	}

	// ----------------------------------------------------------------------------
	// calls back with just {username, devicename}, if fully logged in and
	// unlocked.
	// ----------------------------------------------------------------------------

	//type UserDeviceMaybe =

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
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Bot = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _keybaseStatus = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ============================================================================

	var Bot = exports.Bot = function () {

	  // --------------------------------------------------------------------------

	  function Bot() {
	    _classCallCheck(this, Bot);

	    this.username = null;
	    this.initialized = false;
	  }
	  // --------------------------------------------------------------------------

	  _createClass(Bot, [{
	    key: "init",
	    value: function init(cb) {
	      var _this = this;

	      (0, _keybaseStatus.getKeybaseUsernameAndDevicename)(function (err, res) {
	        if (res) {
	          _this.username = res.username;
	          console.log("intialized " + _this.username + " (device=" + res.devicename + ")");
	        }
	        _this.initialized = true;
	        cb(err);
	      });
	    }
	  }]);

	  return Bot;
	}();

/***/ }
/******/ ])
});
;