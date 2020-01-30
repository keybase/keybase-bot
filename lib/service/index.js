"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var child_process_1 = require("child_process");
var keybaseBinaryName_1 = __importDefault(require("../utils/keybaseBinaryName"));
var path_1 = __importDefault(require("path"));
var Service = /** @class */ (function () {
    function Service(workingDir, adminDebugLogger, debugLogging) {
        this._adminDebugLogger = adminDebugLogger;
        this.workingDir = workingDir;
        this.initialized = false;
        this.verbose = false;
        this.botLite = true;
        this.disableTyping = true;
        this.autoLogSendOnCrash = false;
        this._useDetachedService = false;
        this._debugLogging = debugLogging;
    }
    Service.prototype.init = function (username, paperkey, options) {
        return __awaiter(this, void 0, void 0, function () {
            var currentInfo, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!username || typeof username !== 'string') {
                            throw new Error("Please provide a username to initialize the bot. Got: " + JSON.stringify(username));
                        }
                        if (!paperkey || typeof paperkey !== 'string') {
                            // Don't want to accidentally print the paperkey to STDERR.
                            throw new Error("Please provide a paperkey to initialize the bot.");
                        }
                        if (this.initialized) {
                            throw new Error('Cannot initialize an already initialized bot.');
                        }
                        if (options && options.useDetachedService) {
                            this._useDetachedService = true;
                        }
                        this.homeDir = this.workingDir;
                        this.serviceLogFile = path_1.default.join(this.homeDir, 'logs', 'keybase.service.log');
                        this.botLite = options ? Boolean(typeof options.botLite !== 'boolean' || options.botLite) : true;
                        this.disableTyping = options ? Boolean(typeof options.disableTyping !== 'boolean' || options.disableTyping) : true;
                        this.autoLogSendOnCrash = options ? Boolean(typeof options.autoLogSendOnCrash === 'boolean' && options.autoLogSendOnCrash) : false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 8]);
                        return [4 /*yield*/, this.startupService()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, utils_1.keybaseExec(this.workingDir, this.homeDir, ['oneshot', '--username', username], {
                                stdinBuffer: paperkey,
                            })
                            // Set the typing notification settings for the bot
                        ];
                    case 3:
                        _a.sent();
                        // Set the typing notification settings for the bot
                        return [4 /*yield*/, utils_1.keybaseExec(this.workingDir, this.homeDir, [
                                'chat',
                                'notification-settings',
                                "--disable-typing=" + this.disableTyping.toString(),
                            ])];
                    case 4:
                        // Set the typing notification settings for the bot
                        _a.sent();
                        return [4 /*yield*/, utils_1.keybaseStatus(this.workingDir, this.homeDir)];
                    case 5:
                        currentInfo = _a.sent();
                        if (currentInfo && currentInfo.username && currentInfo.devicename) {
                            this.initialized = 'paperkey';
                            this.username = currentInfo.username;
                            this._paperkey = paperkey;
                            this.devicename = currentInfo.devicename;
                            this.verbose = options ? Boolean(options.verbose) : false;
                        }
                        if (this.username !== username) {
                            throw new Error('Failed to initialize service.');
                        }
                        return [3 /*break*/, 8];
                    case 6:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this._killCustomService()];
                    case 7:
                        _a.sent();
                        throw err_1;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.initFromRunningService = function (homeDir, options) {
        return __awaiter(this, void 0, void 0, function () {
            var currentInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.initialized) {
                            throw new Error('Cannot initialize an already initialized bot.');
                        }
                        this.homeDir = homeDir;
                        return [4 /*yield*/, utils_1.keybaseStatus(this.workingDir, this.homeDir)];
                    case 1:
                        currentInfo = _a.sent();
                        if (currentInfo && currentInfo.username && currentInfo.devicename) {
                            this.initialized = 'runningService';
                            this.username = currentInfo.username;
                            this.devicename = currentInfo.devicename;
                            this.verbose = options ? Boolean(options.verbose) : false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype._killCustomService = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, e_2, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, utils_1.keybaseExec(this.workingDir, this.homeDir, ['logout', '--force'])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, utils_1.keybaseExec(this.workingDir, this.homeDir, ['ctl', 'stop', '--shutdown'])];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        i = 0;
                        _a.label = 7;
                    case 7:
                        if (!true) return [3 /*break*/, 9];
                        return [4 /*yield*/, utils_1.timeout(100)];
                    case 8:
                        _a.sent();
                        if (!this.running) {
                            return [3 /*break*/, 9];
                        }
                        if (++i >= 100) {
                            throw new Error("The service didn't finish shutting down in time (" + this.workingDir + ")");
                        }
                        return [3 /*break*/, 7];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.deinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.initialized) {
                            throw new Error('Cannot deinitialize an uninitialized bot.');
                        }
                        if (!(this.initialized === 'paperkey')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._killCustomService()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.initialized = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    Service.prototype.myInfo = function () {
        if (this.username && this.devicename) {
            return {
                username: this.username,
                devicename: this.devicename,
                homeDir: this.homeDir ? this.homeDir : undefined,
                botLite: this.botLite,
                disableTyping: this.disableTyping,
                debugLogging: this._debugLogging,
            };
        }
        return null;
    };
    /**
     *
     * @ignore
     * This is a bit different from normal keybaseExecs and is unique to the service
     * starting up
     * @example
     * service.startupService()
     */
    Service.prototype.startupService = function () {
        return __awaiter(this, void 0, void 0, function () {
            var args, child;
            var _this = this;
            return __generator(this, function (_a) {
                args = ['service'];
                if (this.homeDir) {
                    args.unshift('--home', this.homeDir);
                }
                if (this.serviceLogFile) {
                    args.unshift('--log-file', this.serviceLogFile);
                }
                if (this.botLite) {
                    args.unshift('--enable-bot-lite-mode');
                }
                child = child_process_1.spawn(path_1.default.join(this.workingDir, keybaseBinaryName_1.default), args, { env: process.env, detached: this._useDetachedService });
                // keep track of the subprocess' state
                this.running = true;
                child.on('exit', function (code) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.running = false;
                                if (!(code !== 0 && this.autoLogSendOnCrash)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.logSend()];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var i;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    child.on('close', function (code) {
                                        // any code here including 0 is bad here, if it happens before resolve
                                        //, since this service should stay running
                                        reject(new Error("keybase service exited with code " + code + " (" + _this.workingDir + ")"));
                                    });
                                    i = 0;
                                    _a.label = 1;
                                case 1: return [4 /*yield*/, utils_1.pingKeybaseService(this.workingDir, this.homeDir)];
                                case 2:
                                    if (!!(_a.sent())) return [3 /*break*/, 4];
                                    return [4 /*yield*/, utils_1.timeout(100)];
                                case 3:
                                    _a.sent();
                                    if (++i >= 100) {
                                        throw new Error("Couldn't start up service fast enough");
                                    }
                                    return [3 /*break*/, 1];
                                case 4:
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Service.prototype.logSend = function () {
        return __awaiter(this, void 0, void 0, function () {
            var initiallyRunning, e_3, feedback, args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        initiallyRunning = this.running;
                        if (!!initiallyRunning) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.startupService()];
                    case 2:
                        _a.sent();
                        if (!(this.initialized === 'paperkey' && this.username && this._paperkey)) return [3 /*break*/, 4];
                        return [4 /*yield*/, utils_1.keybaseExec(this.workingDir, this.homeDir, ['oneshot', '--username', this.username], {
                                stdinBuffer: this._paperkey,
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        feedback = "keybase-bot auto log send\nusername: " + (this.username || 'none') + "\ninitialized: " + (this.initialized || 'false');
                        args = ['log', 'send', '--no-confirm', '--feedback', feedback];
                        if (this.serviceLogFile) {
                            args.unshift('--log-file', this.serviceLogFile);
                        }
                        return [4 /*yield*/, utils_1.keybaseExec(this.workingDir, this.homeDir, args)];
                    case 7:
                        _a.sent();
                        if (!!initiallyRunning) return [3 /*break*/, 9];
                        return [4 /*yield*/, this._killCustomService()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return Service;
}());
exports.default = Service;
//# sourceMappingURL=index.js.map