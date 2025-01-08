'use client'

import { type ColorResult, CirclePicker } from 'react-color'
import { Root, Trigger, Content } from '@radix-ui/react-dropdown-menu'
import { COLOR_BLACK } from '@/app/constants/TextColorButton'
import styles from './TextColorButton.module.scss'

interface TextColorButtonProps {
  onColorChange: (color: ColorResult) => void
  currentColor?: string
}

const TextColorButton = ({
  onColorChange,
  currentColor = COLOR_BLACK,
}: TextColorButtonProps) => {
  return (
    <Root>
      <Trigger className={styles.button}>
        <span className={styles.buttonIcon}>A</span>
        <div
          className={styles.buttonIconUnderline}
          style={{ backgroundColor: currentColor }}
        />
      </Trigger>
      <Content className={styles.content} align="start">
        <CirclePicker color={currentColor} onChange={onColorChange} />
      </Content>
    </Root>
  )
}

export default TextColorButton
