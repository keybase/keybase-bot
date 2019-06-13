import { BotInfo } from '../utils/keybaseStatus';
import { InitOptions } from '../utils/options';
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
    _paperkey: void | string;
    constructor(workingDir: string);
    init(username: string, paperkey: string, options?: InitOptions): Promise<void>;
    initFromRunningService(homeDir?: string, options?: InitOptions): Promise<void>;
    _killCustomService(): Promise<void>;
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
