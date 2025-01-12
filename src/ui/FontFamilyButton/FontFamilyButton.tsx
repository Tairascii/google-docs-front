'use client'

import { Root, Trigger, Content } from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'
import clsx from 'clsx'
import styles from './FontFamilyButton.module.scss'

interface FontFamilyButtonProps {
  currentFont?: string
  onFontChange: (value: string) => void
}

const FontFamilyButton = ({
  currentFont,
  onFontChange,
}: FontFamilyButtonProps) => {
  const fonts = [
    {
      label: 'Arial',
      value: 'Arial',
    },
    {
      label: 'Calibri',
      value: 'Calibri',
    },
    {
      label: 'Times new roman',
      value: 'Times new roman',
    },
  ]

  return (
    <Root>
      <Trigger className={styles.button}>
        <span className={styles.buttonText}>{currentFont ?? 'Arial'}</span>
        <ChevronDownIcon className={styles.chevron} />
      </Trigger>
      <Content className={styles.content} align="start">
        {fonts.map(({ label, value }) => (
          <button
            key={value}
            className={clsx(styles.optionButton, {
              [styles.selectedOption]: currentFont === value,
            })}
            style={{ fontFamily: value }}
            onClick={() => onFontChange(value)}
          >
            <span className={styles.optionTitle}>{label}</span>
          </button>
        ))}
      </Content>
    </Root>
  )
}

export default FontFamilyButton
