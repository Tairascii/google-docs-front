import { HomeNavbar } from '@/components/HomeNavbar'
import styles from './page.module.scss'
import { TemplateGallery } from '@/components/TemplateGallery'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <HomeNavbar />
      </div>
      <div className={styles.templateContainer}>
        <TemplateGallery />
      </div>
    </div>
  )
}

export default HomePage
