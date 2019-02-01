// @flow

/**
 * Options for initializing the bot.
 */
export type InitOptions = {|
  verbose?: boolean,
  // Disables non-critical background services to improve bot performance.
  botLite?: boolean,
  // Disable sending/receiving typing notifications to reduce bot bandwidth
  disableTyping?: boolean,
|}
