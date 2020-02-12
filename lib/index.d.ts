import ChatClient from './chat-client';
import WalletClient from './wallet-client';
import TeamClient from './team-client';
import HelpersClient from './helpers-client';
import KVStoreClient from './kvstore-client';
import { BotInfo } from './utils/keybaseStatus';
import { InitOptions } from './utils/options';
interface BotConstructorOpts {
    debugLogging?: boolean;
}
/** A Keybase bot. */
declare class Bot {
    chat: ChatClient;
    wallet: WalletClient;
    team: TeamClient;
    helpers: HelpersClient;
    kvstore: KVStoreClient;
    private _workingDir;
    private _service;
    private _botId;
    private _initStatus;
    private _adminDebugLogger?;
    /**
     * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
     * @memberof Bot
     * @example
     * const bot = new Bot()
     */
    constructor(opts?: BotConstructorOpts);
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
    private _beginInitState;
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
     * If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write info text into it.
     * @memberof Bot
     * @example
     * bot.adminDebugLogInfo('My bot is ready to go.')
     */
    adminDebugLogInfo(text: string): Promise<void>;
    /**
     * If bot is initialized with an optional directory `adminDebugDirectory`, this will let you write error text into it.
     * @memberof Bot
     * @example
     * bot.adminDebugLogInfo("My bot is ready to go.")
     */
    adminDebugLogError(text: string): Promise<void>;
    /**
     * Send Keybase service daemon logs to Keybase.
     */
    logSend(): Promise<void>;
    /**
     * Run pprof on the Keybase service daemon and store the result in temporary
     * file. After it's done, the promise resolves with the path to the temporary
     * file.
     */
    pprof(pprofType: 'trace' | 'cpu' | 'heap', duration?: number): Promise<string>;
    get botId(): string;
    get serviceLogLocation(): string;
    private _prepWorkingDir;
    private _initSubBots;
}
export = Bot;
