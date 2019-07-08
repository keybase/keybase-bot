/**
 * Options for initializing the bot.
 */
export interface InitOptions {
  verbose?: boolean
  // Disables non-critical background services to improve bot performance.
  botLite?: boolean
  // Disable sending/receiving typing notifications to reduce bot bandwidth
  disableTyping?: boolean
  // Automatically send logs on crash
  autoLogSendOnCrash?: boolean
  // Copies the service log to a dedicated directory so it survives after bot shutdown
  // and also records its own actions
  adminDebugDirectory?: string
}
