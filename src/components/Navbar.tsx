import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

interface NavbarProps {
    theme: string
    onToggleTheme: () => void
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Show if at top or scrolling up
            if (currentScrollY < 10) {
                setIsVisible(true)
                setIsScrolled(false)
            } else {
                setIsScrolled(true)
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false) // Scrolling down & past threshold
                } else {
                    setIsVisible(true) // Scrolling up
                }
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Smooth scroll for anchors on home page
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (location.pathname === '/') {
            e.preventDefault()
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
            setIsOpen(false)
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="nav-content">
                <Link to="/" className="logo-container" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="CityDrive Auto" className="nav-logo" />
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/#buy" onClick={(e) => handleAnchorClick(e, 'buy')}>Inventory</a>
                    <Link to="/sell" onClick={() => setIsOpen(false)}>Sell</Link>
                    <a href="/#about" onClick={(e) => handleAnchorClick(e, 'about')}>Company</a>
                    <Link to="/#contact" className="mobile-only-link" onClick={(e) => handleAnchorClick(e as any, 'contact')}>Connect</Link>
                    <div className="mobile-menu-footer">
                        <p className="menu-footer-label">Direct Concierge</p>
                        <a href="https://wa.me/254726600141" className="menu-whatsapp-link" target="_blank" rel="noopener noreferrer">
                            +254 726 600 141
                        </a>
                    </div>
                </div>

                <div className="nav-actions">
                    <button className="theme-toggle-nav" onClick={onToggleTheme} title="Toggle Theme">
                        {theme === 'dark' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        )}
                    </button>

                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>

                    <Link to="/#contact" className="btn-primary desktop-only" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }} onClick={(e) => handleAnchorClick(e as any, 'contact')}>
                        Connect
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
