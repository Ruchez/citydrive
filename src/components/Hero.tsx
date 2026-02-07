import { useState, useRef } from 'react'
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
                <img src={heroImg} alt="CityDrive Selection" className="gallery-subject" />
                <div className="gallery-light-wash"></div>
            </div>

            <div className="container gallery-content">
                <div className="gallery-branding">
                    <h1 className="gallery-title">
                        Selected <br />
                        with Purpose.
                    </h1>
                    <p className="gallery-description">
                        Kenya's boutique destination for certified premium vehicles. curated for the discerning driver.
                    </p>
                </div>

                <div className="gallery-tools">
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
                </div>

            </div>
        </header>
    )
}

export default Hero
