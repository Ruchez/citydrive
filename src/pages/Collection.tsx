import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { Car } from '../data/cars'
import '../collection.css'

const Collection = () => {
    const [allCars, setAllCars] = useState<Car[]>([])

    // Fetch cars from Supabase
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const { data, error } = await supabase
                    .from('vehicles')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setAllCars((data as Car[]) || []);
            } catch (error) {
                console.error('Error fetching collection:', error);
            }
        };

        fetchCars();
    }, []);

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedBudget, setSelectedBudget] = useState<string>('')
    const [showAdvanced, setShowAdvanced] = useState(false)

    // Advanced filters
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [minYear, setMinYear] = useState('')
    const [maxYear, setMaxYear] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    // Pagination
    const [visibleCount, setVisibleCount] = useState(24)

    // Budget ranges
    const budgetRanges = [
        { label: '0 - 500K', min: 0, max: 500000 },
        { label: '500K - 1M', min: 500000, max: 1000000 },
        { label: '1M - 2M', min: 1000000, max: 2000000 },
        { label: '2M - 3M', min: 2000000, max: 3000000 },
        { label: '3M - 5M', min: 3000000, max: 5000000 },
        { label: '5M - 10M', min: 5000000, max: 10000000 },
        { label: 'Above 10M', min: 10000000, max: Infinity }
    ]

    // Extract unique brands and models
    const brands = Array.from(new Set(allCars.map(car => car.name.split(' ')[0]))).sort()
    const models = selectedBrand
        ? Array.from(new Set(allCars.filter(car => car.name.startsWith(selectedBrand)).map(car => car.name.split(' ').slice(1).join(' ')))).sort()
        : []

    // Filter logic
    const filteredCars = allCars.filter(car => {
        // Text search
        if (searchQuery && !car.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false
        }

        // Budget range
        if (selectedBudget) {
            const range = budgetRanges.find(r => r.label === selectedBudget)
            if (range && (car.rawPrice < range.min || car.rawPrice > range.max)) {
                return false
            }
        }

        // Brand filter
        if (selectedBrand && !car.name.startsWith(selectedBrand)) {
            return false
        }

        // Model filter
        if (selectedModel && !car.name.includes(selectedModel)) {
            return false
        }

        // Year filters
        if (minYear && car.year < parseInt(minYear)) {
            return false
        }
        if (maxYear && car.year > parseInt(maxYear)) {
            return false
        }

        // Price filters
        if (minPrice && car.rawPrice < parseInt(minPrice)) {
            return false
        }
        if (maxPrice && car.rawPrice > parseInt(maxPrice)) {
            return false
        }

        return true
    })

    const visibleCars = filteredCars.slice(0, visibleCount)

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 24)
    }

    const handleReset = () => {
        setSearchQuery('')
        setSelectedBudget('')
        setSelectedBrand('')
        setSelectedModel('')
        setMinYear('')
        setMaxYear('')
        setMinPrice('')
        setMaxPrice('')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="collection-page">
            {/* Header */}
            <section className="collection-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Home
                    </Link>
                    <h1 className="collection-title">Full Collection</h1>
                    <p className="collection-subtitle">Browse our complete inventory of {allCars.length} vehicles</p>
                </div>
            </section>

            {/* Search & Filters */}
            <section className="collection-filters container">
                {/* Simple Search */}
                <div className="search-section">
                    <label className="filter-label">Search Vehicle</label>
                    <p className="filter-hint">Simply write the vehicle name and press search (i.e demio or vitz)</p>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search vehicle name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="search-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </div>
                </div>

                {/* Budget Chips */}
                <div className="budget-section">
                    <label className="filter-label">Filter by Budget</label>
                    <div className="budget-chips">
                        {budgetRanges.map(range => (
                            <button
                                key={range.label}
                                className={`budget-chip ${selectedBudget === range.label ? 'active' : ''}`}
                                onClick={() => setSelectedBudget(selectedBudget === range.label ? '' : range.label)}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Advanced Search Toggle */}
                <button
                    className="advanced-toggle"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                >
                    {showAdvanced ? 'Hide' : 'Click here for'} Advanced Search
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showAdvanced ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>

                {/* Advanced Filters */}
                {showAdvanced && (
                    <div className="advanced-filters">
                        <div className="filter-grid">
                            {/* Brand & Model */}
                            <div className="filter-group">
                                <label className="filter-label">Brand & Model</label>
                                <select
                                    value={selectedBrand}
                                    onChange={(e) => {
                                        setSelectedBrand(e.target.value)
                                        setSelectedModel('') // Reset model when brand changes
                                    }}
                                    className="filter-select"
                                >
                                    <option value="">Vehicle Brand</option>
                                    {brands.map(brand => (
                                        <option key={brand} value={brand}>{brand}</option>
                                    ))}
                                </select>

                                <select
                                    value={selectedModel}
                                    onChange={(e) => setSelectedModel(e.target.value)}
                                    className="filter-select"
                                    disabled={!selectedBrand}
                                >
                                    <option value="">Brand Model</option>
                                    {models.map(model => (
                                        <option key={model} value={model}>{model}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Year of Manufacture */}
                            <div className="filter-group">
                                <label className="filter-label">Year of Manufacture</label>
                                <input
                                    type="number"
                                    placeholder="Min YOM"
                                    value={minYear}
                                    onChange={(e) => setMinYear(e.target.value)}
                                    className="filter-input"
                                    min="2000"
                                    max="2024"
                                />
                                <input
                                    type="number"
                                    placeholder="Max YOM"
                                    value={maxYear}
                                    onChange={(e) => setMaxYear(e.target.value)}
                                    className="filter-input"
                                    min="2000"
                                    max="2024"
                                />
                            </div>

                            {/* Price Range */}
                            <div className="filter-group">
                                <label className="filter-label">Price & Currency</label>
                                <input
                                    type="number"
                                    placeholder="Min Price (KES)"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="filter-input"
                                />
                                <input
                                    type="number"
                                    placeholder="Max Price (KES)"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="filter-input"
                                />
                            </div>
                        </div>

                        <button className="reset-btn" onClick={handleReset}>
                            Reset All Filters
                        </button>
                    </div>
                )}

                {/* Results Count */}
                <div className="results-count">
                    Showing {visibleCars.length} of {filteredCars.length} vehicles
                </div>
            </section>

            {/* Cars Grid */}
            <section className="collection-grid container">
                {visibleCars.map(car => (
                    <Link to={`/vehicle/${car.id}`} key={car.id} className="collection-card">
                        <div className="card-image">
                            <img src={car.img} alt={car.name} />
                            <span className={`availability-badge ${car.availability.toLowerCase()}`}>
                                {car.availability}
                            </span>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{car.name}</h3>
                            <p className="card-specs">{car.specs}</p>
                            <p className="card-price">{car.price}</p>
                        </div>
                    </Link>
                ))}
            </section>

            {/* Load More */}
            {visibleCount < filteredCars.length && (
                <div className="load-more-section container">
                    <button className="load-more-btn" onClick={handleLoadMore}>
                        Load More Vehicles
                    </button>
                    <p className="load-more-text">
                        {filteredCars.length - visibleCount} more vehicles available
                    </p>
                </div>
            )}

            {/* No Results */}
            {filteredCars.length === 0 && (
                <div className="no-results container">
                    <h2>No vehicles found</h2>
                    <p>Try adjusting your filters or search query</p>
                    <button className="reset-btn" onClick={handleReset}>
                        Reset All Filters
                    </button>
                </div>
            )}
        </main>
    )
}

export default Collection
