'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import styles from './ImageButton.module.scss'
import { ImageIcon, SearchIcon, UploadIcon } from 'lucide-react'

interface ImageButtonProps {
  onImageChange: (src: string) => void
}

const ImageButton = ({ onImageChange }: ImageButtonProps) => {
  const [imageUrl, setImageUrl] = useState('')
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false)

  const onUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const imageUrl = URL.createObjectURL(file)
        onImageChange(imageUrl)
      }
    }

    input.click()
  }

  const onImageUrlSubmit = () => {
    onImageChange(imageUrl)
    setIsUrlModalOpen(true)
  }

  const uploadOptions = [
    {
      id: 'url',
      label: 'Paste image URL',
      icon: <SearchIcon className={styles.optionIcon} />,
      onClick: () => setIsUrlModalOpen(true),
    },
    {
      id: 'local',
      label: 'Upload',
      icon: <UploadIcon className={styles.optionIcon} />,
      onClick: () => onUpload(),
    },
  ]
  // TODO add proper styles for modal
  return (
    <>
      <Dropdown.Root>
        <Dropdown.Trigger className={styles.button}>
          <ImageIcon className={styles.buttonIcon} />
        </Dropdown.Trigger>
        <Dropdown.Content className={styles.content} align="start">
          {uploadOptions.map((item) => (
            <button
              className={styles.optionButton}
              onClick={item.onClick}
              key={item.id}
            >
              {item.icon}
              <span className={styles.optionTitle}>{item.label}</span>
            </button>
          ))}
        </Dropdown.Content>
      </Dropdown.Root>
      <Dialog.Root open={isUrlModalOpen} onOpenChange={setIsUrlModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay}>
            <Dialog.Content>
              <Dialog.Title>Insert image URL</Dialog.Title>
              <input
                type="text"
                name=""
                placeholder="here"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <button onClick={onImageUrlSubmit}>Submit</button>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default ImageButton
