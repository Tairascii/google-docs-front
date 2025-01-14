'use client'

import * as Menubar from '@radix-ui/react-menubar'
import styles from './DocumentMenuBar.module.scss'
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from 'lucide-react'
import { BsFilePdf } from 'react-icons/bs'
import { useEditorStore } from '@/store/useEditorStore'

const DocumentMenuBar = () => {
  const { editor } = useEditorStore()

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run()
  }

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
  }

  const onSaveJSON = () => {
    if (!editor) return
    const content = editor.getJSON()
    const blob = new Blob([JSON.stringify(content)], {
      type: 'application/json',
    })

    onDownload(blob, `document.json`)
  }

  const onSaveHTML = () => {
    if (!editor) return
    const content = editor.getHTML()
    const blob = new Blob([content], {
      type: 'text/html',
    })

    onDownload(blob, `document.html`)
  }

  const onSaveText = () => {
    if (!editor) return
    const content = editor.getText()
    const blob = new Blob([content], {
      type: 'text/plain',
    })

    onDownload(blob, `document.txt`)
  }

  return (
    <div className={styles.container}>
      <Menubar.Root className={styles.menuRoot}>
        <Menubar.Menu>
          <Menubar.Trigger className={styles.menuButton}>File</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content align="start" className={styles.content}>
              <Menubar.Sub>
                <Menubar.SubTrigger className={styles.menuOption}>
                  <FileIcon className={styles.icon} />
                  Save
                </Menubar.SubTrigger>
                <Menubar.SubContent className={styles.submenuContent}>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={onSaveJSON}
                  >
                    <FileJsonIcon className={styles.icon} />
                    JSON
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={onSaveHTML}
                  >
                    <GlobeIcon className={styles.icon} />
                    HTML
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => window.print()}
                  >
                    <BsFilePdf className={styles.icon} />
                    PDF
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={onSaveText}
                  >
                    <FileTextIcon className={styles.icon} />
                    Text
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Sub>
              <Menubar.Item className={styles.menuOption}>
                <FilePlusIcon className={styles.icon} />
                New Document
              </Menubar.Item>
              <div className={styles.separator} />
              <Menubar.Item className={styles.menuOption}>
                <FilePenIcon className={styles.icon} />
                Rename
              </Menubar.Item>
              <Menubar.Item className={styles.menuOption}>
                <TrashIcon className={styles.icon} />
                Remove
              </Menubar.Item>
              <div className={styles.separator} />
              <Menubar.Item
                className={styles.menuOption}
                onClick={() => window.print()}
              >
                <PrinterIcon className={styles.icon} />
                Print
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger className={styles.menuButton}>Edit</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content align="start" className={styles.content}>
              <Menubar.Item
                className={styles.menuOption}
                onClick={() => editor?.chain().focus().undo().run()}
              >
                <Undo2Icon className={styles.icon} />
                Undo
              </Menubar.Item>
              <Menubar.Item
                className={styles.menuOption}
                onClick={() => editor?.chain().focus().redo().run()}
              >
                <Redo2Icon className={styles.icon} />
                Redo
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger className={styles.menuButton}>
            Insert
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content align="start" className={styles.content}>
              <Menubar.Sub>
                <Menubar.SubTrigger className={styles.menuOption}>
                  <FileIcon className={styles.icon} />
                  Table
                </Menubar.SubTrigger>
                <Menubar.SubContent className={styles.submenuContent}>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => insertTable({ rows: 1, cols: 1 })}
                  >
                    1 x 1
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => insertTable({ rows: 2, cols: 2 })}
                  >
                    2 x 2
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => insertTable({ rows: 2, cols: 2 })}
                  >
                    3 x 3
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Sub>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger className={styles.menuButton}>
            Format
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content align="start" className={styles.content}>
              <Menubar.Sub>
                <Menubar.SubTrigger className={styles.menuOption}>
                  <TextIcon className={styles.icon} />
                  Text
                </Menubar.SubTrigger>
                <Menubar.SubContent className={styles.submenuContent}>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => editor?.chain().toggleBold().run()}
                  >
                    <BoldIcon className={styles.icon} />
                    Bold
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => editor?.chain().toggleItalic().run()}
                  >
                    <ItalicIcon className={styles.icon} />
                    Italic
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => editor?.chain().toggleUnderline().run()}
                  >
                    <UnderlineIcon className={styles.icon} />
                    Underline
                  </Menubar.Item>
                  <Menubar.Item
                    className={styles.menuOption}
                    onClick={() => editor?.chain().toggleStrike().run()}
                  >
                    <StrikethroughIcon className={styles.icon} />
                    Strikethrough
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Sub>
              <Menubar.Item
                className={styles.menuOption}
                onClick={() => editor?.chain().unsetAllMarks().run()}
              >
                <RemoveFormattingIcon className={styles.icon} />
                Clear Formatting
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  )
}

export default DocumentMenuBar
