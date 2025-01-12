import * as Menubar from '@radix-ui/react-menubar'
import styles from './DocumentMenuBar.module.scss'
import { FileIcon } from 'lucide-react'

//TODO style this properly
const DocumentMenuBar = () => {
  return (
    <div className={styles.container}>
      <Menubar.Root className={styles.menuRoot}>
        <Menubar.Menu>
          <Menubar.Trigger className={styles.menuButton}>File</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content align="start">
              <Menubar.Item>
                <FileIcon className={styles.icon} />
                Save
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  )
}

export default DocumentMenuBar
