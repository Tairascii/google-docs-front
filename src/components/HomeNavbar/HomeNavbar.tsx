import Image from 'next/image'
import Link from 'next/link'
import { UrlEnum } from '@/enums/UrlEnum'
import styles from './HomeNavbar.module.scss'

const HomeNavbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href={UrlEnum.DOCUMENTS}>
          <Image
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt="logo"
            width={36}
            height={36}
          />
        </Link>
        <h3 className={styles.title}>Docs</h3>
      </div>
    </nav>
  )
}

export default HomeNavbar
