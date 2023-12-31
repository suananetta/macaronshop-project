import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

const montserrat = Montserrat({ 
  weight: ['400', '600'],
  subsets: ['latin'] 
})

const proximanova = localFont({ src: '../fonts/proximanova_regular.ttf' })

export const metadata: Metadata = {
  title: 'Macaronshop',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={proximanova.className}>{children}</body>
    </html>
  )
}
