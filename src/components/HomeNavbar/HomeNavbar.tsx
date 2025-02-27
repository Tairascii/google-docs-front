'use client'

import Image from 'next/image'
import Link from 'next/link'
import { UrlEnum } from '@/enums/UrlEnum'
import styles from './HomeNavbar.module.scss'
import { HomeSearch } from '../HomeSearch'
import { useEffect, useState } from 'react'
import { getUser } from '@/api/user'
import { User } from '@/api/types'

const HomeNavbar = () => {
  const [profile, setProfile] = useState<User | null>(null)

  useEffect(() => {
    const getProfile = async () => {
      const data = await getUser()
      setProfile(data)
    }
    getProfile()
  }, [])

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href={UrlEnum.DOCUMENTS}>
          <Image
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
        <h3 className={styles.title}>Docs</h3>
      </div>
      <HomeSearch />
      <div className={styles.pfpWrapper}>
        {profile?.profilePicUrl ? (
          <Image width={32} height={32} src={profile.profilePicUrl} alt="pfp" />
        ) : (
          <span className={styles.placeholderImage}>{profile?.name[0]}</span>
        )}
      </div>
    </nav>
  )
}

export default HomeNavbar
