import { Link } from 'react-router-dom';

const SellCTA = () => {
    return (
        <section className="sell-cta-section">
            <div className="container">
                <div className="sell-cta-content">
                    <div className="sell-text">
                        <h2>Selling your car?</h2>
                        <p>Get a competitive offer in minutes. We verify, inspect, and buy premium vehicles directly.</p>
                    </div>
                    <Link to="/sell" className="btn-primary-inverse">
                        Get Valuation
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SellCTA;
