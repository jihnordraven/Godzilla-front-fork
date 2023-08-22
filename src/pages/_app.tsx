// временный код, нужно создать layout
import type { AppProps } from 'next/app'

import '@/app/styles/index.scss'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="main">
      <Header />
      <div className="flex-container">
        <Sidebar />
        <div className="content-wrapper">
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  )
}
