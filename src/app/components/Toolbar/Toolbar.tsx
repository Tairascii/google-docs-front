'use client'

import { Section } from './types'
import { Undo2Icon } from 'lucide-react'
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
  ]
  return (
    <div className={styles.container}>
      {baseTools.map((item) => (
        <ToolbarButton key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Toolbar
