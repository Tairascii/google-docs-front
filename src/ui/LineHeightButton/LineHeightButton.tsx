import clsx from 'clsx'
import { Root, Trigger, Content } from '@radix-ui/react-dropdown-menu'
import styles from './LineHeightButton.module.scss'
import { ListCollapseIcon } from 'lucide-react'

interface LineHeightButtonProps {
  currentLineHeight?: string
  onLineHeightChange: (val: string) => void
}

const LineHeightButton = ({ currentLineHeight, onLineHeightChange }: LineHeightButtonProps) => {
  const options = [
    {
      label: 'Default',
      value: 'normal',
    },
    {
      label: 'Single',
      value: '1',
    },
    {
      label: '1.15',
      value: '1.15',
    },
    {
      label: '1.5',
      value: '1.5',
    },
    {
      label: 'Double',
      value: '2',
    },
  ]

  return (
    <Root>
      <Trigger className={styles.button}>
        <ListCollapseIcon className={styles.icon} />
      </Trigger>
      <Content className={styles.content} align="start">
        {options.map(({ label, value }) => (
          <button
            key={value}
            className={clsx(styles.optionButton, {
              [styles.selectedOption]: currentLineHeight === value,
            })}
            onClick={() => onLineHeightChange(value)}
          >
            <span className={styles.optionTitle}>
              {label}
            </span>
          </button>
        ))}
      </Content>
    </Root>
  )
}

export default LineHeightButton
