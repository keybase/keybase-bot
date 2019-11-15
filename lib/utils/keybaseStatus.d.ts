/**
 * Useful information like the username, device, home directory of your bot and
 * configuration options.
 */
export interface BotInfo {
    username: string;
    devicename: string;
    homeDir: void | string;
    botLite?: boolean;
    disableTyping?: boolean;
    debugLogging?: boolean;
}
/**
 * Returns { username, devicename, homeDir } from `keybase status --json`.
 * @ignore
 * @param workingDir - the directory containing the binary, according to top level Bot
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @example
 * keybaseStatus('/my/dir').then(status => console.log(status.username))
 */
declare function keybaseStatus(workingDir: string, homeDir: void | string): Promise<BotInfo>;
export default keybaseStatus;
