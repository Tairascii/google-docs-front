import Image from 'next/image'
import Link from 'next/link'
import { UrlEnum } from '@/enums/UrlEnum'
import styles from './DocumentNavbar.module.scss'
import { DocumentTitle } from '../DocumentTitle'
import { DocumentMenuBar } from '../DocumentMenuBar'

const DocumentNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftPart}>
        <Link href={UrlEnum.HOME}>
          <Image
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt="logo"
            width={36}
            height={36}
          />
        </Link>
        <div className={styles.inputWrapper}>
          <DocumentTitle />
          <DocumentMenuBar />
        </div>
      </div>
    </nav>
  )
}

export default DocumentNavbar
