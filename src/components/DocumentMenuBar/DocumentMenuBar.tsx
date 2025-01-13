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

const DocumentMenuBar = () => {
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
                  <Menubar.Item className={styles.menuOption}>
                    <FileJsonIcon className={styles.icon} />
                    JSON
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
                    <GlobeIcon className={styles.icon} />
                    HTML
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
                    <BsFilePdf className={styles.icon} />
                    PDF
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
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
              <Menubar.Item className={styles.menuOption}>
                <Undo2Icon className={styles.icon} />
                Undo
              </Menubar.Item>
              <Menubar.Item className={styles.menuOption}>
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
                  <Menubar.Item className={styles.menuOption}>
                    1 x 1
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
                    2 x 2
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
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
                  <Menubar.Item className={styles.menuOption}>
                    <BoldIcon className={styles.icon} />
                    Bold
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
                    <ItalicIcon className={styles.icon} />
                    Italic
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
                    <UnderlineIcon className={styles.icon} />
                    Underline
                  </Menubar.Item>
                  <Menubar.Item className={styles.menuOption}>
                    <StrikethroughIcon className={styles.icon} />
                    Strikethrough
                  </Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Sub>
              <Menubar.Item className={styles.menuOption}>
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
