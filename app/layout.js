import { Inter,Outfit } from 'next/font/google'
import './globals.css'
import SplashScreen from '@/components/SplashScreen'
import { Toaster } from "react-hot-toast"


const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Infinity Tech solution',
  description: 'Infinity Tech',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className='bg-white'>
        <Toaster position='top-right'/>
        {children}
        </main>
        </body>
    </html>
  )
}
