import cls from './main-layout.module.scss'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

interface LayoutProps {
  className?: string
  children?: React.ReactNode
}

export const MainLayout = (props: LayoutProps) => {
  const { children, className } = props

  return (
    <div className={className}>
      <Header />
      <main className={cls.flexContainer}>
        <Sidebar />
        {children}
      </main>
      <Footer />
    </div>
  )
}
