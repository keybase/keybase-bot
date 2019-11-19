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
var mkdirp_1 = __importDefault(require("mkdirp"));
var util_1 = require("util");
var fs_1 = require("fs");
var os_1 = __importDefault(require("os"));
var path_1 = __importDefault(require("path"));
var index_1 = require("./index");
var AdminDebugLogger = /** @class */ (function () {
    function AdminDebugLogger(botId) {
        this._botId = botId;
        this._deinitYet = false;
    }
    Object.defineProperty(AdminDebugLogger.prototype, "directory", {
        get: function () {
            return this._logDir || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminDebugLogger.prototype, "filename", {
        get: function () {
            if (this._logDir) {
                return path_1.default.join(this.directory, "keybase_bot_" + this._botId + ".bot.log");
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    AdminDebugLogger.prototype.init = function (logDir, botServiceLogPath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._botServiceLogPath = botServiceLogPath;
                        this._logDir = logDir;
                        return [4 /*yield*/, util_1.promisify(mkdirp_1.default)(this.directory)];
                    case 1:
                        _a.sent();
                        this._copyLoop();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminDebugLogger.prototype.deinit = function () {
        this._deinitYet = true;
    };
    AdminDebugLogger.prototype.info = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._logIt(text, 'E')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminDebugLogger.prototype.error = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._logIt(text, 'I')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminDebugLogger.prototype._logIt = function (text, code) {
        return __awaiter(this, void 0, void 0, function () {
            var line;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.directory) return [3 /*break*/, 2];
                        line = new Date().toISOString() + " [" + code + "] " + text + os_1.default.EOL;
                        return [4 /*yield*/, util_1.promisify(fs_1.appendFile)(this.filename, line, 'utf-8')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AdminDebugLogger.prototype._copyLoop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var destination, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._deinitYet) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        destination = path_1.default.join(this.directory, "keybase_bot_" + this._botId + ".service.log");
                        return [4 /*yield*/, util_1.promisify(fs_1.copyFile)(this._botServiceLogPath, destination)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.error("Couldn't copy service log. " + e_1.toString());
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, index_1.timeout(900)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return AdminDebugLogger;
}());
exports.AdminDebugLogger = AdminDebugLogger;
//# sourceMappingURL=adminDebugLogger.js.map