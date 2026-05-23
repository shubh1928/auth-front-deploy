import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'

function RootLayout() {
  return (
    <div>
        <Toaster />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout