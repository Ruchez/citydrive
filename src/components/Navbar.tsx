import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

interface NavbarProps {
    theme: string
    onToggleTheme: () => void
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : 'at-top'}`}>
            <div className="container nav-content">
                <div className="logo-container">
                    <img src={logo} alt="CityDrive Auto Sales" className="nav-logo" />
                </div>

                <div className="nav-actions">
                    <button className="theme-toggle-nav" onClick={onToggleTheme} title="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#buy" onClick={() => setIsOpen(false)}>Buy Cars</a>
                    <a href="#sell" onClick={() => setIsOpen(false)}>Sell Your Car</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>Contact Us</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
