'use client'

import { useEffect, useState } from 'react'
import { Root, Trigger, Content } from '@radix-ui/react-dropdown-menu'
import styles from './LinkButton.module.scss'
import { Link2Icon } from 'lucide-react'

interface LinkButtonProps {
  currentLink: string
  onLinkChange: (href: string) => void
}
const LinkButton = ({ onLinkChange, currentLink }: LinkButtonProps) => {
  const [value, setValue] = useState(currentLink)

  useEffect(() => {
    setValue(currentLink)
  }, [currentLink])

  // TODO styles this properly
  return (
    <Root>
      <Trigger className={styles.button}>
        <Link2Icon className={styles.buttonIcon} />
      </Trigger>
      <Content className={styles.content} align="start">
        <input
          type="text"
          placeholder="Search or paste link here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => onLinkChange(value)}>Apply</button>
      </Content>
    </Root>
  )
}

export default LinkButton
