'use client'

import { ChevronDownIcon } from 'lucide-react'
import clsx from 'clsx'
import { Root, Trigger, Content } from '@radix-ui/react-dropdown-menu'
import styles from './HeadingButton.module.scss'

interface HeadingButtonProps {
  currentHeading: string
  onHeadingChange: (value: number) => void
}

const HeadingButton = ({
  currentHeading,
  onHeadingChange,
}: HeadingButtonProps) => {
  const headings = [
    {
      label: 'Normal text',
      value: 0,
      fontSize: '16px',
    },
    {
      label: 'Heading 1',
      value: 1,
      fontSize: '1.4rem',
    },
    {
      label: 'Heading 2',
      value: 2,
      fontSize: '1.2rem',
    },
    {
      label: 'Heading 3',
      value: 3,
      fontSize: '1.1rem',
    },
    {
      label: 'Heading 4',
      value: 4,
      fontSize: '1rem',
    },
  ]
  return (
    <Root>
      <Trigger className={styles.button}>
        <span className={styles.buttonText}>{currentHeading ?? 'Arial'}</span>
        <ChevronDownIcon className={styles.chevron} />
      </Trigger>
      <Content className={styles.content} align="start">
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            className={clsx(styles.optionButton, {
              [styles.selectedOption]: currentHeading === label,
            })}
            onClick={() => onHeadingChange(value)}
          >
            <span className={styles.optionTitle} style={{ fontSize }}>
              {label}
            </span>
          </button>
        ))}
      </Content>
    </Root>
  )
}

export default HeadingButton
