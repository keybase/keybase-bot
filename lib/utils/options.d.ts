/**
 * Options for initializing the bot.
 */
export interface InitOptions {
    verbose?: boolean;
    botLite?: boolean;
    disableTyping?: boolean;
    autoLogSendOnExit?: boolean;
    autoLogSendOnCrash?: boolean;
    adminDebugDirectory?: string;
    keybaseBinaryLocation?: string;
    useDetachedService?: boolean;
}
