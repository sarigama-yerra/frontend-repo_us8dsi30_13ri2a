import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/About'
import CollectionsPage from './pages/Collections'
import ProductPage from './pages/Product'
import Contact from './components/Contact'

function App() {
  return (
    <Layout bg="#EDEAF7">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections/:name" element={<CollectionsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/contact" element={
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="mb-10">
                <div className="text-xs uppercase tracking-[0.3em] text-black/60">Support</div>
                <h2 className="mt-2 text-3xl md:text-5xl font-semibold text-black">Contact & Support</h2>
              </div>
              <Contact />
            </div>
          </div>
        } />
      </Routes>
    </Layout>
  )
}

export default App
