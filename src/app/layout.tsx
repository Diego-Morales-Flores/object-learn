import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextAuth Tutorial',
  description: 'Learn NextAuth.js by Dave Gray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <AuthProvider>
          <Navbar />
          <main className="flex justify-center items-start p-6 bg-slate-500 flex-1">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}