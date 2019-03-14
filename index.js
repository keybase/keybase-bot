'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var snakeCase = _interopDefault(require('lodash.snakecase'));
var camelCase = _interopDefault(require('lodash.camelcase'));
var kebabCase = _interopDefault(require('lodash.kebabcase'));
var os = _interopDefault(require('os'));
var crypto = _interopDefault(require('crypto'));
var child_process = require('child_process');
var readline = _interopDefault(require('readline'));
var mkdirp = _interopDefault(require('mkdirp'));
var util = require('util');
var fs = require('fs');
var fs__default = _interopDefault(fs);
var path = _interopDefault(require('path'));

/**
  Takes a Keybase API input JavaScript object and recursively formats it into snake_case or kebab-case instead of camelCase for the service.
  * @ignore
  * @param obj - The object to be formatted.
  * @param apiType - The type of api the the input is being served to. Currently Keybase has chat, team, and wallet apis.
  * @returns - The new, formatted object.
  * @example
  * const inputOptions = formatAPIObject({unreadOnly: true})
  * console.log(inputOptions) // {unread_only: true}
 */
function formatAPIObjectInput(obj, apiType) {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map(item => formatAPIObjectInput(item, apiType));
  } else {
    return Object.keys(obj).reduce((newObj, key) => {
      // TODO: hopefully we standardize how the Keybase API handles input keys
      let formattedKey;

      if (apiType === 'wallet') {
        formattedKey = kebabCase(key);
      } else {
        formattedKey = snakeCase(key);
      }

      if (typeof obj[key] === 'object') {
        return { ...newObj,
          [formattedKey]: formatAPIObjectInput(obj[key], apiType)
        };
      }

      return { ...newObj,
        [formattedKey]: obj[key]
      };
    }, {});
  }
}
/*
 * An internal blacklist of parent levels at which formatAPIObjectOutput transformations
 * shouldn't be performed. A `null` value matches everything.
 */

const transformsBlacklist = {
  chat: {
    read: [['messages', null, 'msg', 'reactions', 'reactions', null]]
  }
  /**
   * Context of the object formatting process.
   * @ignore
   */

};

/*
 * Matches a context against the list of blacklisted parent levels.
 * @ignore
 * @param context - The context to match.
 * @returns - Whether the context is blacklisted from being formatted.
 */
function matchBlacklist(context) {
  if (!context || !transformsBlacklist[context.apiName] || !transformsBlacklist[context.apiName][context.method]) {
    return false;
  }

  const parentLength = context.parent ? context.parent.length : 0;

  for (const matcher of transformsBlacklist[context.apiName][context.method]) {
    if (matcher.length !== parentLength) {
      continue;
    } // Iterate over the items of the matcher


    let mismatch = false;

    for (const [matcherIndex, desiredValue] of matcher.entries()) {
      if (desiredValue === null) {
        continue;
      }

      if (typeof context.parent === 'object' && context.parent[matcherIndex] !== desiredValue) {
        mismatch = true;
        break;
      }
    }

    if (!mismatch) {
      return true;
    }
  }

  return false;
}
/*
 * Appends a new key to the parents array in the formatting context.
 * @ignore
 * @param context - The context to copy and modify.
 * @param key - The key to apprent to the parent array.
 * @returns - A new context.
 */


function buildContext(context, key) {
  if (!context) {
    return context;
  }

  const copiedContext = { ...context
  };

  if (!copiedContext.parent) {
    copiedContext.parent = [key];
  } else {
    copiedContext.parent = copiedContext.parent.slice();
    copiedContext.parent.push(key);
  }

  return copiedContext;
}
/**
  Takes a Keybase output object and formats it in a more digestable JavaScript style by using camelCase instead of snake_case.
  * @ignore
  * @param obj - The object to be formatted.
  * @param context - An optional context with information about the called method required to perform blacklist lookups.
  * @returns - The new, formatted object.
  * @example
  * const outputRes = formatAPIObject({unread_only: true})
  * console.log(outputRes) // {unreadOnly: true}
 */


function formatAPIObjectOutput(obj, context) {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map((item, i) => formatAPIObjectOutput(item, buildContext(context, i)));
  } else {
    return Object.keys(obj).reduce((newObj, key) => {
      const formattedKey = matchBlacklist(context) ? key : camelCase(key);

      if (typeof obj[key] === 'object') {
        return { ...newObj,
          [formattedKey]: formatAPIObjectOutput(obj[key], buildContext(context, key))
        };
      }

      return { ...newObj,
        [formattedKey]: obj[key]
      };
    }, {});
  }
}

