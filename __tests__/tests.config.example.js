/*
 * if you'd like to run any of the tests in this directory,
 * save this file as `tests.config.js` and put in real usernames and paperkeys
 * for each of the participants here.
 */

module.exports = {
  bots: {
    alice1: {
      username: 'alice',
      paperkey: 'foo bar car...',
    },
    alice2: {
      username: 'alice' /* should be the same as alice1 */,
      paperkey: 'yo there paperkey...',
    },
    bob1: {
      username: 'bob',
      paperkey: 'one two three four...',
    },
    charlie1: {
      // Charlie should be an account that has access to Stellar features
      username: 'charlie',
      paperkey: 'get this bread...',
    },
  },
  teams: {
    acme: {
      teamname: 'someteam' /* a real team that you add your alice1, alice2, and bob1 all into */,
    },
  },
}
