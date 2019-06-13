import {formatAPIObjectInput, formatAPIObjectOutput} from './formatAPIObject'

describe('formatAPIObjectInput', () => {
  it('works', () => {
    const input = {
      conversationId: 'blah',
      nonblock: false,
      members: {
        memberType: 'user',
        memberIds: [1, 2, 3, 4, 5],
      },
    }
    let formattedInput = formatAPIObjectInput(input, 'chat')
    expect(formattedInput).toEqual({
      conversation_id: 'blah',
      nonblock: false,
      members: {
        member_type: 'user',
        member_ids: [1, 2, 3, 4, 5],
      },
    })
    formattedInput = formatAPIObjectInput(input, 'wallet')
    expect(formattedInput).toEqual({
      'conversation-id': 'blah',
      nonblock: false,
      members: {
        'member-type': 'user',
        'member-ids': [1, 2, 3, 4, 5],
      },
    })
  })
})

describe('formatAPIObjectOutput', () => {
  it('works', () => {
    const output = {
      conversation_id: 'blah',
      nonblock: false,
      members: {
        member_type: 'user',
        member_ids: [1, 2, 3, 4, 5],
      },
    }
    const formattedOutput = formatAPIObjectOutput(output)
    expect(formattedOutput).toEqual({
      conversationId: 'blah',
      nonblock: false,
      members: {
        memberType: 'user',
        memberIds: [1, 2, 3, 4, 5],
      },
    })
  })

  it('works with a blacklisted field', () => {
    const output = {
      messages: [
        {
          msg: {
            message_id: 'blah',
            reactions: {
              reactions: {
                ':poop:': {the_bob: {some_field: 'cool!'}},
              },
            },
          },
        },
      ],
    }
    const formattedOutput = formatAPIObjectOutput(output, {
      apiName: 'chat',
      method: 'read',
    })
    expect(formattedOutput).toEqual({
      messages: [
        {
          msg: {
            messageId: 'blah',
            reactions: {
              reactions: {
                poop: {the_bob: {someField: 'cool!'}},
              },
            },
          },
        },
      ],
    })
  })
})
