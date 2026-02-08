const ValueProps = () => {
    return (
        <section className="value-props-section">
            <div className="container">
                <div className="value-header">
                    <h2>Why CityDrive?</h2>
                    <p>Redefining the car buying experience in Kenya.</p>
                </div>

                <div className="value-grid">
                    <div className="value-card">
                        <div className="value-icon">✓</div>
                        <h3>Verified Quality</h3>
                        <p>Every vehicle undergoes a rigorous 150-point mechanical and safety inspection.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🏦</div>
                        <h3>Bank Financing</h3>
                        <p>We partner with NCBA, I&M, and KCB to offer up to 90% financing options.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🛡️</div>
                        <h3>Secure Transaction</h3>
                        <p>We handle all paperwork, transfer, and verification for a seamless handover.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
