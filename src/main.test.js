import { parseTiptapHtml } from './tiptap'

describe('parseTiptapHtml()', () => {
  it('can handle null input', () => {
    expect(parseTiptapHtml(null)).toEqual({
      content: [
        {
          type: 'paragraph',
        },
      ],
      type: 'doc',
    })
  })
})
