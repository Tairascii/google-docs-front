import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home now',
}

interface HomeLayoutProps {
  children: React.ReactNode
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <div>{children}</div>
}

export default HomeLayout
