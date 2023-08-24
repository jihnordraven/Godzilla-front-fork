import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import { MainLayout } from '@/widgets/main-layout'

import '@/app/styles/index.scss'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout className={inter.className}>
      <Component {...pageProps} />
    </MainLayout>
  )
}
