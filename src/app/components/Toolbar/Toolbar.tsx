'use client'

import { Section } from './types'
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from 'lucide-react'
import { ToolbarButton } from '@/app/ui/ToolbarButton'
import { useEditorStore } from '@/app/store/useEditorStore'
import styles from './Toolbar.module.scss'

export const Toolbar = () => {
  const { editor } = useEditorStore()
  const baseTools: Section[] = [
    {
      id: 'undo',
      label: 'Undo',
      icon: Undo2Icon,
      onClick: () => editor?.chain().undo().run(),
    },
    {
      id: 'redo',
      label: 'Redo',
      icon: Redo2Icon,
      onClick: () => editor?.chain().redo().run(),
    },
    {
      id: 'print',
      label: 'Print',
      icon: PrinterIcon,
      onClick: () => window.print(),
    },
    {
      id: 'spellCheck',
      label: 'SpellCheck',
      icon: SpellCheckIcon,
      onClick: () => {
        const current = editor?.view.dom.getAttribute('spellcheck')
        editor?.view.dom.setAttribute(
          'spellcheck',
          current === 'false' ? 'true' : 'false'
        )
      },
    },
  ]

  const fontTools: Section[] = [
    {
      id: 'bold',
      label: 'Bold',
      icon: BoldIcon,
      onClick: () => editor?.chain().toggleBold().run(),
      isActive: editor?.isActive('bold'),
    },
    {
      id: 'italic',
      label: 'Italic',
      icon: ItalicIcon,
      onClick: () => editor?.chain().toggleItalic().run(),
      isActive: editor?.isActive('italic'),
    },
    {
      id: 'underline',
      label: 'Underline',
      icon: UnderlineIcon,
      onClick: () => editor?.chain().toggleUnderline().run(),
      isActive: editor?.isActive('underline'),
    },
  ]

  const mediaTools: Section[] = [
    {
      id: 'comment',
      label: 'Comment',
      icon: MessageSquarePlusIcon,
      onClick: () => {
        console.log('comment')
      },
      isActive: false,
    },
    {
      id: 'listTodo',
      label: 'ListTodo',
      icon: ListTodoIcon,
      onClick: () => editor?.chain().focus().toggleTaskList().run(),
      isActive: editor?.isActive('taskList'),
    },
    {
      id: 'removeFormatting',
      label: 'RemoveFormatting',
      icon: RemoveFormattingIcon,
      onClick: () => editor?.chain().focus().unsetAllMarks().run(),
    },
  ]

  return (
    <div className={styles.container}>
      {baseTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
      <hr className={styles.separator} />
      {fontTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
      <hr className={styles.separator} />
      {mediaTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Toolbar
