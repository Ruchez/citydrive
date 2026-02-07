import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        total: 0,
        available: 0,
        sold: 0,
        reserved: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Parallel fetching for efficiency
                const [
                    { count: total },
                    { count: available },
                    { count: sold },
                    { count: reserved }
                ] = await Promise.all([
                    supabase.from('vehicles').select('*', { count: 'exact', head: true }),
                    supabase.from('vehicles').select('*', { count: 'exact', head: true }).eq('availability', 'Available'),
                    supabase.from('vehicles').select('*', { count: 'exact', head: true }).eq('availability', 'Sold'),
                    supabase.from('vehicles').select('*', { count: 'exact', head: true }).eq('availability', 'Reserved')
                ]);

                setStats({
                    total: total || 0,
                    available: available || 0,
                    sold: sold || 0,
                    reserved: reserved || 0
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <div className="admin-loading">Loading dashboard...</div>;
    }

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <Link to="/admin/vehicles/new" className="btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add Vehicle
                </Link>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon total">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Total Vehicles</p>
                        <h2 className="stat-value">{stats.total}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon available">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Available</p>
                        <h2 className="stat-value">{stats.available}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon reserved">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Reserved</p>
                        <h2 className="stat-value">{stats.reserved}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon sold">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Sold</p>
                        <h2 className="stat-value">{stats.sold}</h2>
                    </div>
                </div>
            </div>

            <div className="dashboard-actions">
                <Link to="/admin/vehicles" className="action-card">
                    <h3>Manage Vehicles</h3>
                    <p>View, edit, and delete vehicles from your inventory</p>
                </Link>
                <Link to="/admin/vehicles/new" className="action-card">
                    <h3>Add New Vehicle</h3>
                    <p>Upload a new vehicle with photos and details</p>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
