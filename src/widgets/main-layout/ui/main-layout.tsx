import cls from './main-layout.module.scss'

import { useComparingPathSegment } from '@/shared/hooks/use-comparing-path-segment'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

interface LayoutProps {
  className?: string
  children?: React.ReactNode
}

export const MainLayout = (props: LayoutProps) => {
  const { children, className } = props

  const isAuth = useComparingPathSegment('/auth')

  return (
    <div className={className}>
      <Header />
      <main className={cls.flexContainer}>
        {!isAuth && <Sidebar />}
        {children}
      </main>
      {!isAuth && <Footer />}
    </div>
  )
}
