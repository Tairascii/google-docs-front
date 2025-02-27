'use client'

import clsx from 'clsx'
import { setCookie } from 'typescript-cookie'
import { useState } from 'react'
import { SignInData } from '@/api/types'
import { signIn } from '@/api/auth'
import { useRouter } from 'next/navigation'
import { UrlEnum } from '@/enums/UrlEnum'
import styles from './page.module.scss'

const SignInPage = () => {
  const router = useRouter()
  const [form, setForm] = useState<SignInData>({
    email: '',
    password: '',
  })

  const onInputChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value })
  }

  const onSubmit = async () => {
    try {
      const tokens = await signIn(form)
      setCookie('accessToken', tokens.data.accessToken)
      setCookie('refreshToken', tokens.data.refreshToken)
      router.push(UrlEnum.HOME)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <svg
          xmlns="https://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 40 48"
        >
          <path
            fill="#4285F4"
            d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"
          ></path>
          <path
            fill="#34A853"
            d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"
          ></path>
          <path
            fill="#FABB05"
            d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"
          ></path>
          <path
            fill="#E94235"
            d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"
          ></path>
        </svg>
        <div className={styles.main}>
          <div className={styles.text}>
            <h1 className={styles.title}>Sign in</h1>
            <span className={styles.subtitle}>Go to Google Docs</span>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.inputWrapper}>
              <input
                placeholder="Email"
                className={styles.input}
                onChange={(e) => onInputChange('email', e.target.value)}
                value={form.email}
              />
              <input
                placeholder="Password"
                className={styles.input}
                type="password"
                onChange={(e) => onInputChange('password', e.target.value)}
                value={form.password}
              />
            </div>
            <div className={styles.buttons}>
              <button className={clsx(styles.buttonBase, styles.createButton)}>
                Create account
              </button>
              <button
                className={clsx(styles.buttonBase, styles.nextButton)}
                onClick={onSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
