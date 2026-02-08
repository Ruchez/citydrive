import { useNavigate, Link } from 'react-router-dom'
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
                console.log('Fetching featured cars...');
                const { data, error } = await supabase
                    .from('vehicles')
                    .select('*')
                    .eq('availability', 'Available')
                    .order('created_at', { ascending: false })
                    .limit(6);

                if (error) {
                    console.error('Supabase error:', error);
                    throw error;
                }

                console.log('Fetched cars:', data);
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
        if (!car) return false;
        const matchesQuery = (car.name || '').toLowerCase().includes(query.toLowerCase()) ||
            (car.specs || '').toLowerCase().includes(query.toLowerCase());
        const matchesPrice = (car.rawPrice || 0) <= maxPrice;
        return matchesQuery && matchesPrice;
    })

    if (loading) {
        return (
            <section id="buy" className="featured-section container">
                <h2 className="collection-title-pure">
                    Featured <span className="title-accent">Inventory</span>
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
                    <div className="loader" style={{
                        width: '30px',
                        height: '30px',
                        border: '2px solid var(--border-muted)',
                        borderTopColor: 'var(--accent-gold)',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                </div>
            </section>
        );
    }

    return (
        <section id="buy" className="featured-section container">
            <div className="section-header">
                <h2 className="section-title">Featured Inventory</h2>
            </div>

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
            </div>

            {filteredCars.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--bg-surface)', borderRadius: '8px' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        {query ? `No cars found matching "${query}".` : 'Our featured collection is being updated.'}
                    </p>
                    <button onClick={() => navigate('/collection')} className="btn-secondary">
                        View Full Inventory
                    </button>
                </div>
            )}
            {/* View All Button */}
            {cars.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                    <Link to="/collection" className="collection-link">
                        View Full Inventory
                        <span style={{ fontSize: '1.2em', lineHeight: 1 }}>→</span>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default FeaturedCars
