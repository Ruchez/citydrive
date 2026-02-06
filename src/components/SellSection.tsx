const SellSection = () => {
    return (
        <section id="sell" className="sell-section">
            <div className="container sell-grid-asymmetric">
                <div className="sell-narrative">
                    <h4 className="footer-clinical-label">The Exchange</h4>
                    <h2 className="sell-title-museum">
                        Curated Liquidity <br />
                        <span className="title-weight-800">For The Discerning.</span>
                    </h2>
                    <p className="sell-mission-clinical">
                        We transform the traditional sales process into a boutique appraisal experience.
                        Targeting Kenya's elite automotive collectors with surgical precision.
                    </p>

                    <div className="sell-process-cinematic">
                        {[
                            { step: '01', title: 'Architectural Appraisal', desc: 'A multi-point clinical evaluation of your vehicle’s pedigree.' },
                            { step: '02', title: 'Visual Curation', desc: 'Professional editorial photography in our Regen studio.' },
                            { step: '03', title: 'Private Placement', desc: 'Strategic exposure to our exclusive network of certified buyers.' }
                        ].map((s) => (
                            <div className="step-item-pure" key={s.step}>
                                <div className="step-count-clinical">{s.step}</div>
                                <div className="step-content">
                                    <h4 className="step-title-bold">{s.title}</h4>
                                    <p className="step-desc-light">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sell-form-vault">
                    <form className="museum-form">
                        <h3 className="form-header-clinical">Appraisal Submission</h3>

                        <div className="clinical-input-group">
                            <label>Vehicle Model</label>
                            <input type="text" placeholder="e.g. Land Cruiser 300" required />
                        </div>

                        <div className="clinical-input-group">
                            <label>Production Year</label>
                            <input type="number" placeholder="2024" required />
                        </div>

                        <div className="clinical-input-group">
                            <label>Valuation Bench (KES)</label>
                            <input type="text" placeholder="Expected Value" required />
                        </div>

                        <div className="clinical-input-group">
                            <label>Architectural Notes</label>
                            <textarea rows={2} placeholder="History, modifications, condition..."></textarea>
                        </div>

                        <button type="button" className="btn-appraisal-clinical">
                            Initiate Appraisal
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SellSection
