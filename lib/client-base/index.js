"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var safeJSONStringify_1 = __importDefault(require("../utils/safeJSONStringify"));
var keybaseBinaryName_1 = __importDefault(require("../utils/keybaseBinaryName"));
var constants_1 = require("../constants");
var path_1 = __importDefault(require("path"));
var ErrorWithCode = /** @class */ (function (_super) {
    __extends(ErrorWithCode, _super);
    function ErrorWithCode(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        return _this;
    }
    return ErrorWithCode;
}(Error));
exports.ErrorWithCode = ErrorWithCode;
/**
 * A Client base.
 * @ignore
 */
var ClientBase = /** @class */ (function () {
    function ClientBase(workingDir, adminDebugLogger) {
        this._adminDebugLogger = adminDebugLogger;
        this._workingDir = workingDir;
        this.initialized = false;
        this.verbose = false;
        this._spawnedProcesses = [];
        this._deinitializing = false;
    }
    ClientBase.prototype._init = function (homeDir, options) {
        return __awaiter(this, void 0, void 0, function () {
            var initBotInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.keybaseStatus(this._workingDir, homeDir)];
                    case 1:
                        initBotInfo = _a.sent();
                        this._adminDebugLogger.info("My workingDir=" + this._workingDir + " and my homeDir=" + this.homeDir);
                        this.homeDir = homeDir;
                        this.username = initBotInfo.username;
                        this.devicename = initBotInfo.devicename;
                        this.initialized = true;
                        if (options) {
                            this._initializedWithOptions = options;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientBase.prototype._deinit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, child;
            return __generator(this, function (_b) {
                this._deinitializing = true;
                for (_i = 0, _a = this._spawnedProcesses; _i < _a.length; _i++) {
                    child = _a[_i];
                    child.kill();
                }
                return [2 /*return*/];
            });
        });
    };
    ClientBase.prototype._runApiCommand = function (arg) {
        return __awaiter(this, void 0, void 0, function () {
            var options, input, inputString, size, output, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = arg.options ? utils_1.formatAPIObjectInput(arg.options, arg.apiName) : undefined;
                        input = {
                            method: arg.method,
                            params: {
                                version: constants_1.API_VERSIONS[arg.apiName],
                                options: options,
                            },
                        };
                        inputString = safeJSONStringify_1.default(input);
                        size = inputString.length;
                        return [4 /*yield*/, utils_1.keybaseExec(this._workingDir, this.homeDir, [arg.apiName, 'api'], {
                                stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
                                json: true,
                                timeout: arg.timeout,
                            })];
                    case 1:
                        output = _a.sent();
                        if (output.hasOwnProperty('error')) {
                            throw new ErrorWithCode(output.error.code, output.error.message);
                        }
                        res = utils_1.formatAPIObjectOutput(output.result, {
                            apiName: arg.apiName,
                            method: arg.method,
                        });
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ClientBase.prototype._guardInitialized = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.initialized) {
                    throw new Error('The client is not yet initialized.');
                }
                return [2 /*return*/];
            });
        });
    };
    ClientBase.prototype._pathToKeybaseBinary = function () {
        return path_1.default.join(this._workingDir, keybaseBinaryName_1.default);
    };
    return ClientBase;
}());
exports.default = ClientBase;
//# sourceMappingURL=index.js.map