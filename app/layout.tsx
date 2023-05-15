import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Greg Hunt – Dev',
  description: 'My place on the web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-dark text-slate-100">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
