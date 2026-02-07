import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Car } from '../data/cars'

const FeaturedCars = ({ query, maxPrice }: { query: string, maxPrice: number }) => {
    const navigate = useNavigate()
    const [cars, setCars] = useState<Car[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const { data, error } = await supabase
                    .from('vehicles')
                    .select('*')
                    .eq('availability', 'Available')
                    .order('created_at', { ascending: false })
                    .limit(6);

                if (error) throw error;
                setCars((data as Car[]) || []);
            } catch (error) {
                console.error('Error fetching featured cars:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

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
                        className="car-card"
                        onClick={() => navigate(`/vehicles/${car.id}`)}
                    >
                        <div className="car-img-wrapper">
                            <img src={car.img} alt={car.name} className="car-img" />
                        </div>
                        <div className="car-info">
                            <div className="car-meta-top">
                                <h3 className="car-name">{car.name}</h3>
                                <p className="car-price">{car.price}</p>
                            </div>
                            <p className="car-specs-minimal">{car.specs}</p>

                            <div className="car-card-action">
                                <span className="action-link">
                                    View Details
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                                        <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredCars.length === 0 && (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            {query ? `No cars found matching "${query}". Try a different model.` : 'No vehicles in inventory yet.'}
                        </p>
                        {!query && (
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                Inventory will be added soon via the admin panel.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturedCars
