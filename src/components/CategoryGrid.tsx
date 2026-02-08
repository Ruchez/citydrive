import { useNavigate } from 'react-router-dom';

const categories = [
    { label: 'SUVs', count: 'Premium Selection', icon: '🚙' },
    { label: 'Sedans', count: 'Executive Class', icon: '🚗' },
    { label: 'Off-Road', count: '4x4 Capable', icon: '🏔️' },
    { label: 'Luxury', count: 'First Class', icon: '✨' }
];

const CategoryGrid = () => {
    const navigate = useNavigate();

    return (
        <section className="category-section container">
            <div className="category-grid">
                {categories.map((cat) => (
                    <div
                        key={cat.label}
                        className="category-card"
                        onClick={() => navigate('/collection')}
                    >
                        <span className="category-icon">{cat.icon}</span>
                        <div className="category-content">
                            <h3>{cat.label}</h3>
                            <p>{cat.count}</p>
                        </div>
                        <div className="category-arrow">→</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
