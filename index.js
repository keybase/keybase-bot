'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var snakeCase = _interopDefault(require('lodash.snakecase'));
var child_process = require('child_process');
var readline = _interopDefault(require('readline'));

function keybaseExec(args, options = {
  stdinBuffer: undefined,
  onStdOut: undefined
}) {
  const child = child_process.spawn('keybase', args);
  const outBuffers = [];
  let out = null;

  if (options.stdinBuffer) {
    child.stdin.write(options.stdinBuffer);
  }

  child.stdin.end();
  const lineReader = readline.createInterface({
    input: child.stdout
  });

  if (options.onStdOut) {
    lineReader.on('line', options.onStdOut);
  } else {
    child.stdout.on('data', chunk => {
      outBuffers.push(chunk);
    });
  }

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code) {
        reject(new Error(`exited with code ${code}`));
      } else {
        const stdout = Buffer.concat(outBuffers).toString('utf8');

        try {
          out = options.json ? JSON.parse(stdout) : stdout;
        } catch (e) {
          reject(e);
        }
      }

      resolve(out);
    });
  });
} // Recursively convert from camelCase to snake_case for any options object for keybase chat api

const formatOptions = options => Object.keys(options).reduce((newOptions, key) => {
  if (typeof options[key] === 'object') {
    return { ...newOptions,
      [snakeCase(key)]: formatOptions(options[key])
    };
  }

  return { ...newOptions,
    [snakeCase(key)]: options[key]
  };
}, {});

/*
 * Actions
 */
const actionInit = props => ({
  type: 'INIT',
  payload: props
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      {
        return { ...state,
          initialized: true,
          username: action.payload.username,
          devicename: action.payload.devicename,
          flags: action.payload.flags
        };
      }

    case 'DEINIT':
      {
        return { ...state,
          initialized: false,
          username: undefined,
          devicename: undefined,
          flags: {
            verbose: false
          }
        };
      }

    default:
      {
        return state;
      }
  }
};

/*
 * withStore is a helper function that can be used to provide a single API function
 * with an insolatd store.
 *
 * This is used in the following situations:
 *  1. Multiple bots are initialized and each one creates its own store
 *  2. Tests where an example store is created, passed in to an API method, and
 *     then discarded
 *
 * Usage:
 *                      A          B
 *  wrappedApiFunc = (store) => (options) => { ... }
 *  guards = [checkInitialized, checkUsernameUnchanged]
 *  apiFunc = withStore(store, guards?)(wrappedApiFun)
 *
 * A is the wrapped function that is provided `store`
 * B is the regular api function that gets closure over `store`
 *
 * This is very useful when initializing new bots and passing in different stores for each Bot
 * as well as testing individual API methods by providing an preconfigured store.
 */
const withStore = (store, allGuards) => {
  return wrapped => {
    const apiFunc = wrapped(store); // Intentionally allow error to bubble up and be handled by caller

    const withGuard = async (...args) => {
      if (allGuards) {
        await allGuards(store);
      }

      const res = await apiFunc(...args);
      return res;
    }; // If withStore was called using withGuards, then prevent apiFunc from
    // being called until all guard functions resolve
    //
    // Otherwise return the API function directly


    if (allGuards) {
      return withGuard;
    }

    return apiFunc;
  };
};
/*
 * withGuards takes an array of functions that return Promises. Each function will reject/throw if some condition in the Store does not hold.
 * Example:
 *    withGuards([checkInitialized, checkUsernameUnchanged])
 *
 */

const withGuards = guards => async store => {
  for (const guard of guards) {
    await guard(store);
  }
};

/*
 * Store
 */

const initialState = {
  initialized: false,
  username: undefined,
  devicename: undefined,
  flags: {
    verbose: false
  }
  /*
   * This is basic functional state management (redux-like) without any overhead
   * for middleware or listeners
   *
   * state -> dispatch(action) -> reducer -> new state
   */

};
const createStore = (reducer$$1, init = initialState) => {
  let state = init;

  const getState = () => ({ ...state
  });

  const dispatch = action => {
    state = reducer$$1(state, action);
  };

  return {
    getState,
    dispatch
  };
};

