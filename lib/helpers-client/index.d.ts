import ClientBase from '../client-base';
interface ApiCallArg {
    endpoint: string;
    arg?: any;
}
declare class Helpers extends ClientBase {
    /**
     * Make a call to a Keybase URL (TODO: add support for POST params)
     * @memberof Helpers
     * @param url - a full URL to hit
     * @returns -
     * @example
     * bot.helpers.rawApiCall({endpoint:"/me"}).then(res => console.log(res))
     */
    rawApiCall(arg: ApiCallArg): Promise<any>;
}
export default Helpers;
