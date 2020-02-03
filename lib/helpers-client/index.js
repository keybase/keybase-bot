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
var client_base_1 = __importDefault(require("../client-base"));
var utils_1 = require("../utils");
/* A module of various helper functions for your bot
 */
var Helpers = /** @class */ (function (_super) {
    __extends(Helpers, _super);
    function Helpers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Make a call to a Keybase URL (TODO: add support for POST params)
     * @memberof Helpers
     * @param url - a full URL to hit
     * @returns -
     * @example
     * bot.helpers.rawApiCall({endpoint:"/me"}).then(res => console.log(res))
     */
    Helpers.prototype.rawApiCall = function (arg) {
        return __awaiter(this, void 0, void 0, function () {
            var args, k, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        args = [arg.endpoint];
                        if (arg.arg) {
                            for (k in arg.arg) {
                                args.unshift('-a', k + "=" + arg.arg[k]);
                            }
                        }
                        args.unshift('apicall');
                        return [4 /*yield*/, utils_1.keybaseExec(this._workingDir, this.homeDir, args, { json: true })];
                    case 2:
                        output = _a.sent();
                        return [2 /*return*/, output];
                }
            });
        });
    };
    /**
     * Ping keybase server. The returned promise resolves the keybase daemon is
     * up and server is reachable.
     * @memberof Helpers
     * @returns -
     * @example
     * bot.helpers.ping()
     */
    Helpers.prototype.ping = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, utils_1.keybaseExec(this._workingDir, this.homeDir, ['ping'])];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Helpers;
}(client_base_1.default));
exports.default = Helpers;
//# sourceMappingURL=index.js.map