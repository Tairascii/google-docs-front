import { Editor } from '@/app/components/Editor'
import styles from './page.module.scss'
import { Toolbar } from '@/app/components/Toolbar'

interface DocumentDetailProps {
  params: Promise<{ id: string }>
}

const DocumentDetail = async ({ params }: DocumentDetailProps) => {
  return (
    <div className={styles.container}>
      <Toolbar />
      <Editor />
    </div>
  )
}

export default DocumentDetail
