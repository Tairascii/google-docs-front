'use client'

import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'
import styles from './ToolbarButton.module.scss'

interface ToolbarButtonProps {
  onClick?: () => void
  icon: LucideIcon
  isActive?: boolean
}

export const ToolbarButton = ({
  isActive,
  onClick,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      className={clsx(styles.button, { [styles.active]: isActive })}
      onClick={onClick}
    >
      <Icon className={styles.buttonIcon} />
    </button>
  )
}

export default ToolbarButton
