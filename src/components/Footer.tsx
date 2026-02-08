import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="footer-obsidian">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col-brand">
                        <div className="footer-logo">
                            <span className="logo-city">CITY</span>
                            <span className="logo-drive">DRIVE</span>
                        </div>
                        <p className="footer-mission">
                            Curating specific excellence in the Kenyan automotive landscape.
                            Certified, clean, and transparent.
                        </p>
                        <div className="footer-socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                            <a href="https://wa.me/254726600141" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div className="footer-col-links">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link to="/collection">Full Inventory</Link></li>
                            <li><Link to="/collection?type=SUV">SUVs</Link></li>
                            <li><Link to="/collection?type=Sedan">Sedans</Link></li>
                            <li><Link to="/sell">Sell Your Car</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="footer-col-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">Philosophy</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#financing">Financing</a></li>
                            <li><Link to="/admin/login">Admin Portal</Link></li>
                        </ul>
                    </div>

                    {/* Visit Column */}
                    <div className="footer-col-visit">
                        <h4>Visit The Hub</h4>
                        <div className="footer-map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8758000974167!2d36.6790692!3d-1.2454174999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1fba2f58677f%3A0x7ed07137c2276cdb!2sCityDrive%20Auto!5e0!3m2!1sen!2s!4v1770328912272!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) opacity(0.8)' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <p className="address-line">The Hub, Rungiri, Kenya</p>
                        <p className="address-line">+254 726 600 141</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} CITYDRIVE AUTO SALES. ALL RIGHTS RESERVED.</p>
                    <div className="footer-legal">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
