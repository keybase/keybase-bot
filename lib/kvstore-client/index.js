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
var KVStoreErrorType;
(function (KVStoreErrorType) {
    KVStoreErrorType[KVStoreErrorType["Other"] = 0] = "Other";
    KVStoreErrorType[KVStoreErrorType["WrongRevision"] = 2760] = "WrongRevision";
    KVStoreErrorType[KVStoreErrorType["BadGeneration"] = 2761] = "BadGeneration";
    KVStoreErrorType[KVStoreErrorType["NotFound"] = 2762] = "NotFound";
})(KVStoreErrorType = exports.KVStoreErrorType || (exports.KVStoreErrorType = {}));
exports.ErrorIsWrongRevision = function (error) { return error.code === KVStoreErrorType.WrongRevision; };
exports.ErrorIsBadGeneration = function (error) { return error.code === KVStoreErrorType.BadGeneration; };
exports.ErrorIsNotFound = function (error) { return error.code === KVStoreErrorType.NotFound; };
/** The kvstore module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase kvstore help api`. */
var KVStore = /** @class */ (function (_super) {
    __extends(KVStore, _super);
    function KVStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KVStore.prototype.normalizeTeam = function (team) {
        if (!this.username) {
            return team || '';
        }
        if (!team || team === this.username) {
            return this.username + "," + this.username;
        }
        return team;
    };
    /**
     * List all of a team's key-value namespaces with a non-deleted entryKey.
     * @memberof KVStore
     * @param team - The teamname to list namespaces for. Default to the bot's self implicit team if empty.
     * @returns - An array of namespaces.
     * @example
     * bot.kvstore.listNamespaces('phoenix').then(namespaces => console.log(namespaces))
     */
    KVStore.prototype.listNamespaces = function (team) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { team: this.normalizeTeam(team) };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'kvstore', method: 'list', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase kvstore list returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * List all of the non-deleted entryKeys in a namespace.
     * @memberof KVStore
     * @param team - The teamname to list entryKeys for. Default to the bot's self implicit team if empty.
     * @param namespace - The namespace to list entryKeys for.
     * @returns - An array of entryKeys and their revisions.
     * @example
     * bot.kvstore.listEntryKeys('phoenix', 'pw-manager').then(entryKeys => console.log(entryKeys))
     */
    KVStore.prototype.listEntryKeys = function (team, namespace) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { namespace: namespace, team: this.normalizeTeam(team) };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'kvstore', method: 'list', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase kvstore list returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Get a key-value store entry.
     * @memberof KVStore
     * @param team - The teamname to get a value from. Default to the bot's self implicit team if empty.
     * @param namespace - The namespace to get a value from.
     * @param entryKey - The entryKey to get the value for.
     * @returns - An entryKey with its value. If this key does not exist, the revision will be 0.
     * @example
     * bot.kvstore.get('phoenix', 'pw-manager', 'geocities').then(({revision, value}) => console.log({revision, value}))
     */
    KVStore.prototype.get = function (team, namespace, entryKey) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { entrykey: entryKey, namespace: namespace, team: this.normalizeTeam(team) };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'kvstore', method: 'get', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase kvstore get returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Put a key-value store entry. Specifying a non-zero revision enables custom concurrency behavior, e.g. 1 will throw an error if the entry already exists.
     * @memberof KVStore
     * @param team - The teamname to set an entryKey in. Default to the bot's self implicit team if empty.
     * @param namespace - The namespace to set an entryKey in.
     * @param entryKey - The entryKey to set the value for.
     * @param entryValue - The value to set.
     * @param revision - A revision number (call `get()` to find out the latest) for enforcing safe concurrency.
     * @returns - An entryKey with its value. If this key does not exist, the revision will be 0.
     * @example
     * bot.kvstore.put('phoenix', 'pw-manager', 'geocities', 'hunter2').then(({entryKey, revision}) => console.log({entryKey, revision}))
     */
    KVStore.prototype.put = function (team, namespace, entryKey, entryValue, revision) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { entrykey: entryKey, entryvalue: entryValue, namespace: namespace, revision: revision, team: this.normalizeTeam(team) };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'kvstore', method: 'put', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase kvstore put returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Delete a key-value store entry. If you specify a revision number, deletion will fail if that revision is not the latest.
     * @memberof KVStore
     * @param team - The teamname to list entryKeys for. Default to the bot's self implicit team if empty.
     * @param namespace - The namespace to list entryKeys for.
     * @param entryKey - The entryKey to delete the value for.
     * @param revision - A revision number (call `get()` to find out the latest) for enforcing safe concurrency.
     * @returns - The deleted entryKey and its revision.
     * @example
     * bot.kvstore.delete('phoenix', 'pw-manager', 'geocities').then(({entryKey, revision}) => console.log({entryKey, revision}))
     */
    KVStore.prototype.delete = function (team, namespace, entryKey, revision) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { entrykey: entryKey, namespace: namespace, revision: revision, team: this.normalizeTeam(team) };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'kvstore', method: 'del', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase kvstore delete returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Determine whether the result of a `get()` call describes a deleted key-value store entry.
     * @memberof KVStore
     * @param res - The `get()` result to determine the status of.
     * @returns - Whether this key's value is deleted.
     * @example
     * bot.kvstore.isDeleted(res).then(isDeleted => console.log({isDeleted}))
     */
    KVStore.prototype.isDeleted = function (res) {
        return res.revision > 0 && res.entryValue === '';
    };
    /**
     * Determine whether the result of a `get()` call describes an entryKey that has an existing value.
     * @memberof KVStore
     * @param res - The `get()` result to determine the status of.
     * @returns - Whether this key's value is present.
     * @example
     * bot.kvstore.isPresent(res).then(isPresent => console.log({isPresent}))
     */
    KVStore.prototype.isPresent = function (res) {
        return res.revision > 0 && res.entryValue !== '';
    };
    return KVStore;
}(client_base_1.default));
exports.default = KVStore;
//# sourceMappingURL=index.js.map