/**
 * @ignore
 * getCurrentUsernameAndDevicename returns { username, devicename } from keybase status -j
 */
const getCurrentUsernameAndDevicename = async () => {
  const status = await keybaseExec(['status', '--json'], {
    json: true
  });

  if (status && status.Username && status.Device && status.Device.name) {
    return {
      username: status.Username,
      devicename: status.Device.name
    };
  } else {
    throw new Error('failed to get username + device name');
  }
};
/**
 * @ignore
 * guardInitialized takes the current store and the api function to guard
 * It ensures that the following conditions remain true
 *  1. The bot was initialized before calling the given api function
 *  2. The bot has username and devicename if it has been initialized
 *  2. The current username and devicename have not changed values
 *
 * If any condition is false, an error is thrown
 * Otherwise, return the function (to be executed later)
 *
 */


const guardInitialized = async store => {
  const currentDPair = await getCurrentUsernameAndDevicename();
  const {
    initialized,
    username,
    devicename
  } = store.getState();

  if (!initialized || !currentDPair || !username || !devicename || currentDPair.username !== username || currentDPair.devicename !== devicename) {
    throw new Error('Uh-oh, username has changed or we never initialized correctly.');
  }
};
/**
 * @namespace bot
 */

const _init = store => {
  /**
   *
   * `bot.init()` must be run to initialize the bot before using other methods. It
   * checks to make sure you're properly logged into Keybase and gets basic
   * info about your session. Afterwards, feel free to check bot.myInfo() to
   * see or check who you're logged in as.
   *
   * @memberof bot
   *
   */
  const init = async (username, paperkey, options) => {
    if (!username || typeof username !== 'string') throw new Error(`Please provide a username to initialize the bot. Got: ${JSON.stringify(username)}`); // Don't want to accidentally print the paperkey to STDERR

    if (!paperkey || typeof paperkey !== 'string') throw new Error(`Please provide a paperkey to initialize the bot.`);
    await keybaseExec(['oneshot', '--username', username], {
      stdinBuffer: paperkey
    });
    const currentDPair = await getCurrentUsernameAndDevicename();

    if (currentDPair && currentDPair.username && currentDPair.devicename) {
      const update = {
        username: currentDPair.username,
        devicename: currentDPair.devicename,
        flags: {
          verbose: options ? Boolean(options.verbose) : false
        }
      };
      store.dispatch(actionInit(update)); // TODO: @jacob - refactor logging to depend on verbose flag in state
      // this._log(`intialized ${currentDPair.username} (device=${currentDPair.devicename})`)
    }
  };

  return init;
};
/**
 *
 * Deinitializes a bot by logging it out of its current Keybase session.
 * Should be run after your bot finishes.
 *
 * @memberof bot
 *
 */

const deinit = async () => {
  await keybaseExec(['logout']);
};
const _myInfo = store => {
  /**
   * @memberof bot
   */
  const myInfo = () => {
    const {
      username,
      devicename
    } = store.getState();
    if (username && devicename) return {
      username,
      devicename
    };
    return null;
  };

  return myInfo;
};
var Base = (store => ({
  init: withStore(store)(_init),
  deinit: withStore(store)(store => deinit),
  myInfo: withStore(store)(_myInfo)
}));

const CHAT_API_VERSION = 1;

const runApiCommand = async arg => {
  const options = formatOptions(arg.options);
  const input = {
    method: arg.method,
    params: {
      version: CHAT_API_VERSION,
      options
    }
  };
  const inputString = JSON.stringify(input);
  const size = inputString.length;
  const output = await keybaseExec(['chat', 'api'], {
    stdinBuffer: Buffer.alloc(size, inputString, 'utf8'),
    json: true
  });
  const res = output.result;
  return res;
};
/**
 * Keybase chat api functions
 *
 * @namespace chat
 * @memberof bot
 */

/**
 * Lists your chats, with info on which ones have unread messages.
 *
 * @memberof bot.chat
 *
 */


const list = async options => {
  const res = await runApiCommand({
    method: 'list',
    options
  });
  return res ? res.conversations || [] : [];
};
/**
 * Reads the messages in a channel. You can read with or without marking as read.
 *
 * @memberof bot.chat
 */

