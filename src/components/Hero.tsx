import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

interface HeroProps {
    onSearch: (query: string) => void
}

const Hero = ({ onSearch }: HeroProps) => {
    const [inputValue, setInputValue] = useState('')
    const heroRef = useRef<HTMLElement>(null)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(inputValue)
        document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="hero-gallery hero-dark-mode-forced" ref={heroRef}>
            <div className="gallery-viewport">
                <img src={heroImg} alt="CityDrive Selection" className="gallery-subject animate-zoom" />
                <div className="gallery-light-wash"></div>
            </div>

            <div className="container gallery-content">
                <div className="gallery-branding">
                    <h1 className="gallery-title animate-fade-up delay-100">
                        Selected <br />
                        with Purpose.
                    </h1>
                </div>

                <div className="gallery-tools animate-fade-up delay-200">
                    <p className="gallery-description">
                        Kenya's destination for certified, clean vehicles. Hand-picked for the serious buyer.
                    </p>
                    <form className="gallery-search-group" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search Vehicle"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="gallery-search-trigger">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </form>
                    <Link to="/collection" className="collection-link hover-lift">
                        Explore Full Collection
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Hero
