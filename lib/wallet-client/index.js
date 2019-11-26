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
/** The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`. */
var Wallet = /** @class */ (function (_super) {
    __extends(Wallet, _super);
    function Wallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provides a list of all accounts owned by the current Keybase user.
     * @memberof Wallet
     * @returns - An array of accounts. If there are no accounts, the array is empty.
     * @example
     * bot.wallet.balances().then(accounts => console.log(accounts))
     */
    Wallet.prototype.balances = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'wallet', method: 'balances' })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase wallet balances returned nothing.');
                        }
                        return [2 /*return*/, res || []];
                }
            });
        });
    };
    /**
     * Provides a list of all transactions in a single account.
     * @memberof Wallet
     * @param accountId - The id of an account owned by a Keybase user.
     * @returns - An array of transactions related to the account.
     * @example
     * bot.wallet.history('GDUKZH6Q3U5WQD4PDGZXYLJE3P76BDRDWPSALN4OUFEESI2QL5UZHCK').then(transactions => console.log(transactions))
     */
    Wallet.prototype.history = function (accountId) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res, cleanedRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = {
                            accountId: accountId,
                        };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'wallet', method: 'history', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase wallet history returned nothing.');
                        }
                        cleanedRes = res.map(function (historyItem) { return historyItem.payment; });
                        return [2 /*return*/, cleanedRes];
                }
            });
        });
    };
    /**
     * Get details about a particular transaction
     * @memberof Wallet
     * @param transactionId - The id of the transaction you would like details about.
     * @returns - An object of details about the transaction specified.
     * @example
     * bot.wallet.details('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4').then(details => console.log(details))
     */
    Wallet.prototype.details = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { txid: transactionId };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'wallet', method: 'details', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase wallet details returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Lookup the primary Stellar account ID of a Keybase user.
     * @memberof Wallet
     * @param name - The name of the user you want to lookup. This can be either a Keybase username or a username of another account that is supported by Keybase if it is followed by an '@<service>'.
     * @returns - An object containing the account ID and Keybase username of the found user.
     * @example
     * const lookup1 = bot.wallet.lookup('patrick')
     * // 'patrick' on Keybase is 'patrickxb' on twitter
     * const lookup2 = bot.wallet.lookup('patrcikxb@twitter')
     * // Using Lodash's `isEqual` since objects with same values aren't equal in JavaScript
     * _.isEqual(lookup1, lookup2) // => true
     */
    Wallet.prototype.lookup = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { name: name };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'wallet', method: 'lookup', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase wallet lookup returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Send lumens (XLM) via Keybase with your bot!
     * @memberof Wallet
     * @param recipient - Who you're sending your money to. This can be a Keybase user, stellar address, or a username of another account that is supported by Keybase if it is followed by an '@<service>'.
     * @param amount - The amount of XLM to send.
     * @param [currency] - Adds a currency value to the amount specified. For example, adding 'USD' would send
     * @param [message] - The message for your payment
     * @returns - The transaction object of the transaction.
     * @example
     * bot.wallet.send('nathunsmitty', '3.50') // Send 3.50 XLM to Keybase user `nathunsmitty`
     * bot.wallet.send('nathunsmitty@github', '3.50') // Send 3.50 XLM to GitHub user `nathunsmitty`
     * bot.wallet.send('nathunsmitty', '3.50', 'USD') // Send $3.50 worth of lumens to Keybase user `nathunsmitty`
     * bot.wallet.send('nathunsmitty', '3.50', 'USD', 'Shut up and take my money!') // Send $3.50 worth of lumens to Keybase user `nathunsmitty` with a memo
     */
    Wallet.prototype.send = function (recipient, amount, currency, message) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { recipient: recipient, amount: amount, currency: currency, message: message };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'wallet', method: 'send', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase wallet send returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Send lumens (XLM) via Keybase to more than one user at once. As opposed to the normal bot.wallet.send
     * command, this can get multiple transactions into the same 5-second Stellar ledger.
     * @memberof Wallet
     * @param batchId - example, if sending a bunch of batches for an airdrop, you could pass them all `airdrop2025`.
     * @param payments - an array of objects containing recipients and XLM of the form {"recipient": "someusername", "amount": "1.234", "message", "hi there"}
     * @returns - an object
     * @example
     * bot.wallet.batch("airdrop2040", [{"recipient":"a1","amount": "1.414", "message": "hi a1, yes 1"},{"recipient": "a2", "amount": "3.14159", "message": "hi a2, yes 2"}])
     */
    Wallet.prototype.batch = function (batchId, payments, timeoutSec) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { batchId: batchId, payments: payments };
                        if (typeof timeoutSec !== 'undefined') {
                            options = { batchId: batchId, payments: payments, timeout: timeoutSec };
                        }
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'wallet', method: 'batch', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase wallet batch returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * If you send XLM to a Keybase user who has not established a wallet, you can cancel the payment before the recipient claims it and the XLM will be returned to your account.
     * @memberof Wallet
     * @param transactionId - The id of the transaction to cancel.
     * @example
     * bot.wallet.cancel('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4').then(() => console.log('Transaction successfully canceled!'))
     */
    Wallet.prototype.cancel = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = { txid: transactionId };
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'wallet', method: 'cancel', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase wallet cancel returned nothing.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Wallet;
}(client_base_1.default));
exports.default = Wallet;
//# sourceMappingURL=index.js.map