const keybaseExec = (workingDir, homeDir, args, options = {
  stdinBuffer: undefined,
  onStdOut: undefined
}) => {
  const runArgs = [...args];

  if (homeDir) {
    runArgs.unshift('--home', homeDir);
  }

  const keybasePath = path.join(workingDir, 'keybase');
  const child = child_process.spawn(keybasePath, runArgs);
  const stdOutBuffer = [];
  const stdErrBuffer = [];

  if (options.stdinBuffer) {
    child.stdin.write(options.stdinBuffer);
  }

  child.stdin.end();
  const lineReaderStdout = readline.createInterface({
    input: child.stdout
  }); // Use readline interface to parse each line (\n separated) when provided
  // with onStdOut callback

  if (options.onStdOut) {
    lineReaderStdout.on('line', options.onStdOut);
  } else {
    child.stdout.on('data', chunk => {
      stdOutBuffer.push(chunk);
    });
  } // Capture STDERR and use as error message if needed


  child.stderr.on('data', chunk => {
    stdErrBuffer.push(chunk);
  });
  return new Promise((resolve, reject) => {
    child.on('close', code => {
      let finalStdOut = null; // Pass back

      if (code) {
        const errorMessage = Buffer.concat(stdErrBuffer).toString('utf8');
        reject(new Error(errorMessage));
      } else {
        const stdout = Buffer.concat(stdOutBuffer).toString('utf8');

        try {
          finalStdOut = options.json ? JSON.parse(stdout) : stdout;
        } catch (e) {
          reject(e);
        }
      }

      resolve(finalStdOut);
    });
  });
};

function randomTempDir() {
  const name = crypto.randomBytes(16).toString('hex');
  return path.join(os.tmpdir(), `keybase_bot_${name}`);
}

async function rmdirRecursive(dirName) {
  const fsLstat = util.promisify(fs__default.lstat);
  const fsUnlink = util.promisify(fs__default.unlink);
  const fsRmdir = util.promisify(fs__default.rmdir);
  const fsReaddir = util.promisify(fs__default.readdir);
  const dirStat = await fsLstat(dirName);

  if (dirStat) {
    for (const entry of await fsReaddir(dirName)) {
      const entryPath = path.join(dirName, entry);
      const stat = await fsLstat(entryPath);

      if (stat.isDirectory()) {
        await rmdirRecursive(entryPath);
      } else {
        await fsUnlink(entryPath);
      }
    }

    await fsRmdir(dirName);
  }
}

/**
 * Useful information like the username, device, home directory of your bot and
 * configuration options.
 */

/**
 * Returns { username, devicename, homeDir } from `keybase status --json`.
 * @ignore
 * @param workingDir - the directory containing the binary, according to top level Bot
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @example
 * keybaseStatus('/my/dir').then(status => console.log(status.username))
 */
async function keybaseStatus(workingDir, homeDir) {
  const status = await keybaseExec(workingDir, homeDir, ['status', '--json'], {
    json: true
  });

  if (status && status.Username && status.Device && status.Device.name) {
    return {
      username: status.Username,
      devicename: status.Device.name,
      homeDir
    };
  } else {
    throw new Error('Failed to get current username and device name.');
  }
}

/**
 * Checks whether the keybase service is running by calling `keybase status --json`.
 * @ignore
 * @param workingDir - the directory containing the binary, according to top level Bot
 * @param homeDir - The home directory of the service you want to fetch the status from.
 * @example
 * pingKeybaseService('/my/dir').then(status => console.log("service running", status))
 */

async function pingKeybaseService(workingDir, homeDir) {
  // TODO: use a faster technique when core releases one
  try {
    await keybaseExec(workingDir, homeDir, ['--no-auto-fork', 'status', '--json'], {
      json: true
    });
    return true;
  } catch (err) {
    return false;
  }
}

const aExec = util.promisify(child_process.exec);
/**
 * Returns the full path to the keybase binary or throws an error
 * @ignore
 * @example
 * whichKeybase().then((path) => console.log(path))
 */

async function whichKeybase() {
  const {
    stdout
  } = await aExec('which keybase');

  if (!stdout || !stdout.trim().length) {
    throw new Error('Could not find keybase binary');
  }

  const res = stdout.trim();
  return res;
}

