// временный код, нужно создать layout
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import '@/app/styles/index.scss'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="main">
      <div className={inter.className}>
        <Header />
        <div className="flex-container">
          <Sidebar />
          <div className="content-wrapper">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </main>
  )
}
