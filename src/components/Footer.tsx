const Footer = () => {
    return (
        <footer id="contact" className="footer-architectural">
            <div className="container">
                <div className="footer-grid-asymmetric">
                    <div className="footer-weight-narrative">
                        <div className="footer-logo-minimal">
                            <span className="logo-city">CITY</span>
                            <span className="logo-drive">DRIVE</span>
                        </div>
                        <p className="footer-mission-statement">
                            Curating excellence in Kenya's automotive landscape. <br />
                            A boutique approach to high-end certified pre-owned mobility.
                        </p>
                        <div className="footer-social-minimal">
                            <a href="https://wa.me/254726600141" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>

                    <div className="footer-weight-hub">
                        <h4 className="footer-clinical-label">The Hub Regen</h4>
                        <div className="footer-map-integrated">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8758000974167!2d36.6790692!3d-1.2454174999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1fba2f58677f%3A0x7ed07137c2276cdb!2sCityDrive%20Auto!5e0!3m2!1sen!2s!4v1770328912272!5m2!1sen!2s!4v1770328912272!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="footer-hub-details">
                            <p>Rungiri, Kenya</p>
                            <p className="hub-hours">Mon - Sat (8AM - 6PM)</p>
                        </div>
                    </div>

                    <div className="footer-weight-utility">
                        <div className="utility-block">
                            <h4 className="footer-clinical-label">Strategic Links</h4>
                            <ul className="footer-utility-links">
                                <li><a href="#buy">Inventory</a></li>
                                <li><a href="/sell">Sell</a></li>
                                <li><a href="#about">Company</a></li>
                            </ul>
                        </div>
                        <div className="utility-block">
                            <h4 className="footer-clinical-label">Direct Lines</h4>
                            <p className="utility-contact">+254 726 600 141</p>
                            <p className="utility-contact">sales@citydrive.co.ke</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-pure">
                    <p>© 2026 CITYDRIVE AUTO SALES KENYA</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