function timeout(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

class Service {
  constructor(workingDir) {
    this.workingDir = workingDir;
    this.initialized = false;
    this.verbose = false;
    this.botLite = true;
    this.disableTyping = true;
  }

  async init(username, paperkey, options) {
    if (!username || typeof username !== 'string') {
      throw new Error(`Please provide a username to initialize the bot. Got: ${JSON.stringify(username)}`);
    }

    if (!paperkey || typeof paperkey !== 'string') {
      // Don't want to accidentally print the paperkey to STDERR.
      throw new Error(`Please provide a paperkey to initialize the bot.`);
    }

    if (this.initialized) {
      throw new Error('Cannot initialize an already initialized bot.');
    }

    this.homeDir = this.workingDir;
    this.serviceLogFile = path.join(this.homeDir, 'Library', 'Logs', 'keybase.service.log');
    this.botLite = options ? Boolean(typeof options.botLite !== 'boolean' || options.botLite) : true;
    this.disableTyping = options ? Boolean(typeof options.disableTyping !== 'boolean' || options.disableTyping) : true; // Unlike with clients we don't need to store the service, since it shuts down with ctrl stop

    try {
      await this.startupService();
      await keybaseExec(this.workingDir, this.homeDir, ['oneshot', '--username', username], {
        stdinBuffer: paperkey
      }); // Set the typing notification settings for the bot

      await keybaseExec(this.workingDir, this.homeDir, ['chat', 'notification-settings', 'disable-typing', this.disableTyping.toString()]);
      const currentInfo = await keybaseStatus(this.workingDir, this.homeDir);

      if (currentInfo && currentInfo.username && currentInfo.devicename) {
        this.initialized = 'paperkey';
        this.username = currentInfo.username;
        this.devicename = currentInfo.devicename;
        this.verbose = options ? Boolean(options.verbose) : false;
      }

      if (this.username !== username) {
        throw new Error('Failed to initialize service.');
      }
    } catch (err) {
      await this._killCustomService();
      throw err;
    }
  }

  async initFromRunningService(homeDir, options) {
    if (this.initialized) {
      throw new Error('Cannot initialize an already initialized bot.');
    }

    this.homeDir = homeDir;
    const currentInfo = await keybaseStatus(this.workingDir, this.homeDir);

    if (currentInfo && currentInfo.username && currentInfo.devicename) {
      this.initialized = 'runningService';
      this.username = currentInfo.username;
      this.devicename = currentInfo.devicename;
      this.verbose = options ? Boolean(options.verbose) : false;
    }
  }

  async _killCustomService() {
    // these 2 commands might be unnecessary; since the service was `spawn`ed not detached
    // they will also shutdown via SIGINT. We don't want to make service detached because it'd be nice for
    // them to auto-shutdown if the user kills the process
    try {
      await keybaseExec(this.workingDir, this.homeDir, ['logout']);
    } catch (e) {}

    try {
      await keybaseExec(this.workingDir, this.homeDir, ['ctl', 'stop', '--shutdown']);
    } catch (e) {} // wait until the process quits by watching the running property


    let i = 0;

    while (true) {
      await timeout(100);

      if (!this.running) {
        break;
      }

      if (++i >= 100) {
        throw new Error(`The service didn't finish shutting down in time (${this.workingDir})`);
      }
    }
  }

  async deinit() {
    if (!this.initialized) {
      throw new Error('Cannot deinitialize an uninitialized bot.');
    } // If we init the bot using paperkey credentials, then we want to stop the service and remove our generated directory.


    if (this.initialized === 'paperkey') {
      await this._killCustomService();
    }

    this.initialized = false;
  }

  myInfo() {
    if (this.username && this.devicename) {
      return {
        username: this.username,
        devicename: this.devicename,
        homeDir: this.homeDir ? this.homeDir : undefined,
        botLite: this.botLite,
        disableTyping: this.disableTyping
      };
    }

    return null;
  }
  /**
   *
   * @ignore
   * This is a bit different from normal keybaseExecs and is unique to the service
   * starting up
   * @example
   * service.startupService()
   */


  async startupService() {
    const args = ['service'];

    if (this.homeDir) {
      args.unshift('--home', this.homeDir);
    }

    if (this.serviceLogFile) {
      args.unshift('-d', '--log-file', this.serviceLogFile);
    }

    if (this.botLite) {
      args.unshift('--enable-bot-lite-mode');
    }

    const child = child_process.spawn(path.join(this.workingDir, 'keybase'), args, {
      env: process.env
    }); // keep track of the subprocess' state

    this.running = true;
    child.on('exit', code => {
      this.running = false;
    });
    return new Promise(async (resolve, reject) => {
      child.on('close', code => {
        // any code here including 0 is bad here, if it happens before resolve
        //, since this service should stay running
        reject(new Error(`keybase service exited with code ${code} (${this.workingDir})`));
      }); // Wait for the service to start up - give it 10s.

      let i = 0;

      while (!(await pingKeybaseService(this.workingDir, this.homeDir))) {
        await timeout(100);

        if (++i >= 100) {
          throw new Error("Couldn't start up service fast enough");
        }
      }

      resolve();
    });
  }

}

const API_VERSIONS = {
  chat: 1,
  team: 1,
  wallet: 1
};

/**
 * A Client base.
 * @ignore
 */
class ClientBase {
  constructor(workingDir) {
    this._workingDir = workingDir;
    this.initialized = false;
    this.verbose = false;
    this.spawnedProcesses = [];
  }

  async _init(homeDir, options) {
    const initBotInfo = await keybaseStatus(this._workingDir, homeDir);
    this.homeDir = homeDir;
    this.username = initBotInfo.username;
    this.devicename = initBotInfo.devicename;
    this.initialized = true;
  }

  async _deinit() {
    for (const child of this.spawnedProcesses) {
      child.kill();
    }
  }

  async _runApiCommand(arg) {
    const options = arg.options ? formatAPIObjectInput(arg.options, arg.apiName) : undefined;
    const input = {
      method: arg.method,
      params: {
        version: API_VERSIONS[arg.apiName],
        options
      }
    };
    const inputString = JSON.stringify(input);
    const size = inputString.length;
    const output = await keybaseExec(this._workingDir, this.homeDir, [arg.apiName, 'api'], {
      stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
      json: true
    });

    if (output.hasOwnProperty('error')) {
      throw new Error(output.error.message);
    }

    const res = formatAPIObjectOutput(output.result, {
      apiName: arg.apiName,
      method: arg.method
    });
    return res;
  }

  async _guardInitialized() {
    if (!this.initialized) {
      throw new Error('The client is not yet initialized.');
    }
  }

  _pathToKeybaseBinary() {
    return path.join(this._workingDir, 'keybase');
  }

}

/** The chat module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase chat api`. */
class Chat extends ClientBase {
  /**
   * Lists your chats, with info on which ones have unread messages.
   * @memberof Chat
   * @param options - An object of options that can be passed to the method.
   * @returns - An array of chat conversations. If there are no conversations, the array is empty.
   * @example
   * bot.chat.list({unreadOnly: true}).then(chatConversations => console.log(chatConversations))
   */
  async list(options) {
    await this._guardInitialized();
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'list',
      options
    });

    if (!res) {
      throw new Error('Keybase chat list returned nothing.');
    }

    return res.conversations || [];
  }
  /**
   * Lists conversation channels in a team
   * @memberof Chat
   * @param name - Name of the team
   * @param options - An object of options that can be passed to the method.
   * @returns - An array of chat conversations. If there are no conversations, the array is empty.
   * @example
   * bot.chat.listChannels('team_name').then(chatConversations => console.log(chatConversations))
   */


  async listChannels(name, options) {
    await this._guardInitialized();
    const optionsWithDefaults = { ...options,
      name,
      membersType: options && options.membersType ? options.membersType : 'team'
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'listconvsonname',
      options: optionsWithDefaults
    });

    if (!res) {
      throw new Error('Keybase chat list convs on name returned nothing.');
    }

    return res.conversations || [];
  }
  /**
   * Reads the messages in a channel. You can read with or without marking as read.
   * @memberof Chat
   * @param channel - The chat channel to read messages in.
   * @param options - An object of options that can be passed to the method.
   * @returns - A summary of data about a message, including who send it, when, the content of the message, etc. If there are no messages in your channel, then an error is thrown.
   * @example
   * alice.chat.read(channel).then(messages => console.log(messages))
   */


  async read(channel, options) {
    await this._guardInitialized();
    const optionsWithDefaults = { ...options,
      channel,
      peek: options && options.peek ? options.peek : false,
      unreadOnly: options && options.unreadOnly !== undefined ? options.unreadOnly : false
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'read',
      options: optionsWithDefaults
    });

    if (!res) {
      throw new Error('Keybase chat read returned nothing.');
    } // Pagination gets passed as-is, while the messages get cleaned up


    return {
      pagination: res.pagination,
      messages: res.messages.map(message => message.msg)
    };
  }
  /**
   * Joins a team conversation.
   * @param channel - The team chat channel to join.
   * @example
   * bot.chat.listConvsOnName('team_name').then(async teamConversations => {
   *  for (const conversation of teamConversations) {
   *    if (conversation.memberStatus !== 'active') {
   *      await bot.chat.join(conversation.channel)
   *      console.log('Joined team channel', conversation.channel)
   *    }
   *  }
   * })
   */


  async joinChannel(channel) {
    await this._guardInitialized();
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'join',
      options: {
        channel
      }
    });

    if (!res) {
      throw new Error('Keybase chat join returned nothing');
    }
  }
  /**
   * Leaves a team conversation.
   * @param channel - The team chat channel to leave.
   * @example
   * bot.chat.listConvsOnName('team_name').then(async teamConversations => {
   *  for (const conversation of teamConversations) {
   *    if (conversation.memberStatus === 'active') {
   *      await bot.chat.leave(conversation.channel)
   *      console.log('Left team channel', conversation.channel)
   *    }
   *  }
   * })
   */


  async leaveChannel(channel) {
    await this._guardInitialized();
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'leave',
      options: {
        channel
      }
    });

    if (!res) {
      throw new Error('Keybase chat leave returned nothing');
    }
  }
  /**
   * Send a message to a certain channel.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param message - The chat message to send.
   * @param options - An object of options that can be passed to the method.
   * @example
   * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
   * const message = {body: 'Hello kbot!'}
   * bot.chat.send(channel, message).then(() => console.log('message sent!'))
   */


  async send(channel, message, options) {
    await this._guardInitialized();
    const args = { ...options,
      channel,
      message
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'send',
      options: args
    });

    if (!res) {
      throw new Error('Keybase chat send returned nothing');
    }

    return {
      id: res.id
    };
  }
  /**
   * Creates a new blank conversation.
   * @memberof Chat
   * @param channel - The chat channel to create.
   * @example
   * bot.chat.createChannel(channel).then(() => console.log('conversation created'))
   */


  async createChannel(channel) {
    await this._guardInitialized();
    const args = {
      channel
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'newconv',
      options: args
    });

    if (!res) {
      throw new Error('Keybase chat newconv returned nothing');
    }
  }
  /**
   * Send a file to a channel.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param filename - The absolute path of the file to send.
   * @param options - An object of options that can be passed to the method.
   * @example
   * bot.chat.attach(channel, '/Users/nathan/my_picture.png').then(() => console.log('Sent a picture!'))
   */


  async attach(channel, filename, options) {
    await this._guardInitialized();
    const args = { ...options,
      channel,
      filename
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'attach',
      options: args
    });

    if (!res) {
      throw new Error('Keybase chat attach returned nothing');
    }

    return {
      id: res.id
    };
  }
  /**
   * Download a file send via Keybase chat.
   * @memberof Chat
   * @param channel - The chat channel that the desired attacment to download is in.
   * @param messageId - The message id of the attached file.
   * @param output - The absolute path of where the file should be downloaded to.
   * @param options - An object of options that can be passed to the method
   * @example
   * bot.chat.download(channel, 325, '/Users/nathan/Downloads/file.png')
   */


  async download(channel, messageId, output, options) {
    await this._guardInitialized();
    const args = { ...options,
      channel,
      messageId,
      output
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'download',
      options: args
    });

    if (!res) {
      throw new Error('Keybase chat download returned nothing');
    }
  }
  /**
   * Reacts to a given message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chat.read`.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param messageId - The id of the message to react to.
   * @param reaction - The reaction emoji, in colon form.
   * @param options - An object of options that can be passed to the method.
   * @example
   * bot.chat.react(channel, 314, ':+1:').then(() => console.log('Thumbs up!'))
   */


  async react(channel, messageId, reaction, options) {
    await this._guardInitialized();
    const args = { ...options,
      channel,
      messageId,
      message: {
        body: reaction
      }
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'reaction',
      options: args
    });

    if (!res) {
      throw new Error('Keybase chat react returned nothing.');
    }

    return {
      id: res.id
    };
  }
  /**
   * Deletes a message in a channel. Messages have messageId's associated with
   * them, which you can learn in `bot.chat.read`. Known bug: the GUI has a cache,
   * and deleting from the CLI may not become apparent immediately.
   * @memberof Chat
   * @param channel - The chat channel to send the message in.
   * @param messageId - The id of the message to delete.
   * @param options - An object of options that can be passed to the method.
   * @example
   * bot.chat.delete(channel, 314).then(() => console.log('message deleted!'))
   */


  async delete(channel, messageId, options) {
    await this._guardInitialized();
    const args = { ...options,
      channel,
      messageId
    };
    const res = await this._runApiCommand({
      apiName: 'chat',
      method: 'delete',
      options: args
    });

    if (!res) {
      throw new Error('Keybase chat delete returned nothing.');
    }
  }
  /**
   * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives. This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel. Note that it receives messages your own bot posts, but from other devices. You can filter out your own messages by looking at a message's sender object.
   * Hides exploding messages by default.
   * @memberof Chat
   * @param channel - The chat channel to watch.
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @param options - Options for the listen method.
   * @example
   * // Reply to all messages between you and `kbot` with 'thanks!'
   * const channel = {name: 'kbot,' + bot.myInfo().username, public: false, topicType: 'chat'}
   * const onMessage = message => {
   *   const channel = message.channel
   *   bot.chat.send(channel, {body: 'thanks!!!'})
   * }
   * bot.chat.watchChannelForNewMessages(channel, onMessage)
   */


  async watchChannelForNewMessages(channel, onMessage, onError, options) {
    await this._guardInitialized();

    this._chatListen(onMessage, onError, channel, options);
  }
  /**
   * This function will put your bot into full-read mode, where it reads
   * everything it can and every new message it finds it will pass to you, so
   * you can do what you want with it. For example, if you want to write a
   * Keybase bot that talks shit at anyone who dares approach it, this is the
   * function to use. Note that it receives messages your own bot posts, but from other devices.
   * You can filter out your own messages by looking at a message's sender object.
   * Hides exploding messages by default.
   * @memberof Chat
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @param options - Options for the listen method.
   * @example
   * // Reply to incoming traffic on all channels with 'thanks!'
   * const onMessage = message => {
   *   const channel = message.channel
   *   bot.chat.send(channel, {body: 'thanks!!!'})
   * }
   * bot.chat.watchAllChannelsForNewMessages(onMessage)
   *
   */


  async watchAllChannelsForNewMessages(onMessage, onError, options) {
    await this._guardInitialized();

    this._chatListen(onMessage, onError, undefined, options);
  }
  /**
   * Spawns the chat listen process and handles the calling of onMessage, onError, and filtering for a specific channel.
   * @memberof Chat
   * @ignore
   * @param onMessage - A callback that is triggered on every message your bot receives.
   * @param onError - A callback that is triggered on any error that occurs while the method is executing.
   * @param channel - The chat channel to watch.
   * @param options - Options for the listen method.
   * @example
   * this._chatListen(onMessage, onError)
   */


  _chatListen(onMessage, onError, channel, options) {
    const args = ['chat', 'api-listen'];

    if (this.homeDir) {
      args.unshift('--home', this.homeDir);
    }

    if (!options || options && options.hideExploding !== false) {
      args.push('--hide-exploding');
    }

    if (channel) {
      args.push('--filter-channel', JSON.stringify(formatAPIObjectInput(channel, 'chat')));
    }

    const child = child_process.spawn(this._pathToKeybaseBinary(), args);
    this.spawnedProcesses.push(child);
    const lineReaderStdout = readline.createInterface({
      input: child.stdout
    });

    const onLine = line => {
      try {
        const messageObject = formatAPIObjectOutput(JSON.parse(line));

        if (messageObject.hasOwnProperty('error')) {
          throw new Error(messageObject.error);
        } else if ( // fire onMessage if it was from a different sender or at least a different device
        // from this sender. Bots can filter out their own messages from other devices.
        this.username && this.devicename && (messageObject.msg.sender.username !== this.username.toLowerCase() || messageObject.msg.sender.deviceName !== this.devicename)) {
          onMessage(messageObject.msg);
        }
      } catch (error) {
        if (onError) {
          onError(error);
        }
      }
    };

    lineReaderStdout.on('line', onLine);
  }

}

