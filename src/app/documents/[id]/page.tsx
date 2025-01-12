import { Editor } from '@/components/Editor'
import styles from './page.module.scss'
import { Toolbar } from '@/components/Toolbar'
import { DocumentNavbar } from '@/components/DocumentNavbar'

interface DocumentDetailProps {
  params: Promise<{ id: string }>
}

const DocumentDetail = async ({ params }: DocumentDetailProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <DocumentNavbar />
        <Toolbar />
      </div>
      <Editor />
    </div>
  )
}

export default DocumentDetail
