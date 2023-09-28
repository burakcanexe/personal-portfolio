import { Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Burak Can Yıldırım - Full Stack Yazılım Mühendisi',
  description: 'Merhaba, ben Burak Can Yıldırım, 22 yaşındayım, 5 yıldır hobi 3 yıldır ise profesyonel olarak yazılım ile ilgileniyorum.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
