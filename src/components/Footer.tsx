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
                            <a href="https://wa.me/254726600141" className="social-icon-btn glass" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
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
