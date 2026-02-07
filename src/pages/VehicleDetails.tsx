import { useParams, Link } from 'react-router-dom'
import { cars } from '../data/cars'
import { useEffect, useState } from 'react'

const VehicleDetails = () => {
    const { id } = useParams()
    const car = cars.find(c => c.id === Number(id))
    const [activeImage, setActiveImage] = useState<string>('')

    useEffect(() => {
        if (car) {
            setActiveImage(car.img)
        }
    }, [car])

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!car) {
        return (
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Vehicle Not Found</h2>
                <Link to="/" className="btn-primary">Return to Collection</Link>
            </div>
        )
    }

    // Filter similar cars (same brand or random 3)
    const similarCars = cars
        .filter(c => c.id !== car.id && (c.name.split(' ')[0] === car.name.split(' ')[0] || Math.random() > 0.5))
        .slice(0, 3)

    return (
        <main className="vehicle-details-page">
            {/* Hero Section */}
            <section className="details-hero">
                <div className="details-hero-img-wrapper">
                    <img src={activeImage || car.img} alt={car.name} className="details-hero-img" />
                    <div className="details-overlay"></div>
                </div>

                <div className="container details-hero-content">
                    <div className="hero-header-group">
                        <Link to="/" className="back-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            Back to Collection
                        </Link>
                        <h1 className="details-title">{car.name}</h1>
                        <div className="price-action-row">
                            <p className="details-price">{car.price}</p>
                            <a href={`https://wa.me/254726600141?text=I'm interested in the ${car.name}`} target="_blank" rel="noopener noreferrer" className="btn-inquire-hero">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                Inquire
                            </a>
                        </div>
                    </div>
                </div>

                {/* Gallery Strip - Moved out of overlay */}
                {car.images && car.images.length > 1 && (
                    <div className="gallery-strip container">
                        <div
                            className={`gallery-thumb ${activeImage === car.img ? 'active' : ''}`}
                            onClick={() => setActiveImage(car.img)}
                        >
                            <img src={car.img} alt="Front" />
                        </div>
                        {car.images.map((img, index) => (
                            <div
                                key={index}
                                className={`gallery-thumb ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                            >
                                <img src={img} alt={`View ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Core Specs Grid - Clinical Layout */}
            <section className="details-section container">
                <div className="specs-grid-primary">
                    <div className="spec-card">
                        <span className="spec-label">Year</span>
                        <span className="spec-value">{car.year}</span>
                    </div>
                    <div className="spec-card">
                        <span className="spec-label">Mileage</span>
                        <span className="spec-value">{car.mileage}</span>
                    </div>
                    <div className="spec-card">
                        <span className="spec-label">Engine</span>
                        <span className="spec-value">{car.engineSize}</span>
                    </div>
                    <div className="spec-card">
                        <span className="spec-label">Fuel</span>
                        <span className="spec-value">{car.fuelType}</span>
                    </div>
                    <div className="spec-card">
                        <span className="spec-label">Transmission</span>
                        <span className="spec-value">{car.transmission}</span>
                    </div>
                    <div className="spec-card">
                        <span className="spec-label">Drive</span>
                        <span className="spec-value">{car.drive}</span>
                    </div>
                </div>
            </section>

            {/* Narrative & Deep Specs */}
            <section className="details-narrative container">
                <div className="narrative-grid">
                    <div className="narrative-content">
                        <h2 className="section-header">Vehicle Details</h2>
                        <div className="narrative-text">
                            <p>{car.description}</p>
                        </div>

                        <div className="deep-specs-list">
                            <div className="deep-spec-row">
                                <span className="deep-spec-label">Horsepower</span>
                                <span className="deep-spec-value">{car.horsePower}</span>
                            </div>
                            <div className="deep-spec-row">
                                <span className="deep-spec-label">Torque</span>
                                <span className="deep-spec-value">{car.torque}</span>
                            </div>
                            <div className="deep-spec-row">
                                <span className="deep-spec-label">Acceleration (0-100)</span>
                                <span className="deep-spec-value">{car.acceleration}</span>
                            </div>
                            <div className="deep-spec-row">
                                <span className="deep-spec-label">Aspiration</span>
                                <span className="deep-spec-value">{car.aspiration}</span>
                            </div>
                            <div className="deep-spec-row">
                                <span className="deep-spec-label">Condition Score</span>
                                <span className="deep-spec-value">{car.conditionScore}/10</span>
                            </div>
                            <div className="deep-spec-row">
                                <span className="deep-spec-label">Location</span>
                                <span className="deep-spec-value">{car.location}</span>
                            </div>
                        </div>

                        <div className="action-group">
                            <button className="btn-secondary" onClick={() => navigator.share({ title: car!.name, text: `Check out this ${car!.name}`, url: window.location.href })}>
                                Share Vehicle
                            </button>
                        </div>
                    </div>

                    <div className="seller-card">
                        <span className="seller-badge">{car.sellerType}</span>
                        <h3 className="seller-title">Listing Agent</h3>
                        <p className="seller-info">Verified by CityDrive</p>
                        <ul className="seller-checks">
                            <li>✓ Identity Verified</li>
                            <li>✓ Ownership Verified</li>
                            <li>✓ Mechanical Inspection</li>
                        </ul>
                    </div>
                </div>

                {/* Financing Section */}
                <div className="financing-section" style={{ marginTop: '4rem', padding: '2rem', background: 'var(--bg-surface)', borderRadius: '4px', border: '1px solid var(--border-muted)' }}>
                    <h3 className="section-header" style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Financing Partners</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>We work with leading banks to offer up to 90% financing. Repayment periods up to 60 months.</p>
                    <div className="bank-placeholders" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', opacity: 0.6 }}>
                        {['NCBA', 'I&M Bank', 'KCB', 'Stanbic'].map(bank => (
                            <div key={bank} style={{
                                height: '50px',
                                width: '120px',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--border-muted)',
                                fontWeight: 700,
                                color: 'var(--text-secondary)'
                            }}>
                                {bank}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Similar Vehicles */}
            <section className="similar-section container">
                <h2 className="section-header">Similar Vehicles</h2>
                <div className="car-grid">
                    {similarCars.map(similar => (
                        <Link to={`/vehicles/${similar.id}`} key={similar.id} className="car-card">
                            <div className="car-img-wrapper">
                                <img src={similar.img} alt={similar.name} className="car-img" />
                            </div>
                            <div className="car-info">
                                <div className="car-meta-top">
                                    <h3 className="car-name">{similar.name}</h3>
                                    <p className="car-price">{similar.price}</p>
                                </div>
                                <p className="car-specs-minimal">{similar.specs}</p>
                                <div className="car-card-action">
                                    <span className="action-link">View Details</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Floating Action Bar (Mobile Only via CSS) */}
        </main>
    )
}

export default VehicleDetails
