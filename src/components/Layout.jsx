import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, bg = 'white' }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: bg }}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