/** The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`. */
class Wallet extends ClientBase {
  /**
   * Provides a list of all accounts owned by the current Keybase user.
   * @memberof Wallet
   * @returns - An array of accounts. If there are no accounts, the array is empty.
   * @example
   * bot.wallet.balances().then(accounts => console.log(accounts))
   */
  async balances() {
    await this._guardInitialized();
    const res = await this._runApiCommand({
      apiName: 'wallet',
      method: 'balances'
    });

    if (!res) {
      throw new Error('Keybase wallet balanaces returned nothing.');
    }

    return res || [];
  }
  /**
   * Provides a list of all transactions in a single account.
   * @memberof Wallet
   * @param accountId - The id of an account owned by a Keybase user.
   * @returns - An array of transactions related to the account.
   * @example
   * bot.wallet.history('GDUKZH6Q3U5WQD4PDGZXYLJE3P76BDRDWPSALN4OUFEESI2QL5UZHCK').then(transactions => console.log(transactions))
   */


  async history(accountId) {
    await this._guardInitialized();
    const options = {
      accountId
    };
    const res = await this._runApiCommand({
      apiName: 'wallet',
      method: 'history',
      options: options
    });

    if (!res) {
      throw new Error('Keybase wallet history returned nothing.');
    } // Removes a single object with property `payment`


    const cleanedRes = res.map(payment => payment.payment);
    return cleanedRes;
  }
  /**
   * Get details about a particular transaction
   * @memberof Wallet
   * @param transactionId - The id of the transaction you would like details about.
   * @returns - An object of details about the transaction specified.
   * @example
   * bot.wallet.details('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4').then(details => console.log(details))
   */


