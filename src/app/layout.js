import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const dynamic = 'force-dynamic'
export const metadata = {
  title: '*MNTree | A Tree of My Life',
  description: 'A Tree of My Life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
