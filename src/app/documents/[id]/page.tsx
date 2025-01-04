import { Editor } from "./editor"
import styles from './page.module.scss'

interface DocumentDetailProps {
  params: Promise<{ id: string }>
}

const DocumentDetail = async ({ params }: DocumentDetailProps) => {
  return <div className={styles.container}><Editor /></div>
}

export default DocumentDetail