  async details(transactionId) {
    await this._guardInitialized();
    const options = {
      txid: transactionId
    };
    const res = await this._runApiCommand({
      apiName: 'wallet',
      method: 'details',
      options: options
    });

    if (!res) {
      throw new Error('Keybase wallet details returned nothing.');
    }

    return res;
  }
  /**
   * Lookup the primary Stellar account ID of a Keybase user.
   * @memberof Wallet
   * @param name - The name of the user you want to lookup. This can be either a Keybase username or a username of another account that is supported by Keybase if it is followed by an '@<service>'.
   * @returns - An object containing the account ID and Keybase username of the found user.
   * @example
   * const lookup1 = bot.wallet.lookup('patrick')
   * // 'patrick' on Keybase is 'patrickxb' on twitter
   * const lookup2 = bot.wallet.lookup('patrcikxb@twitter')
   * // Using Lodash's `isEqual` since objects with same values aren't equal in JavaScript
   * _.isEqual(lookup1, lookup2) // => true
   */


  async lookup(name) {
    await this._guardInitialized();
    const options = {
      name
    };
    const res = await this._runApiCommand({
      apiName: 'wallet',
      method: 'lookup',
      options
    });

    if (!res) {
      throw new Error('Keybase wallet lookup returned nothing.');
    }

    return res;
  }
  /**
   * Send lumens (XLM) via Keybase with your bot!
   * @memberof Wallet
   * @param recipient - Who you're sending your money to. This can be a Keybase user, stellar address, or a username of another account that is supported by Keybase if it is followed by an '@<service>'.
   * @param amount - The amount of XLM to send.
   * @param [currency] - Adds a currency value to the amount specified. For example, adding 'USD' would send
   * @param [message] - The message for your payment
   * @returns - The trasaction object of the transaction.
   * @example
   * bot.wallet.send('nathunsmitty', '3.50') // Send 3.50 XLM to Keybase user `nathunsmitty`
   * bot.wallet.send('nathunsmitty@github', '3.50') // Send 3.50 XLM to GitHub user `nathunsmitty`
   * bot.wallet.send('nathunsmitty', '3.50', 'USD') // Send $3.50 worth of lumens to Keybase user `nathunsmitty`
   * bot.wallet.send('nathunsmitty', '3.50', 'USD', 'Shut up and take my money!') // Send $3.50 worth of lumens to Keybase user `nathunsmitty` with a memo
   */


