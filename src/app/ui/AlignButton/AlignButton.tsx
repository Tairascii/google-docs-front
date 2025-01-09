'use client'

import { Root, Trigger, Content } from '@radix-ui/react-dropdown-menu'
import styles from './AlignButton.module.scss'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from 'lucide-react'
import clsx from 'clsx'

interface AlignButtonProps {
  currentAlignment?: string
  onAlignmentChange: (val: string) => void
}

const AlignButton = ({
  onAlignmentChange,
  currentAlignment = 'left',
}: AlignButtonProps) => {
  const alignments = [
    {
      id: 'right',
      icon: <AlignRightIcon className={styles.icon} />,
    },
    {
      id: 'left',
      icon: <AlignLeftIcon className={styles.icon} />,
    },
    {
      id: 'center',
      icon: <AlignCenterIcon className={styles.icon} />,
    },
    {
      id: 'justify',
      icon: <AlignJustifyIcon className={styles.icon} />,
    },
  ]

  return (
    <Root>
      <Trigger className={styles.button}>
        {alignments.find((item) => item.id === currentAlignment)?.icon}
      </Trigger>
      <Content className={styles.content} align="start">
        {alignments.map((item) => (
          <button
            key={item.id}
            className={clsx(styles.optionButton, {
              [styles.active]: item.id === currentAlignment,
            })}
            onClick={() => onAlignmentChange(item.id)}
          >
            {item.icon}
          </button>
        ))}
      </Content>
    </Root>
  )
}

export default AlignButton
