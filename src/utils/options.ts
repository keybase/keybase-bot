/**
 * Options for initializing the bot.
 */
export interface InitOptions {
  verbose?: boolean
  // Disables non-critical background services to improve bot performance.
  botLite?: boolean
  // Disable sending/receiving typing notifications to reduce bot bandwidth
  disableTyping?: boolean
  // Automatically send logs on exit despite of exit code
  autoLogSendOnExit?: boolean
  // Automatically send logs on crash
  autoLogSendOnCrash?: boolean
  // Copies the service log to a dedicated directory so it survives after bot shutdown
  // and also records its own actions
  adminDebugDirectory?: string
  // Overrides the path to the keybase binary
  keybaseBinaryLocation?: string
  // With this turned on, a SIGINT won't kill your Keybase service,
  // but you must remember to call deinit() or it will survive
  useDetachedService?: boolean
}
