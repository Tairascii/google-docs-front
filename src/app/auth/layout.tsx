import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login now',
}

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div>{children}</div>
}

export default AuthLayout
