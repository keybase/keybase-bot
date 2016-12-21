# keybase-chat-bot
exploration with the keybase chat API


TODO:
======
  - attachments
  - `messages` and `conversations` come back as null right now if a conversation or inbox is empty, instead of an empty array. I added a workaround, wondering if this should survive or be fixed in the API
  - remove treatOldMessagesAsNew once I have real new message info
  - let watchForNewMessages be constrained to certain channels or channel types (public / chat vs. dev / etc.)
