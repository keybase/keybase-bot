/**
 * Returns the full path to the keybase binary or throws an error
 * @ignore
 * @example
 * whichKeybase().then((path) => console.log(path))
 */
declare function whichKeybase(): Promise<string>;
export default whichKeybase;
