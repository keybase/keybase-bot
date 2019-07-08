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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var child_process_1 = require("child_process");
var readline_1 = __importDefault(require("readline"));
var client_base_1 = __importDefault(require("../client-base"));
var utils_1 = require("../utils");
/** The chat module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase chat api`. */
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists your chats, with info on which ones have unread messages.
     * @memberof Chat
     * @param options - An object of options that can be passed to the method.
     * @returns - An array of chat conversations. If there are no conversations, the array is empty.
     * @example
     * bot.chat.list({unreadOnly: true}).then(chatConversations => console.log(chatConversations))
     */
    Chat.prototype.list = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'list', options: options })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat list returned nothing.');
                        }
                        return [2 /*return*/, res.conversations || []];
                }
            });
        });
    };
    /**
     * Lists conversation channels in a team
     * @memberof Chat
     * @param name - Name of the team
     * @param options - An object of options that can be passed to the method.
     * @returns - An array of chat conversations. If there are no conversations, the array is empty.
     * @example
     * bot.chat.listChannels('team_name').then(chatConversations => console.log(chatConversations))
     */
    Chat.prototype.listChannels = function (name, options) {
        return __awaiter(this, void 0, void 0, function () {
            var optionsWithDefaults, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        optionsWithDefaults = __assign({}, options, { name: name, membersType: options && options.membersType ? options.membersType : 'team' });
                        return [4 /*yield*/, this._runApiCommand({
                                apiName: 'chat',
                                method: 'listconvsonname',
                                options: optionsWithDefaults,
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat list convs on name returned nothing.');
                        }
                        return [2 /*return*/, res.conversations || []];
                }
            });
        });
    };
    /**
     * Reads the messages in a channel. You can read with or without marking as read.
     * @memberof Chat
     * @param channel - The chat channel to read messages in.
     * @param options - An object of options that can be passed to the method.
     * @returns - A summary of data about a message, including who send it, when, the content of the message, etc. If there are no messages in your channel, then an error is thrown.
     * @example
     * alice.chat.read(channel).then(messages => console.log(messages))
     */
    Chat.prototype.read = function (channel, options) {
        return __awaiter(this, void 0, void 0, function () {
            var optionsWithDefaults, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        optionsWithDefaults = __assign({}, options, { channel: channel, peek: options && options.peek ? options.peek : false, unreadOnly: options && options.unreadOnly !== undefined ? options.unreadOnly : false });
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'read', options: optionsWithDefaults })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat read returned nothing.');
                        }
                        // Pagination gets passed as-is, while the messages get cleaned up
                        return [2 /*return*/, {
                                pagination: res.pagination,
                                messages: res.messages.map(function (message) { return message.msg; }),
                            }];
                }
            });
        });
    };
    /**
     * Joins a team conversation.
     * @param channel - The team chat channel to join.
     * @example
     * bot.chat.listConvsOnName('team_name').then(async teamConversations => {
     *  for (const conversation of teamConversations) {
     *    if (conversation.memberStatus !== 'active') {
     *      await bot.chat.join(conversation.channel)
     *      console.log('Joined team channel', conversation.channel)
     *    }
     *  }
     * })
     */
    Chat.prototype.joinChannel = function (channel) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._runApiCommand({
                                apiName: 'chat',
                                method: 'join',
                                options: {
                                    channel: channel,
                                },
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat join returned nothing');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Leaves a team conversation.
     * @param channel - The team chat channel to leave.
     * @example
     * bot.chat.listConvsOnName('team_name').then(async teamConversations => {
     *  for (const conversation of teamConversations) {
     *    if (conversation.memberStatus === 'active') {
     *      await bot.chat.leave(conversation.channel)
     *      console.log('Left team channel', conversation.channel)
     *    }
     *  }
     * })
     */
    Chat.prototype.leaveChannel = function (channel) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._runApiCommand({
                                apiName: 'chat',
                                method: 'leave',
                                options: {
                                    channel: channel,
                                },
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat leave returned nothing');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send a message to a certain channel.
     * @memberof Chat
     * @param channel - The chat channel to send the message in.
     * @param message - The chat message to send.
     * @param options - An object of options that can be passed to the method.
     * @example
     * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
     * const message = {body: 'Hello kbot!'}
     * bot.chat.send(channel, message).then(() => console.log('message sent!'))
     */
    Chat.prototype.send = function (channel, message, options) {
        return __awaiter(this, void 0, void 0, function () {
            var args, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        args = __assign({}, options, { channel: channel,
                            message: message });
                        this._adminDebugLogger.info("sending message \"" + message.body + "\" in channel " + JSON.stringify(channel));
                        return [4 /*yield*/, this._runApiCommand({
                                apiName: 'chat',
                                method: 'send',
                                options: args,
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat send returned nothing');
                        }
                        this._adminDebugLogger.info("message sent with id " + res.id);
                        return [2 /*return*/, { id: res.id }];
                }
            });
        });
    };
    /**
     * Creates a new blank conversation.
     * @memberof Chat
     * @param channel - The chat channel to create.
     * @example
     * bot.chat.createChannel(channel).then(() => console.log('conversation created'))
     */
    Chat.prototype.createChannel = function (channel) {
        return __awaiter(this, void 0, void 0, function () {
            var args, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        args = {
                            channel: channel,
                        };
                        return [4 /*yield*/, this._runApiCommand({
                                apiName: 'chat',
                                method: 'newconv',
                                options: args,
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat newconv returned nothing');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send a file to a channel.
     * @memberof Chat
     * @param channel - The chat channel to send the message in.
     * @param filename - The absolute path of the file to send.
     * @param options - An object of options that can be passed to the method.
     * @example
     * bot.chat.attach(channel, '/Users/nathan/my_picture.png').then(() => console.log('Sent a picture!'))
     */
    Chat.prototype.attach = function (channel, filename, options) {
        return __awaiter(this, void 0, void 0, function () {
            var args, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        args = __assign({}, options, { channel: channel, filename: filename });
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'attach', options: args })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat attach returned nothing');
                        }
                        return [2 /*return*/, { id: res.id }];
                }
            });
        });
    };
    /**
     * Download a file send via Keybase chat.
     * @memberof Chat
     * @param channel - The chat channel that the desired attacment to download is in.
     * @param messageId - The message id of the attached file.
     * @param output - The absolute path of where the file should be downloaded to.
     * @param options - An object of options that can be passed to the method
     * @example
     * bot.chat.download(channel, 325, '/Users/nathan/Downloads/file.png')
     */
    Chat.prototype.download = function (channel, messageId, output, options) {
        return __awaiter(this, void 0, void 0, function () {
            var args, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        args = __assign({}, options, { channel: channel, messageId: messageId, output: output });
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'download', options: args })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat download returned nothing');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reacts to a given message in a channel. Messages have messageId's associated with
     * them, which you can learn in `bot.chat.read`.
     * @memberof Chat
     * @param channel - The chat channel to send the message in.
     * @param messageId - The id of the message to react to.
     * @param reaction - The reaction emoji, in colon form.
     * @param options - An object of options that can be passed to the method.
     * @example
     * bot.chat.react(channel, 314, ':+1:').then(() => console.log('Thumbs up!'))
     */
    Chat.prototype.react = function (channel, messageId, reaction, options) {
        return __awaiter(this, void 0, void 0, function () {
            var args, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        args = __assign({}, options, { channel: channel,
                            messageId: messageId, message: { body: reaction } });
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'reaction', options: args })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat react returned nothing.');
                        }
                        return [2 /*return*/, { id: res.id }];
                }
            });
        });
    };
    /**
     * Deletes a message in a channel. Messages have messageId's associated with
     * them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
     * and deleting from the CLI may not become apparent immediately.
     * @memberof Chat
     * @param channel - The chat channel to send the message in.
     * @param messageId - The id of the message to delete.
     * @param options - An object of options that can be passed to the method.
     * @example
     * bot.chat.delete(channel, 314).then(() => console.log('message deleted!'))
     */
    Chat.prototype.delete = function (channel, messageId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var args, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        args = __assign({}, options, { channel: channel,
                            messageId: messageId });
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'delete', options: args })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat delete returned nothing.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets current unfurling settings
     * @example
     * bot.chat.getUnfurlSettings().then((mode) => console.log(mode))
     */
    Chat.prototype.getUnfurlSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'getunfurlsettings', options: {} })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat get unfurl mode returned nothing.');
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Sets the unfurling mode
     * In Keybase, unfurling means generating previews for links that you're sending
     * in chat messages. If the mode is set to always or the domain in the URL is
     * present on the whitelist, the Keybase service will automatically send a preview
     * to the message recipient in a background chat channel.
     * @param mode - the new unfurl mode
     * @example
     * bot.chat.setUnfurlMode({
     *   "mode": "always",
     * }).then((mode) => console.log('mode updated!'))
     */
    Chat.prototype.setUnfurlSettings = function (mode) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._runApiCommand({ apiName: 'chat', method: 'setunfurlsettings', options: mode })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat set unfurl mode returned nothing.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Loads a flip's details
     * @param conversationID - conversation ID received in API listen.
     * @param flipConversationID - flipConvID from the message summary.
     * @param messageID - ID of the message in the conversation.
     * @param gameID - gameID from the flip message contents.
     * @example
     * // check demos/es7/poker-hands.js
     */
    Chat.prototype.loadFlip = function (conversationID, flipConversationID, messageID, gameID) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._runApiCommand({
                                apiName: 'chat',
                                method: 'loadflip',
                                options: utils_1.formatAPIObjectInput({ conversationID: conversationID, flipConversationID: flipConversationID, messageID: messageID, gameID: gameID }, 'chat'),
                                timeout: 2000,
                            })];
                    case 2:
                        res = _a.sent();
                        if (!res) {
                            throw new Error('Keybase chat load flip returned nothing.');
                        }
                        return [2 /*return*/, res.status];
                }
            });
        });
    };
    /**
     * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel. Note that it receives messages your own bot posts, but from other devices. You can filter out your own messages by looking at a message's sender object.
     * Hides exploding messages by default.
     * @memberof Chat
     * @param channel - The chat channel to watch.
     * @param onMessage - A callback that is triggered on every message your bot receives.
     * @param onError - A callback that is triggered on any error that occurs while the method is executing.
     * @param options - Options for the listen method.
     * @example
     * // Reply to all messages between you and `kbot` with 'thanks!'
     * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
     * const onMessage = message => {
     *   const channel = message.channel
     *   bot.chat.send(channel, {body: 'thanks!!!'})
     * }
     * bot.chat.watchChannelForNewMessages(channel, onMessage)
     */
    Chat.prototype.watchChannelForNewMessages = function (channel, onMessage, onError, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        this._chatListen(onMessage, onError, channel, options);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function will put your bot into full-read mode, where it reads
     * everything it can and every new message it finds it will pass to you, so
     * you can do what you want with it. For example, if you want to write a
     * Keybase bot that talks shit at anyone who dares approach it, this is the
     * function to use. Note that it receives messages your own bot posts, but from other devices.
     * You can filter out your own messages by looking at a message's sender object.
     * Hides exploding messages by default.
     * @memberof Chat
     * @param onMessage - A callback that is triggered on every message your bot receives.
     * @param onError - A callback that is triggered on any error that occurs while the method is executing.
     * @param options - Options for the listen method.
     * @example
     * // Reply to incoming traffic on all channels with 'thanks!'
     * const onMessage = message => {
     *   const channel = message.channel
     *   bot.chat.send(channel, {body: 'thanks!!!'})
     * }
     * bot.chat.watchAllChannelsForNewMessages(onMessage)
     *
     */
    Chat.prototype.watchAllChannelsForNewMessages = function (onMessage, onError, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._guardInitialized()];
                    case 1:
                        _a.sent();
                        this._chatListen(onMessage, onError, undefined, options);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Spawns the chat listen process and handles the calling of onMessage, onError, and filtering for a specific channel.
     * @memberof Chat
     * @ignore
     * @param onMessage - A callback that is triggered on every message your bot receives.
     * @param onError - A callback that is triggered on any error that occurs while the method is executing.
     * @param channel - The chat channel to watch.
     * @param options - Options for the listen method.
     * @example
     * this._chatListen(onMessage, onError)
     */
    Chat.prototype._chatListen = function (onMessage, onError, channel, options) {
        var _this = this;
        var args = ['chat', 'api-listen'];
        if (this.homeDir) {
            args.unshift('--home', this.homeDir);
        }
        if (!options || (options && options.hideExploding !== false)) {
            args.push('--hide-exploding');
        }
        if (options && options.showLocal === true) {
            args.push('--local');
        }
        if (channel) {
            args.push('--filter-channel', JSON.stringify(utils_1.formatAPIObjectInput(channel, 'chat')));
        }
        var child = child_process_1.spawn(this._pathToKeybaseBinary(), args);
        this._spawnedProcesses.push(child);
        var cmdSample = this._pathToKeybaseBinary() + ' ' + args.join(' ');
        this._adminDebugLogger.info("beginning listen on channel=" + JSON.stringify(channel || 'ALL') + " using " + cmdSample);
        child.on('error', function (err) {
            _this._adminDebugLogger.error("got listen error " + err.message);
        });
        child.on('exit', function () {
            _this._adminDebugLogger.info("got listen exit");
        });
        child.on('close', function () {
            _this._adminDebugLogger.info("got listen close");
        });
        child.on('disconnect', function () {
            _this._adminDebugLogger.info("got listen disconnect");
        });
        var lineReaderStderr = readline_1.default.createInterface({ input: child.stderr });
        lineReaderStderr.on('line', function (line) {
            _this._adminDebugLogger.error("stderr from listener: " + line);
        });
        var lineReaderStdout = readline_1.default.createInterface({ input: child.stdout });
        var onLine = function (line) {
            _this._adminDebugLogger.info("stdout from listener: " + line);
            try {
                var messageObject = utils_1.formatAPIObjectOutput(JSON.parse(line));
                if (messageObject.hasOwnProperty('error')) {
                    throw new Error(messageObject.error);
                }
                else if (
                // fire onMessage if it was from a different sender or at least a different device
                // from this sender. Bots can filter out their own messages from other devices.
                (options && options.showLocal) ||
                    (_this.username &&
                        _this.devicename &&
                        (messageObject.msg.sender.username !== _this.username.toLowerCase() || messageObject.msg.sender.deviceName !== _this.devicename))) {
                    onMessage(messageObject.msg);
                }
            }
            catch (error) {
                if (onError) {
                    onError(error);
                }
            }
        };
        lineReaderStdout.on('line', onLine);
    };
    return Chat;
}(client_base_1.default));
exports.default = Chat;
//# sourceMappingURL=index.js.map