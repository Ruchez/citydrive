const SellSection = () => {
    return (
        <section id="sell" className="sell-section">
            <div className="container sell-grid">
                <div className="sell-info">
                    <h2 className="section-title">
                        Sell Your Car <br />
                        <span className="accent-text">The Boutique Way</span>
                    </h2>
                    <p className="hero-subtitle">
                        Experience a curated selling process. We don't just list cars; we market a lifestyle to Kenya's most discerning buyers.
                    </p>

                    <div className="selling-steps">
                        {[
                            { step: '01', title: 'Valuation', desc: 'Expert appraisal of your vehicle.' },
                            { step: '02', title: 'Curation', desc: 'Professional photography & detailing.' },
                            { step: '03', title: 'Closing', desc: 'Secure payment & paperwork.' }
                        ].map((s) => (
                            <div className="step-card glass" key={s.step}>
                                <span className="step-num">{s.step}</span>
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)' }}>{s.title}</h4>
                                    <p style={{ fontSize: '0.85rem' }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sell-form-container">
                    <form className="sell-form glass">
                        <h3 className="form-header">List Your Vehicle</h3>

                        <div className="premium-form-group">
                            <input type="text" id="model" required placeholder=" " />
                            <label htmlFor="model">Car Model (e.g. BMW X5)</label>
                            <div className="form-line"></div>
                        </div>

                        <div className="premium-form-group">
                            <input type="number" id="year" required placeholder=" " />
                            <label htmlFor="year">Year of Manufacture</label>
                            <div className="form-line"></div>
                        </div>

                        <div className="premium-form-group">
                            <input type="text" id="price" required placeholder=" " />
                            <label htmlFor="price">Expected Price (KES)</label>
                            <div className="form-line"></div>
                        </div>

                        <div className="premium-form-group">
                            <textarea id="details" rows={2} required placeholder=" "></textarea>
                            <label htmlFor="details">Additional Highlights</label>
                            <div className="form-line"></div>
                        </div>

                        <button type="button" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Start My Appraisal
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SellSection
