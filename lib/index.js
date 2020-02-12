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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var service_1 = __importDefault(require("./service"));
var chat_client_1 = __importDefault(require("./chat-client"));
var wallet_client_1 = __importDefault(require("./wallet-client"));
var team_client_1 = __importDefault(require("./team-client"));
var helpers_client_1 = __importDefault(require("./helpers-client"));
var kvstore_client_1 = __importDefault(require("./kvstore-client"));
var mkdirp_1 = __importDefault(require("mkdirp"));
var utils_1 = require("./utils");
var util_1 = require("util");
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var adminDebugLogger_1 = require("./utils/adminDebugLogger");
var Utils = __importStar(require("./utils"));
var crypto_1 = __importDefault(require("crypto"));
var os_1 = __importDefault(require("os"));
var defaultOpts = {
    debugLogging: false,
};
/** A Keybase bot. */
var Bot = /** @class */ (function () {
    /**
     * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
     * @memberof Bot
     * @example
     * const bot = new Bot()
     */
    function Bot(opts) {
        var _a, _b;
        var debugLogging = (_b = (_a = opts) === null || _a === void 0 ? void 0 : _a.debugLogging, (_b !== null && _b !== void 0 ? _b : defaultOpts.debugLogging));
        this._botId = crypto_1.default.randomBytes(16).toString('hex');
        this._workingDir = path_1.default.join(os_1.default.tmpdir(), "keybase_bot_" + this._botId);
        this._service = new service_1.default(this._workingDir, this._adminDebugLogger, debugLogging);
        this._adminDebugLogger = new adminDebugLogger_1.AdminDebugLogger(this._botId);
        this.chat = new chat_client_1.default(this._workingDir, this._adminDebugLogger);
        this.wallet = new wallet_client_1.default(this._workingDir, this._adminDebugLogger);
        this.team = new team_client_1.default(this._workingDir, this._adminDebugLogger);
        this.helpers = new helpers_client_1.default(this._workingDir, this._adminDebugLogger);
        this.kvstore = new kvstore_client_1.default(this._workingDir, this._adminDebugLogger);
        this._initStatus = 'preinit';
    }
    /**
     * Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.
     * @memberof Bot
     * @param username - The username of your bot's Keybase account.
     * @param paperkey - The paperkey of your bot's Keybase account.
     * @param options - The initialization options for your bot.
     * @example
     * bot.init('username', 'paperkey')
     */
    Bot.prototype.init = function (username, paperkey, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._beginInitState();
                        return [4 /*yield*/, this._prepWorkingDir(options ? options.keybaseBinaryLocation : undefined)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._service.init(username, paperkey, options)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this._initSubBots(options)];
                    case 3:
                        _a.sent();
                        if (!(options && options.adminDebugDirectory && this._service.serviceLogFile)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._adminDebugLogger.init(options.adminDebugDirectory, this._service.serviceLogFile)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this._initStatus = 'initialized';
                        this._adminDebugLogger.info('initialized');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initialize your bot by using an existing running service with a logged in user.
     * @memberof Bot
     * @param homeDir - The home directory of this currently running service. Leave blank to use the default homeDir for your system.
     * @param options - The initialization options for your bot.
     * @example
     * bot.initFromRunningService()
     */
    Bot.prototype.initFromRunningService = function (homeDir, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._beginInitState();
                        return [4 /*yield*/, this._prepWorkingDir(options ? options.keybaseBinaryLocation : undefined)];
                    case 1:
                        _a.sent();
                        if (!(options && options.adminDebugDirectory && this._service.serviceLogFile)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._adminDebugLogger.init(options.adminDebugDirectory, this._service.serviceLogFile)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this._service.initFromRunningService(homeDir, options)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this._initSubBots(options)];
                    case 5:
                        _a.sent();
                        this._adminDebugLogger.info('initialized');
                        return [2 /*return*/];
                }
            });
        });
    };
    Bot.prototype._beginInitState = function () {
        if (this._initStatus !== 'preinit') {
            throw new Error("tried to init, but state is already " + this._initStatus);
        }
        this._initStatus = 'initializing';
        this._adminDebugLogger.info('beginning initialization');
    };
    /**
     * Get info about your bot!
     * @memberof Bot
     * @returns – Useful information like the username, device, and home directory of your bot. If your bot isn't initialized, you'll get `null`.
     * @example
     * const info = bot.myInfo()
     */
    Bot.prototype.myInfo = function () {
        return this._service.myInfo();
    };
    /**
     * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
     * @memberof Bot
     * @example
     * bot.deinit()
     */
    Bot.prototype.deinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._initStatus === 'deinitializing' || this._initStatus === 'deinitialized')) return [3 /*break*/, 1];
                        this._adminDebugLogger.info('Trying to deinitialize, but already called');
                        return [3 /*break*/, 5];
                    case 1:
                        this._initStatus = 'deinitializing';
                        this._adminDebugLogger.info('beginning deinit');
                        return [4 /*yield*/, this.chat._deinit()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this._service.deinit()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, utils_1.rmdirRecursive(this._workingDir)];
                    case 4:
                        _a.sent();
                        this._adminDebugLogger.info('finished deinit');
                        this._adminDebugLogger.deinit();
                        this._initStatus = 'deinitialized';
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write info text into it.
     * @memberof Bot
     * @example
     * bot.adminDebugLogInfo('My bot is ready to go.')
     */
    Bot.prototype.adminDebugLogInfo = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._adminDebugLogger) {
                    this._adminDebugLogger.info(text);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write error text into it.
     * @memberof Bot
     * @example
     * bot.adminDebugLogInfo("My bot is ready to go.")
     */
    Bot.prototype.adminDebugLogError = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._adminDebugLogger) {
                    this._adminDebugLogger.error(text);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Send Keybase service daemon logs to Keybase.
     */
    Bot.prototype.logSend = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._service.logSend()];
            });
        });
    };
    /**
     * Run pprof on the Keybase service daemon and store the result in temporary
     * file. After it's done, the promise resolves with the path to the temporary
     * file.
     */
    Bot.prototype.pprof = function (pprofType, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var outputPath, sec;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputPath = path_1.default.join(this._workingDir, "pprof-" + pprofType + "-" + new Date().toISOString());
                        sec = Math.round((duration || 5000) / 1000);
                        return [4 /*yield*/, Utils.keybaseExec(this._workingDir, this.myInfo().homeDir, __spreadArrays([
                                'pprof',
                                pprofType
                            ], (pprofType === 'heap' ? [] : ['-d', sec + "s"]), [
                                outputPath,
                            ]))
                            // The call above is asynchronous. So jsut wait for 2 more seconds.
                        ];
                    case 1:
                        _a.sent();
                        // The call above is asynchronous. So jsut wait for 2 more seconds.
                        return [4 /*yield*/, Utils.timeout(sec * 1000 + 2000)];
                    case 2:
                        // The call above is asynchronous. So jsut wait for 2 more seconds.
                        _a.sent();
                        return [2 /*return*/, outputPath];
                }
            });
        });
    };
    Object.defineProperty(Bot.prototype, "botId", {
        get: function () {
            return this._botId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bot.prototype, "serviceLogLocation", {
        get: function () {
            if (this._service.serviceLogFile) {
                return this._service.serviceLogFile;
            }
            else {
                throw new Error('service does not have a log file location. initialized yet?');
            }
        },
        enumerable: true,
        configurable: true
    });
    Bot.prototype._prepWorkingDir = function (keybaseBinaryLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var destination;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!keybaseBinaryLocation) return [3 /*break*/, 2];
                        return [4 /*yield*/, utils_1.whichKeybase()];
                    case 1:
                        keybaseBinaryLocation = _a.sent();
                        _a.label = 2;
                    case 2:
                        destination = path_1.default.join(this._workingDir, utils_1.keybaseBinaryName);
                        return [4 /*yield*/, util_1.promisify(mkdirp_1.default)(this._workingDir)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, util_1.promisify(fs_1.copyFile)(keybaseBinaryLocation, destination)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Bot.prototype._initSubBots = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = this.myInfo();
                        if (!info) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.chat._init(info.homeDir, options)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.wallet._init(info.homeDir, options)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.team._init(info.homeDir, options)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.helpers._init(info.homeDir, options)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.kvstore._init(info.homeDir, options)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6: throw new Error('Issue initializing bot.');
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Bot;
}());
module.exports = Bot;
//# sourceMappingURL=index.js.map