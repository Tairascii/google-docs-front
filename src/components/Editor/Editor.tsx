'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image'
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { FontSizeExtension } from '@/extensions/fontSize'
import { LineHeightExtension } from '@/extensions/lineHeight'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { useEditorStore } from '@/store/useEditorStore'
import { Collaboration } from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { Ruler } from '../Ruler'
import styles from './Editor.module.scss'
import { WebsocketProvider } from 'y-websocket'
import { getApiPath } from '@/utils/getApiPath'
import { ApiVersionEnum } from '@/enums/ApiVersion'

const ydoc = new Y.Doc()
const provider = new WebsocketProvider(
  getApiPath({
    version: ApiVersionEnum.V1,
    service: 'document',
    path: '/ws',
  }),
  '0161cded-5aa1-486b-9bb9-de856939bc91',
  ydoc
)

ydoc.on('update', () => {
  console.log('received update')
})

export const Editor = () => {
  const { setEditor } = useEditorStore()

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor)
    },
    onDestroy() {
      setEditor(null)
    },
    onUpdate({ editor }) {
      setEditor(editor)
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor)
    },
    onTransaction({ editor }) {
      setEditor(editor)
    },
    onFocus({ editor }) {
      setEditor(editor)
    },
    onBlur({ editor }) {
      setEditor(editor)
    },
    onContentError({ editor }) {
      setEditor(editor)
    },
    extensions: [
      Image,
      FontFamily,
      TextStyle,
      TaskItem.configure({ nested: true }),
      TaskList,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      ImageResize,
      StarterKit,
      Underline,
      FontSizeExtension,
      LineHeightExtension,
      Color,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({ multicolor: true }),
      Collaboration.configure({ document: ydoc }),
    ],
    editorProps: {
      attributes: {
        style: 'padding-right: 56px; padding-left: 56px;',
        class: styles.editor,
      },
    },
  })

  return (
    <div className={styles.container}>
      <Ruler />
      <div className={styles.wrapper}>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Editor