  async send(recipient, amount, currency, message) {
    await this._guardInitialized();
    const options = {
      recipient,
      amount,
      currency,
      message
    };
    const res = await this._runApiCommand({
      apiName: 'wallet',
      method: 'send',
      options
    });

    if (!res) {
      throw new Error('Keybase wallet send returned nothing.');
    }

    return res;
  }
  /**
   * Send lumens (XLM) via Keybase to more than one user at once. As opposed to the normal bot.wallet.send
   * command, this can get multiple transactions into the same 5-second Stellar ledger.
   * @memberof Wallet
   * @param batchId - example, if sending a bunch of batches for an airdrop, you could pass them all `airdrop2025`.
   * @param payments - an array of objects containing recipients and XLM of the form {"recipient": "someusername", "amount": "1.234", "message", "hi there"}
   * @returns - an object
   * @example
   * bot.wallet.batch("airdrop2040",[{"recipient":"a1","amount": "1.414", "message": "hi a1, yes 1"},{"recipient": "a2", "amount": "3.14159", "message": "hi a2, yes 2"},}])
   */


  async batch(batchId, payments) {
    await this._guardInitialized();
    const options = {
      batchId,
      payments
    };
    const res = await this._runApiCommand({
      apiName: 'wallet',
      method: 'batch',
      options
    });

    if (!res) {
      throw new Error('Keybase wallet batch returned nothing.');
    }

    return res;
  }
  /**
   * If you send XLM to a Keybase user who has not established a wallet, you can cancel the payment before the recipient claims it and the XLM will be returned to your account.
   * @memberof Wallet
   * @param transactionId - The id of the transaction to cancel.
   * @example
   * bot.wallet.cancel('e5334601b9dc2a24e031ffeec2fce37bb6a8b4b51fc711d16dec04d3e64976c4').then(() => console.log('Transaction successfully canceled!'))
   */


