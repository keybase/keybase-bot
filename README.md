# keybase-chat-bot
exploration with the keybase chat API

things I'd love to change about the API:
====================

1. a way to tell which conversations have unread messages. maybe this info on convo view:
   - last activity time or sequence number or something, so I can sort them by priority
   - whether there's anything unread

reason: hard to write any bot at scale otherwise

2. a way to peek into a folder without marking it as read. That would be either:
   - a flag to pass `read` that says not to mark as read
   - a separate call to mark a folder as read up to a certain message number

reason: it would be nice to have a bot that does things with your own chat messages without getting in the way of your own human use of your chat.

TODO:
======
  - reading and replying to messages
  - attachments
