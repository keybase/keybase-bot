/*
 * if you'd like to run any of the tests in this directory,
 * save this file as `tests.config.js` and put in real usernames and paperkeys
 * for each of the participants here.
 */

module.exports = {
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
}
