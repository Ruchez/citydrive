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
        <header className="hero" ref={heroRef}>
            <img src={heroImg} alt="CityDrive Experience" className="hero-bg" />
            <div className="hero-overlay"></div>

            <div className="container hero-content-minimal">
                <div className="hero-text-center">
                    <h1 className="hero-title-premium">
                        Precision in Motion.
                    </h1>
                    <p className="hero-subtitle-clean">
                        Curated Excellence. Kenya's most refined collection of certified premium vehicles.
                    </p>

                    <div className="hero-minimal-search">
                        <form className="minimal-search-input" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Find your next masterpiece..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" className="minimal-search-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="hero-scroll-indicator" onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span className="scroll-label">EXPLORE INVENTORY</span>
                    <div className="scroll-line"></div>
                </div>
            </div>
        </header>
    )
}

export default Hero
