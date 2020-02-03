import ClientBase from '../client-base'
import {keybaseExec} from '../utils'

// TODO: API calls can support other stuff such as POSTS
//       and we should add those. Just starting simple.
//       see `keybase apicall --help`
interface ApiCallArg {
  endpoint: string
  arg?: any
}

/* A module of various helper functions for your bot
 */
class Helpers extends ClientBase {
  /**
   * Make a call to a Keybase URL (TODO: add support for POST params)
   * @memberof Helpers
   * @param url - a full URL to hit
   * @returns -
   * @example
   * bot.helpers.rawApiCall({endpoint:"/me"}).then(res => console.log(res))
   */
  public async rawApiCall(arg: ApiCallArg): Promise<any> {
    await this._guardInitialized()
    const args = [arg.endpoint]
    if (arg.arg) {
      for (const k in arg.arg) {
        args.unshift('-a', `${k}=${arg.arg[k]}`)
      }
    }
    args.unshift('apicall')
    const output = await keybaseExec(this._workingDir, this.homeDir, args, {json: true})
    return output
  }

  /**
   * Ping keybase server. The returned promise resolves the keybase daemon is
   * up and server is reachable.
   * @memberof Helpers
   * @returns -
   * @example
   * bot.helpers.ping()
   */
  public async ping(): Promise<any> {
    await this._guardInitialized()
    return await keybaseExec(this._workingDir, this.homeDir, ['ping'])
  }
}

export default Helpers
