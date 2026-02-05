import { useState, useEffect, useRef } from 'react'
import heroImg from '../assets/hero.png'

interface HeroProps {
    onSearch: (query: string) => void
    onPriceFilter: (price: number) => void
}

const Hero = ({ onSearch, onPriceFilter }: HeroProps) => {
    const [inputValue, setInputValue] = useState('')
    const [budget, setBudget] = useState('all')
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return
            const { left, top, width, height } = heroRef.current.getBoundingClientRect()
            const x = (e.clientX - left - width / 2) / 25
            const y = (e.clientY - top - height / 2) / 25
            setMousePos({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(inputValue)
        document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="hero" ref={heroRef}>
            <div className="hero-overlay"></div>
            <img src={heroImg} alt="Premium SUV in Nairobi" className="hero-bg" />

            <div
                className="container hero-content"
                style={{
                    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <h1 className="hero-title">
                    Drive the <br />
                    <span className="accent-text">Future of Luxury</span>
                </h1>
                <p className="hero-subtitle">
                    Kenya's most exclusive collection of certified high-end vehicles. Elevate your presence on every road.
                </p>

                <div className="filter-group-hero">
                    <form className="search-bar glass" onSubmit={handleSearch}>
                        <div className="search-input-group">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by model or brand..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="search-btn btn-primary">
                            Search
                        </button>
                    </form>

                    <div className="premium-budget-selector">
                        <span className="selection-label">CHOOSE YOUR INVESTMENT RANGE</span>
                        <div className="budget-chips">
                            {[
                                { label: 'Any', value: 'all' },
                                { label: '< 500k', value: '500000' },
                                { label: '< 1M', value: '1000000' },
                                { label: '< 5M', value: '5000000' },
                                { label: '< 10M', value: '10000000' },
                                { label: '10M+', value: '99999999' }
                            ].map((chip) => (
                                <button
                                    key={chip.value}
                                    className={`budget-chip glass ${budget === chip.value ? 'active' : ''}`}
                                    onClick={() => {
                                        const price = chip.value === 'all' ? Infinity : parseInt(chip.value);
                                        setBudget(chip.value);
                                        onPriceFilter(price);
                                        document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {chip.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="hero-stats"
                    style={{
                        transform: `translate3d(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px, 0)`,
                        transition: 'transform 0.15s ease-out'
                    }}
                >
                    <div className="stat-item">
                        <span className="stat-value">500+</span>
                        <span className="stat-label">Units Sold</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Certified</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">24h</span>
                        <span className="stat-label">Concierge</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
