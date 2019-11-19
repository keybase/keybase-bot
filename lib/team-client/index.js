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
/** The team module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase team api`. */
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new Keybase team or subteam
     * @memberof Team
     * @param creation - the name of the team to create
     * @returns -
     * @example
     * bot.team.create({"team": "phoenix"}).then(res => console.log(res))
     */
    Team.prototype.create = function (creation) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = creation;
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'team', method: 'create-team', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('create');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Add a bunch of people with different privileges to a team
     * @memberof Team
     * @param additions - an array of the users to add, with privs
     * @returns - A result object of adding these members to the team.
     * @example
     * bot.team.addMembers({"team": "phoenix", "emails": [{"email": "alice@keybase.io", "role": "writer"}, {"email": "cleo@keybase.io", "role": "admin"}], "usernames": [{"username": "frank", "role": "reader"}, {"username": "keybaseio@twitter", "role": "writer"}]}).then(res => console.log(res))
     */
    Team.prototype.addMembers = function (additions) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = additions;
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'team', method: 'add-members', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('addMembers');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Remove someone from a team.
     * @memberof Team
     * @param removal - object with the `team` name and `username`
     * @example
     * bot.team.removeMember({"team": "phoenix", "username": "frank"}).then(res => console.log(res))
     */
    Team.prototype.removeMember = function (removal) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = removal;
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'team', method: 'remove-member', options: options })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List a team's members.
     * @memberof Team
     * @param team - an object with the `team` name in it.
     * @returns - Details about the team.
     * @example
     * bot.team.listTeamMemberships({"team": "phoenix"}).then(res => console.log(res))
     */
    Team.prototype.listTeamMemberships = function (team) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        options = team;
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'team', method: 'list-team-memberships', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('listTeamMemberships');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    return Team;
}(client_base_1.default));
exports.default = Team;
//# sourceMappingURL=index.js.map