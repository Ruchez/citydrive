const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="about-content">
                    <h2 className="about-title">
                        Quality You Can <span className="accent-text">Trust.</span>
                    </h2>

                    <div className="about-narrative">
                        <p>
                            Buying a car in Kenya can be stressful. We all worry about fake mileage,
                            hidden mechanical issues, and the hassle of paperwork.
                        </p>
                        <p>
                            <strong>At CityDrive, we do things differently.</strong>
                        </p>
                        <p>
                            We sell clean, genuine cars. All our vehicles are inspected and verified
                            mechanically. No shortcuts, no stories. Just good cars ready for the road.
                        </p>
                        <p>
                            Whether you need a reliable daily driver for Nairobi traffic or a strong
                            4x4 for upcountry, we have you sorted.
                        </p>
                        <p className="about-signoff">
                            Karibu CityDrive.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    padding: 8rem 0;
                    background: var(--bg-deep);
                    position: relative;
                    overflow: hidden;
                }
                
                .about-title {
                    font-size: 3.5rem;
                    line-height: 1.1;
                    margin-bottom: 3rem;
                    font-family: var(--font-display);
                    letter-spacing: -0.03em;
                }
                
                .about-narrative {
                    font-size: 1.25rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .about-narrative strong {
                    color: var(--text-primary);
                    font-weight: 600;
                }
                
                .about-signoff {
                    margin-top: 2rem;
                    font-family: var(--font-display);
                    color: var(--text-primary);
                }
                
                .signoff-name {
                    font-size: 1.5rem;
                    color: var(--accent-primary);
                }
                
                .about-cta {
                    margin-top: 4rem;
                }
                
                .btn-text-only {
                    color: var(--text-primary);
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    border-bottom: 2px solid var(--accent-primary);
                    padding-bottom: 5px;
                    transition: all 0.3s ease;
                }
                
                .btn-text-only:hover {
                    color: var(--accent-primary);
                    padding-bottom: 8px;
                }

                @media (max-width: 768px) {
                    .about-title {
                        font-size: 2.5rem;
                    }
                    .about-narrative {
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutSection;
