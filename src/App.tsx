import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCars from './components/FeaturedCars'
import SellSection from './components/SellSection'
import Footer from './components/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('citydrive-theme') || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('citydrive-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`app-container ${theme}-theme`}>
      <div className="site-watermark">CITYDRIVE</div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero onSearch={setSearchQuery} onPriceFilter={setMaxPrice} />
      <main>
        <div className="reveal">
          <FeaturedCars query={searchQuery} maxPrice={maxPrice} />
        </div>
        <div className="reveal">
          <SellSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
