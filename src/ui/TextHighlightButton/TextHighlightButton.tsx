'use client'

import { type ColorResult, CirclePicker } from 'react-color'
import { Root, Trigger, Content } from '@radix-ui/react-dropdown-menu'
import { COLOR_WHITE } from '@/constants/TextColorButton'
import { HighlighterIcon } from 'lucide-react'
import styles from './TextHighlightButton.module.scss'

interface TextHighlightButtonProps {
  onHighlightChange: (color: ColorResult) => void
  currentHighlight?: string
}

const TextHighlightButton = ({
  onHighlightChange,
  currentHighlight = COLOR_WHITE,
}: TextHighlightButtonProps) => {
  return (
    <Root>
      <Trigger className={styles.button}>
        <HighlighterIcon className={styles.buttonIcon} />
      </Trigger>
      <Content className={styles.content} align="start">
        <CirclePicker color={currentHighlight} onChange={onHighlightChange} />
      </Content>
    </Root>
  )
}

export default TextHighlightButton
