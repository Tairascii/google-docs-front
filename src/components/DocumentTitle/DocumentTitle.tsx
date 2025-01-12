import { BsCloudCheck } from 'react-icons/bs'
import styles from './DocumentTitle.module.scss'

const DocumentTitle = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Untitled document</span>
      <BsCloudCheck />
    </div>
  )
}

export default DocumentTitle