  async cancel(transactionId) {
    await this._guardInitialized();
    const options = {
      txid: transactionId
    };
    const res = await this._runApiCommand({
      apiName: 'wallet',
      method: 'cancel',
      options
    });

    if (!res) {
      throw new Error('Keybase wallet cancel returned nothing.');
    }
  }

}

/** The wallet module of your Keybase bot. For more info about the API this module uses, you may want to check out `keybase wallet api`. */
class Team extends ClientBase {
  /**
   * Add a bunch of people with different privileges to a team
   * @memberof Team
   * @param additions - an array of the users to add, with privs
   * @returns -
   * @example
   * bot.team.addMembers({"team": "phoenix", "emails": [{"email": "alice@keybase.io", "role": "writer"}, {"email": "cleo@keybase.io", "role": "admin"}], "usernames": [{"username": "frank", "role": "reader"}, {"username": "keybaseio@twitter", "role": "writer"}]}).then(res => console.log(res))
   */
  async addMembers(additions) {
    await this._guardInitialized();
    const options = additions;
    const res = await this._runApiCommand({
      apiName: 'team',
      method: 'add-members',
      options
    });

    if (!res) {
      throw new Error('addMembers');
    }

    return res;
  }
  /**
   * Remove someone from a team
   * @memberof Team
   * @param removal - object with the `team` name and `username`
   * @returns -
   * @example
   * bot.team.removeMember({"team": "phoenix", "username": "frank"}).then(res => console.log(res))
   */


  async removeMember(removal) {
    await this._guardInitialized();
    const options = removal;
    const res = await this._runApiCommand({
      apiName: 'team',
      method: 'remove-member',
      options
    });
    return res;
  }
  /**
   * List a team's members
   * @memberof Team
   * @param team - an object with the `team` name in it
   * @returns -
   * @example
   * bot.team.listTeamMemberships({"team": "phoenix"}).then(res => console.log(res))
   */


  async listTeamMemberships(team) {
    await this._guardInitialized();
    const options = team;
    const res = await this._runApiCommand({
      apiName: 'team',
      method: 'list-team-memberships',
      options
    });

    if (!res) {
      throw new Error('listTeamMemberships');
    }

    return res;
  }

}

/** A Keybase bot. */
class Bot {
  // where KB binary copied, and homeDir (if not existing svc)

  /**
   * Create a bot. Note you can't do much too exciting with your bot after you instantiate it; you have to initialize it first.
   * @memberof Bot
   * @example
   * const bot = new Bot()
   */
  constructor() {
    this._workingDir = randomTempDir();
    this._service = new Service(this._workingDir);
    this.chat = new Chat(this._workingDir);
    this.wallet = new Wallet(this._workingDir);
    this.team = new Team(this._workingDir);
  }
  /**
   * Initialize your bot by starting an instance of the Keybase service and logging in using oneshot mode.
   * @memberof Bot
   * @param username - The username of your bot's Keybase account.
   * @param paperkey - The paperkey of your bot's Keybase account.
   * @param options - The initialization options for your bot.
   * @example
   * bot.init('username', 'paperkey')
   */


  async init(username, paperkey, options) {
    await this._prepWorkingDir();
    await this._service.init(username, paperkey, options);
    await this._initSubBots(options);
  }
  /**
   * Initialize your bot by using an existing running service with a logged in user.
   * @memberof Bot
   * @param homeDir - The home directory of this currently running service. Leave blank to use the default homeDir for your system.
   * @param options - The initialization options for your bot.
   * @example
   * bot.initFromRunningService()
   */


  async initFromRunningService(homeDir, options) {
    await this._prepWorkingDir();
    await this._service.initFromRunningService(homeDir, options);
    await this._initSubBots(options);
  }
  /**
   * Get info about your bot!
   * @memberof Bot
   * @returns – Useful information like the username, device, and home directory of your bot. If your bot isn't initialized, you'll get `null`.
   * @example
   * const info = bot.myInfo()
   */


  myInfo() {
    return this._service.myInfo();
  }
  /**
   * Deinitializes the bot by logging out, stopping the keybase service, and removing any leftover login files made by the bot. This should be run before your bot ends.
   * @memberof Bot
   * @example
   * bot.deinit()
   */


  async deinit() {
    // Stop the clients first, so that they aren't trying to
    // talk to a deinit'ed service
    await this.chat._deinit();
    await this._service.deinit();
    await rmdirRecursive(this._workingDir);
  }

  async _prepWorkingDir() {
    const keybaseBinaryLocation = await whichKeybase();
    const destination = path.join(this._workingDir, 'keybase');
    await util.promisify(mkdirp)(this._workingDir);
    await util.promisify(fs.copyFile)(keybaseBinaryLocation, destination);
  }

  async _initSubBots(options) {
    const info = this.myInfo();

    if (info) {
      await this.chat._init(info.homeDir, options);
      await this.wallet._init(info.homeDir, options);
      await this.team._init(info.homeDir, options);
    } else {
      throw new Error('Issue initializing bot.');
    }
  }

}

module.exports = Bot;
//# sourceMappingURL=index.js.map
