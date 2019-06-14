/*
 * if you'd like to run any of the tests in this directory,
 * save this file as `tests.config.ts` and put in real usernames and paperkeys
 * for each of the participants here.
 */

export = {
  bots: {
    alice1: {
      // Alice should have an active Stellar account with a little bit of XLM in it
      username: 'alice',
      paperkey: 'foo bar car...',
    },
    alice2: {
      username: 'alice' /* should be the same as alice1 */,
      paperkey: 'yo there paperkey...',
    },
    bob1: {
      // Bob should have an active Stellar account with a little bit of XLM in it
      username: 'bob',
      paperkey: 'one two three four...',
    },
    charlie1: {
      // Charlie should be an account that does not have access to Stellar features
      username: 'charlie',
      paperkey: 'get this bread...',
    },
  },
  teams: {
    acme: {
      teamname: 'someteam' /* a real team that you add your alice1, alice2, and bob1 all into */,
    },
    alices_playground: {
      teamname: 'someteam2' /* a team with alice in it AS ADMIN, but bob or charlie not in team */,
    },
  },
}
