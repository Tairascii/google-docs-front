'use client'

import { Section } from './types'
import {
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
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
import { FontFamilyButton } from '@/app/ui/FontFamilyButton'
import { HeadingButton } from '@/app/ui/HeadingButton'
import { type Level } from '@tiptap/extension-heading'
import { type ColorResult } from 'react-color'
import { TextColorButton } from '@/app/ui/TextColorButton'
import { TextHighlightButton } from '@/app/ui/TextHighlightButton'
import { LinkButton } from '@/app/ui/LinkButton'
import { ImageButton } from '@/app/ui/ImageButton'
import { AlignButton } from '@/app/ui/AlignButton'
import { FontSizeButton } from '@/app/ui/FontSizeButton'
import styles from './Toolbar.module.scss'
import { LineHeightButton } from '@/app/ui/LineHeightButton'

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

  const listTools: Section[] = [
    {
      id: 'unorderedList',
      label: 'Bullet list',
      icon: ListIcon,
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
      isActive: editor?.isActive('bulletList'),
    },
    {
      id: 'orderedList',
      label: 'Order list',
      icon: ListOrderedIcon,
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
      isActive: editor?.isActive('orderedList'),
    },
  ]

  const currentFont = editor?.getAttributes('textStyle').fontFamily
  const onFontChange = (value: string) => {
    editor?.chain().setFontFamily(value).run()
  }

  const onHeadingChange = (level: number) => {
    if (level === 0) {
      editor?.chain().setParagraph().run()
      return
    }
    editor
      ?.chain()
      .focus()
      .toggleHeading({ level: level as Level })
      .run()
  }

  const getCurrentHeading = (): string => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive('heading', { level })) {
        return `Heading ${level}`
      }
    }
    return 'Normal text'
  }

  const currentColor = editor?.getAttributes('textStyle').color
  const onColorChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run()
  }

  const currentHighlight = editor?.getAttributes('highlight').color
  const onHighlightChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run()
  }

  const currentLink = editor?.getAttributes('link').href ?? ''
  const onLinkChange = (href: string) => {
    editor?.chain().focus().extendMarkRange('link').setLink({ href }).run()
  }

  const onImageChange = (src: string) => {
    editor?.chain().focus().setImage({ src }).run()
  }

  const currentAlignment = (): string => {
    if (editor?.isActive({ textAlign: 'left' })) return 'left'
    if (editor?.isActive({ textAlign: 'right' })) return 'right'
    if (editor?.isActive({ textAlign: 'center' })) return 'center'
    if (editor?.isActive({ textAlign: 'justify' })) return 'justify'
    return 'left'
  }

  const onAlignmentChange = (val: string) => {
    editor?.chain().focus().setTextAlign(val).run()
  }

  const currentFontSize = editor?.getAttributes('textStyle').fontSize
  const onFontSizeChange = (val: string) => {
    editor?.chain().focus().setFontSize(`${val}px`).run()
  }

  const currentLineHeight = editor?.getAttributes('paragraph').lineHeight
  const onLineHeightChange = (val: string) => {
    editor?.chain().focus().setLineHeight(val).run()
  }

  return (
    <div className={styles.container}>
      {baseTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
      <hr className={styles.separator} />
      <HeadingButton
        currentHeading={getCurrentHeading()}
        onHeadingChange={onHeadingChange}
      />
      <hr className={styles.separator} />
      <FontFamilyButton onFontChange={onFontChange} currentFont={currentFont} />
      <hr className={styles.separator} />
      <FontSizeButton
        currentSize={currentFontSize}
        onSizeChange={onFontSizeChange}
      />
      <hr className={styles.separator} />
      {fontTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
      <TextColorButton
        currentColor={currentColor}
        onColorChange={onColorChange}
      />
      <TextHighlightButton
        onHighlightChange={onHighlightChange}
        currentHighlight={currentHighlight}
      />
      <hr className={styles.separator} />
      <LinkButton onLinkChange={onLinkChange} currentLink={currentLink} />
      <ImageButton onImageChange={onImageChange} />
      {mediaTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
      <hr className={styles.separator} />
      <AlignButton
        onAlignmentChange={onAlignmentChange}
        currentAlignment={currentAlignment()}
      />
      <LineHeightButton
        currentLineHeight={currentLineHeight}
        onLineHeightChange={onLineHeightChange}
      />
      {listTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Toolbar
