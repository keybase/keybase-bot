import { BotInfo } from '../utils/keybaseStatus';
import { InitOptions } from '../utils/options';
import { AdminDebugLogger } from '../utils/adminDebugLogger';
declare class Service {
    initialized: false | 'paperkey' | 'runningService';
    running: boolean;
    username: undefined | string;
    devicename: undefined | string;
    homeDir: undefined | string;
    verbose: boolean;
    botLite: boolean;
    disableTyping: boolean;
    serviceLogFile: undefined | string;
    workingDir: string;
    autoLogSendOnCrash: boolean;
    private _paperkey;
    private _useDetachedService;
    private _debugLogging;
    protected _adminDebugLogger: AdminDebugLogger;
    constructor(workingDir: string, adminDebugLogger: AdminDebugLogger, debugLogging: boolean);
    init(username: string, paperkey: string, options?: InitOptions): Promise<void>;
    initFromRunningService(homeDir?: string, options?: InitOptions): Promise<void>;
    private _killCustomService;
    deinit(): Promise<void>;
    myInfo(): BotInfo | undefined;
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
