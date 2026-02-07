import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import type { Car } from '../../data/cars';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchVehicles = async () => {
        try {
            const { data, error } = await supabase
                .from('vehicles')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setVehicles((data as Car[]) || []);
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            toast.error('Failed to load vehicles');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this vehicle?')) return;

        try {
            const { error } = await supabase
                .from('vehicles')
                .delete()
                .eq('id', id);

            if (error) throw error;

            toast.success('Vehicle deleted successfully');
            fetchVehicles(); // Refresh list
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            toast.error('Failed to delete vehicle');
        }
    };

    if (loading) {
        return <div className="admin-loading">Loading vehicles...</div>;
    }

    return (
        <div className="vehicle-list-page">
            <div className="page-header">
                <h1>Vehicles</h1>
                <Link to="/admin/vehicles/new" className="btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add Vehicle
                </Link>
            </div>

            {vehicles.length === 0 ? (
                <div className="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <h2>No vehicles yet</h2>
                    <p>Start by adding your first vehicle to the inventory</p>
                    <Link to="/admin/vehicles/new" className="btn-primary">Add Your First Vehicle</Link>
                </div>
            ) : (
                <div className="vehicle-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Year</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicles.map(vehicle => (
                                <tr key={vehicle.id}>
                                    <td>
                                        <img src={vehicle.img} alt={vehicle.name} className="vehicle-thumb" />
                                    </td>
                                    <td className="vehicle-name">{vehicle.name}</td>
                                    <td>{vehicle.year}</td>
                                    <td className="vehicle-price">{vehicle.price}</td>
                                    <td>
                                        <span className={`status-badge ${vehicle.availability.toLowerCase()}`}>
                                            {vehicle.availability}
                                        </span>
                                    </td>
                                    <td className="actions">
                                        <Link to={`/admin/vehicles/${vehicle.id}/edit`} className="btn-icon" title="Edit">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                        </Link>
                                        <button onClick={() => handleDelete(vehicle.id)} className="btn-icon btn-danger" title="Delete">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default VehicleList;
