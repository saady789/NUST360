"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './_redux/store'

// export const metadata: Metadata = {
//   title: 'Nust360',
//   description: 'Elevating Education, Empowering Administration',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
      <body className={inter.className}>
      <ToastContainer />
        {children}
      </body>
    </html>
    </Provider>
    
  )
}
