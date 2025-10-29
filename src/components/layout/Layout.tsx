import { Outlet } from 'react-router-dom'
import StructuredData from './StructuredData'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export default function Layout() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}
