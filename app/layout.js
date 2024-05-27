import { Inter,Outfit } from 'next/font/google'
import './globals.css'
import SplashScreen from '@/components/SplashScreen'
import { Toaster } from "react-hot-toast"
import React from 'react'
import { Navbar } from '@/components'
import Last from '@/components/Last'


const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Infinity Tech Solution',
  description: 'Infinity Tech',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={outfit.className}>
        <Toaster position='top-right'/>
        {children}
        <Last />
        </body>
    </html>
  )
}
