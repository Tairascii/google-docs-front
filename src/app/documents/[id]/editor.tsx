'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styles from './editor.module.scss'

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        style: 'padding-right: 56px; padding-left: 56px;',
        class: styles.editor,
      },
    },
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
