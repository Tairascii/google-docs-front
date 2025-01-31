'use client'

import { Root, Trigger, Content, Portal } from '@radix-ui/react-dropdown-menu'
import { MoreVertical } from 'lucide-react'
import { Fragment } from 'react'
import styles from './MoreDropdown.module.scss'

interface MoreDropdownProps {
  rows: React.ReactNode[]
}

const MoreDropdown = ({ rows }: MoreDropdownProps) => {
  return (
    <Root>
      <Trigger className={styles.button}>
        <MoreVertical className={styles.icon} color='#5f6367'/>
      </Trigger>
      <Portal>
        <Content className={styles.content}>
          {rows.map((row, index) => (
            <Fragment key={index}>{row}</Fragment>
          ))}
        </Content>
      </Portal>
    </Root>
  )
}

export default MoreDropdown
