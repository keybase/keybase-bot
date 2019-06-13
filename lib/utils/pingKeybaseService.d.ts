/**
 * Checks whether the keybase service is running by calling `keybase status --json`.
 * @ignore
 * @param workingDir - the directory containing the binary, according to top level Bot
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @example
 * pingKeybaseService('/my/dir').then(status => console.log("service running", status))
 */
declare function pingKeybaseService(workingDir: string, homeDir: void | string): Promise<boolean>;
export default pingKeybaseService;
