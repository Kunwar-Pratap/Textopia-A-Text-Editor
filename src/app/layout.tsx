import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProv from '@/components/ThemeProv'
import Head from "next/head"

import { Inter } from 'next/font/google'
import { AlertProvider } from '../../context/AlertContext'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Textopia',
  description: 'A Text Editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/apple-touch-icon.png' />
      </head>
      <body className={inter.className}>
        <ThemeProv>
          <AlertProvider>
            <Navbar />
            {children}
            <Footer />
          </AlertProvider>
        </ThemeProv>
      </body>
    </html>
  )
}
