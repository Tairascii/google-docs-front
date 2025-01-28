import { HomeNavbar } from '@/components/HomeNavbar'
import { TemplateGallery } from '@/components/TemplateGallery'
import { DocumentsTable } from '@/components/DocumentsTable'
import styles from './page.module.scss'
import { getDocuments } from '@/api/documents'

const HomePage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <HomeNavbar />
      </div>
      <div className={styles.templateContainer}>
        <TemplateGallery />
        <DocumentsTable />
      </div>
    </div>
  )
}

export default HomePage
