import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import { UrlEnum } from '@/enums/UrlEnum'

const AuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <Image
            src="https://storage.googleapis.com/assets_workspace/uploads/7uffzv9dk4sn-7kAnuMn2JYM8SouH9sUO1Y-5decaa2561233114d97a43fceaa78f4f-Docs_Full_Logo.svg"
            alt="logo"
            width={178}
            height={36}
          />
          <h1 className={styles.title}>Online documents for collaboration</h1>
          <p className={styles.subtitle}>
            Easily create content and collaborate with your team using
            AI-powered documents.
          </p>
          <Link href={UrlEnum.SIGN_IN}>
            <button className={styles.button}>Login</button>
          </Link>
        </div>
        <Image
          alt="cover"
          width={490}
          quality={100}
          height={435}
          src="https://lh3.googleusercontent.com/c13hA3Flb8lxZ_GCFUh1o3XwsYzDM86W0fHI6sCtFK2ARog2e8Pj4XmxnJyPFga2T5SAaFwtxc9pkNWZ71MqDqOPKwE00QqJXOQ=e365-pa-nu-rw-w720"
        />
      </div>
    </div>
  )
}

export default AuthPage
