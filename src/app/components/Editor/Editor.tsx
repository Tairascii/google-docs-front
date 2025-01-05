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
import { useEditorStore } from '@/app/store/useEditorStore'
import styles from './Editor.module.scss'

export const Editor = () => {
  const { setEditor } = useEditorStore()

  const editor = useEditor({
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
    ],
    editorProps: {
      attributes: {
        style: 'padding-right: 56px; padding-left: 56px;',
        class: styles.editor,
      },
    },
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
  })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Editor
