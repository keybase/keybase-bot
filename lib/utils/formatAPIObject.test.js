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
    const formattedInput = formatAPIObjectInput(input)
    expect(formattedInput).toEqual({
      conversation_id: 'blah',
      nonblock: false,
      members: {
        member_type: 'user',
        member_ids: [1, 2, 3, 4, 5],
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
})
