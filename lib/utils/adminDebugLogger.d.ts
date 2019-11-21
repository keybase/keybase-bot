export declare class AdminDebugLogger {
    private _logDir?;
    private _botId;
    private _botServiceLogPath;
    private _deinitYet;
    get directory(): string | null;
    get filename(): string | null;
    constructor(botId: string);
    init(logDir: string, botServiceLogPath: string): Promise<void>;
    deinit(): void;
    info(text: string): Promise<void>;
    error(text: string): Promise<void>;
    private _logIt;
    private _copyLoop;
}
