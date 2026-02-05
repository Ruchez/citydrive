import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="CityDrive Logo" style={{ height: '60px', marginBottom: '1rem' }} />
                            <div className="logo-text">
                                <span className="accent-text">CITY</span>DRIVE
                            </div>
                        </div>
                        <p className="footer-desc">
                            Kenya's leading dealership for certified high-end pre-owned vehicles. Quality you can drive with confidence.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-title">Our Hub</h4>
                        <div className="map-frame-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8758000974167!2d36.6790692!3d-1.2454174999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1fba2f58677f%3A0x7ed07137c2276cdb!2sCityDrive%20Auto!5e0!3m2!1sen!2s!4v1770328912272!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/xx8Uv7xjtmjJVhut7"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600' }}
                        >
                            Get Directions →
                        </a>
                        <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            📍 CityDrive Auto, Regen, Rungiri, Kenya <br />
                            Open: Mon - Sat (8AM - 6PM)
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#buy">Buy A Car</a></li>
                            <li><a href="#sell">Sell Your Car</a></li>
                            <li><a href="#about">Our Story</a></li>
                            <li><a href="#contact">Contact Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Connect</h4>
                        <a href="tel:+254726600141" className="footer-contact-link">+254 726 600 141</a>
                        <a href="mailto:sales@citydrive.co.ke" className="footer-contact-link">sales@citydrive.co.ke</a>

                        <div className="social-links-premium">
                            <a href="#" className="social-icon-btn glass" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className="social-icon-btn glass" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </a>
                            <a href="#" className="social-icon-btn glass" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 CityDrive Auto Sales Kenya. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
