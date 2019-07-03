import ChatClient from './chat-client';
import WalletClient from './wallet-client';
import TeamClient from './team-client';
import { BotInfo } from './utils/keybaseStatus';
import { InitOptions } from './utils/options';
/** A Keybase bot. */
declare class Bot {
    chat: ChatClient;
    wallet: WalletClient;
    team: TeamClient;
    private _workingDir;
    private _service;
    private _adminDebugDirectory?;
    private _botId;
    private _initStatus;
    /**
     * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
     * @memberof Bot
     * @example
     * const bot = new Bot()
     */
    constructor();
    /**
     * Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.
     * @memberof Bot
     * @param username - The username of your bot's Keybase account.
     * @param paperkey - The paperkey of your bot's Keybase account.
     * @param options - The initialization options for your bot.
     * @example
     * bot.init('username', 'paperkey')
     */
    init(username: string, paperkey: string, options?: InitOptions): Promise<void>;
    /**
     * Initialize your bot by using an existing running service with a logged in user.
     * @memberof Bot
     * @param homeDir - The home directory of this currently running service. Leave blank to use the default homeDir for your system.
     * @param options - The initialization options for your bot.
     * @example
     * bot.initFromRunningService()
     */
    initFromRunningService(homeDir?: string, options?: InitOptions): Promise<void>;
    /**
     * Get info about your bot!
     * @memberof Bot
     * @returns – Useful information like the username, device, and home directory of your bot. If your bot isn't initialized, you'll get `null`.
     * @example
     * const info = bot.myInfo()
     */
    myInfo(): BotInfo | null;
    /**
     * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
     * @memberof Bot
     * @example
     * bot.deinit()
     */
    deinit(): Promise<void>;
    /**
     * If bot is initialized with an optional directory `adminDebugDirectory`, this will write that string into a file in there
     * This function is also called automatically when in adminDebug mode, and will record plaintexts of messages into that directory,
     * so use wisely.
     * @memberof Bot
     * @example
     * bot.log("My bot is ready to go.")
     */
    debugLog(text: string, infoOrErr?: 'I' | 'E'): Promise<void>;
    readonly botId: string;
    readonly adminDebugFilename: string | null;
    readonly adminDebugDirectory: string | null;
    readonly serviceLogLocation: string;
    private _prepWorkingDir;
    private _maybePrepDebugDir;
    private _maybeLogCopyLoop;
    private _initSubBots;
}
export = Bot;
