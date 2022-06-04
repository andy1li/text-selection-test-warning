import { Editor, type JSONContent } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

const editor = new Editor({
  extensions: [Document, Paragraph, Text],
})

export function parseTiptapHtml(html: string | null): JSONContent {
  editor.commands.setContent(html)
  return editor.getJSON()
}
