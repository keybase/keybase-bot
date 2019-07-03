import { BotInfo } from '../utils/keybaseStatus';
import { InitOptions } from '../utils/options';
import Bot from '../index';
declare class Service {
    initialized: false | 'paperkey' | 'runningService';
    running: boolean;
    username: void | string;
    devicename: void | string;
    homeDir: void | string;
    verbose: boolean;
    botLite: boolean;
    disableTyping: boolean;
    serviceLogFile: void | string;
    workingDir: string;
    autoLogSendOnCrash: boolean;
    private _paperkey;
    private _bot;
    constructor(bot: Bot, workingDir: string);
    init(username: string, paperkey: string, options?: InitOptions): Promise<void>;
    initFromRunningService(homeDir?: string, options?: InitOptions): Promise<void>;
    private _killCustomService;
    deinit(): Promise<void>;
    myInfo(): BotInfo | null;
    /**
     *
     * @ignore
     * This is a bit different from normal keybaseExecs and is unique to the service
     * starting up
     * @example
     * service.startupService()
     */
    startupService(): Promise<void>;
    logSend(): Promise<void>;
}
export default Service;
