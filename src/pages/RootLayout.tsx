import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Toaster />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
                {/* Footer */}
        <Footer />
    </div>
  )
}

export default RootLayout