const read = async (channel, options) => {
  const optionsWithDefaults = { ...options,
    channel,
    peek: options.peek !== undefined ? options.peek : false,
    unreadOnly: options.unreadOnly !== undefined ? options.unreadOnly : false
  };
  await runApiCommand({
    method: 'read',
    options: optionsWithDefaults
  });
};
/**
 * Sends a message to a certain channel.
 *
 * @memberof bot.chat
 */

const send = async (channel, message, options) => {
  const args = { ...options,
    channel,
    message
  };
  const res = await runApiCommand({
    method: 'send',
    options: args
  });

  if (!res) {
    throw new Error('keybase chat send returned nothing');
  }

  if (res.hasOwnProperty('error')) {
    throw new Error(res.error.message);
  }

  return res;
};
/**
 * Deletes a message in a channel. Messages have messageId's associated with
 * them, which you can learn in `bot.chatRead`. Known bug: the GUI has a cache,
 * and deleting from the CLI may not become apparent immediately.
 *
 * @alias delete
 * @memberof bot.chat
 */
// delete is a javascript reserved word and cannot be used as a function signature

const deleteMessage = async (channel, messageId, options) => {
  const args = { ...options,
    channel,
    messageId
  };
  await runApiCommand({
    method: 'delete',
    options: args
  });
};
/**
 * Listens for new chat messages on a specified channel. The `onMessage` function is called for every message your bot receives.
 * This is pretty similar to `watchAllChannelsForNewMessages`, except it specifically checks one channel.
 *
 * @memberof bot.chat
 */

const watchChannelForNewMessages = (channel, onMessage) => {
  keybaseExec(['chat', 'api-listen'], {
    onStdOut: line => {
      try {
        const messageObject = JSON.parse(line);

        if (channel.name === messageObject.msg.channel.name) {
          onMessage(messageObject.msg);
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
};
/**
 *
 * This function will put your bot into insane mode, where it reads
 * everything it can and every new message it finds it will pass to you, so
 * you can do what you want with it. For example, if you want to write a
 * Keybase bot that talks shit at anyone who dares approach it, this is the
 * function to use.*
 *
 * Specifically, it will call the `onMessage` function you provide for every
 * message your bot receives.*
 *
 * @memberof bot.chat
 * @example
 * // reply to incoming traffic on all channels with 'thanks!'
 * var onMessages = function(m) {
 *   var channel = m.channel
 *   var messages = m.messages // we could look in this array to read them and write custom replies
 *   bot.chatSend(
 *     {
 *       channel: channel,
 *       message: {
 *         body: 'thanks!!!',
 *       },
 *     },
 *     function(err, res) {
 *       if (err) {
 *         console.log(err)
 *       }
 *     }
 *   )
 * }
 * bot.watchAllChannelsForNewMessages({onMessages: onMessages})
 *
 */

const watchAllChannelsForNewMessages = onMessage => {
  keybaseExec(['chat', 'api-listen'], {
    onStdOut: line => {
      console.log(line);

      try {
        const messageObject = JSON.parse(line);
        onMessage(messageObject.msg);
      } catch (error) {
        console.error(error);
      }
    }
  });
}; // Provide API functions with access to the bot's store using withStore
// Also provide guard functions to check before executing the API function

var Chat = (store => ({
  list: withStore(store, withGuards([guardInitialized]))(store => list),
  read: withStore(store, withGuards([guardInitialized]))(store => read),
  send: withStore(store, withGuards([guardInitialized]))(store => send),
  delete: withStore(store, withGuards([guardInitialized]))(store => deleteMessage),
  watchChannelForNewMessages: withStore(store)(store => watchChannelForNewMessages),
  watchAllChannelsForNewMessages: withStore(store)(store => watchAllChannelsForNewMessages)
}));

class Bot {
  constructor() {
    const _store = createStore(reducer, initialState);

    const base = Base(_store);
    const chat = Chat(_store);
    this.init = base.init;
    this.deinit = base.deinit;
    this.myInfo = base.myInfo;
    this.chat = chat;
  }

}

module.exports = Bot;
//# sourceMappingURL=index.js.map
