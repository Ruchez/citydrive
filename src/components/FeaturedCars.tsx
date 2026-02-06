import { useState } from 'react'
import landCruiserImg from '../assets/land_cruiser.jpg'
import hondaFitImg from '../assets/honda_fit.jpg'

const FeaturedCars = ({ query, maxPrice }: { query: string, maxPrice: number }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const cars = [
        { id: 1, name: 'Toyota Land Cruiser V8', rawPrice: 12500000, price: 'KES 12,500,000', specs: 'Toyota • Diesel • Automatic • 2018', img: landCruiserImg },
        { id: 2, name: 'Range Rover Sport', rawPrice: 8900000, price: 'KES 8,900,000', specs: 'Land Rover • Petrol • Automatic • 2017', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800' },
        { id: 3, name: 'Mercedes-Benz GLE 350', rawPrice: 7200000, price: 'KES 7,200,000', specs: 'Mercedes • Diesel • Automatic • 2016', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800' },
        { id: 4, name: 'BMW X5 xDrive', rawPrice: 6800000, price: 'KES 6,800,000', specs: 'BMW • Petrol • Automatic • 2015', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800' },
        { id: 5, name: 'Subaru Forester XT', rawPrice: 3200000, price: 'KES 3,200,000', specs: 'Subaru • Petrol • AWD • 2017', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800' },
        { id: 6, name: 'Volkswagen Tiguan', rawPrice: 4500000, price: 'KES 4,500,000', specs: 'VW • Petrol • DSG • 2019', img: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800' },
        { id: 7, name: 'Toyota Vitz (Grade F)', rawPrice: 450000, price: 'KES 450,000', specs: 'Toyota • Petrol • Automatic • 2012', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' },
        { id: 10, name: 'Mazda Demio', rawPrice: 650000, price: 'KES 650,000', specs: 'Mazda • Petrol • Automatic • 2014', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800' },
        { id: 11, name: 'Honda Fit (Hybrid)', rawPrice: 950000, price: 'KES 950,000', specs: 'Honda • Hybrid • Automatic • 2016', img: hondaFitImg },
    ]

    const filteredCars = cars.filter(car => {
        const matchesQuery = car.name.toLowerCase().includes(query.toLowerCase()) ||
            car.specs.toLowerCase().includes(query.toLowerCase());
        const matchesPrice = car.rawPrice <= maxPrice;
        return matchesQuery && matchesPrice;
    })

    return (
        <section id="buy" className="featured-section container">
            <h2 className="collection-title-pure">
                The CAR <span className="title-accent">Collection</span>
            </h2>

            <div className="car-grid">
                {filteredCars.map(car => (
                    <div
                        key={car.id}
                        className={`car-card ${selectedId === car.id ? 'selected' : ''}`}
                        onClick={() => setSelectedId(car.id === selectedId ? null : car.id)}
                    >
                        <div className="car-img-wrapper">
                            <img src={car.img} alt={car.name} className="car-img" />
                            {selectedId === car.id && (
                                <div className="selection-badge">SELECTED</div>
                            )}
                        </div>
                        <div className="car-info">
                            <div className="car-meta-top">
                                <h3 className="car-name">{car.name}</h3>
                                <p className="car-price">{car.price}</p>
                            </div>
                            <p className="car-specs-minimal">{car.specs}</p>

                            <div className="car-card-action">
                                <span className="action-link">
                                    {selectedId === car.id ? 'Configure Your Drive' : 'View Details'}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                                        <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredCars.length === 0 && (
                    <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                        No cars found matching "{query}". Try a different model.
                    </p>
                )}
            </div>
        </section>
    )
}

export default FeaturedCars
