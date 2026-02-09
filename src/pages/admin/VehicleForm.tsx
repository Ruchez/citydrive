import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

const VehicleForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id;

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        year: new Date().getFullYear(),
        rawPrice: 0,
        location: 'Nairobi, Kenya',
        availability: 'Available' as 'Available' | 'Sold' | 'Reserved',
        drive: '2WD',
        engineSize: '',
        fuelType: 'Petrol',
        horsePower: '',
        transmission: 'Automatic',
        torque: '',
        aspiration: 'Natural',
        acceleration: '',
        description: '',
        sellerType: 'Verified Dealer' as 'Private Seller' | 'Verified Dealer',
        conditionScore: 8.5
    });
    const [images, setImages] = useState<File[]>([]);
    const [existingImages, setExistingImages] = useState<string[]>([]);

    useEffect(() => {
        if (isEdit) {
            fetchVehicle();
        }
    }, [id]);

    const fetchVehicle = async () => {
        try {
            const { data, error } = await supabase
                .from('vehicles')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            if (data) {
                setFormData(data);
                setExistingImages(data.images || []);
            }
        } catch (error) {
            console.error('Error fetching vehicle:', error);
            toast.error('Failed to load vehicle');
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(Array.from(e.target.files));
        }
    };

    const uploadImages = async (): Promise<string[]> => {
        const uploadPromises = images.map(async (image) => {
            const fileExt = image.name.split('.').pop();
            const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('vehicles')
                .upload(filePath, image);

            if (uploadError) throw uploadError;

            const { data } = supabase.storage
                .from('vehicles')
                .getPublicUrl(filePath);

            return data.publicUrl;
        });

        return Promise.all(uploadPromises);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Upload new images if any
            let imageUrls = existingImages;
            if (images.length > 0) {
                const newUrls = await uploadImages();
                imageUrls = [...existingImages, ...newUrls];
            }

            const vehicleData = {
                ...formData,
                price: `KES ${formData.rawPrice.toLocaleString()}`,
                specs: `${formData.name.split(' ')[0]} • ${formData.fuelType} • ${formData.transmission} • ${formData.year}`,
                img: imageUrls[0] || '',
                images: imageUrls,
                updated_at: new Date().toISOString()
            };

            if (isEdit) {
                const { error } = await supabase
                    .from('vehicles')
                    .update(vehicleData)
                    .eq('id', id);
                if (error) throw error;
                toast.success('Vehicle updated successfully');
            } else {
                const { error } = await supabase
                    .from('vehicles')
                    .insert([{
                        ...vehicleData,
                        created_at: new Date().toISOString()
                    }]);
                if (error) throw error;
                toast.success('Vehicle added successfully');
            }

            navigate('/admin/vehicles');
        } catch (error) {
            console.error('Error saving vehicle:', error);
            toast.error('Failed to save vehicle');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="vehicle-form-page">
            <div className="page-header">
                <h1>{isEdit ? 'Edit Vehicle' : 'Add New Vehicle'}</h1>
            </div>

            <form onSubmit={handleSubmit} className="vehicle-form">
                {/* Basic Info */}
                <div className="form-section">
                    <h2>Basic Information</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Vehicle Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g., Toyota Land Cruiser V8"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Year</label>
                            <input
                                type="number"
                                value={formData.year}
                                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) || new Date().getFullYear() })}
                                min="2000"
                                max={new Date().getFullYear() + 1}
                            />
                        </div>

                        <div className="form-group">
                            <label>Price (KES) *</label>
                            <input
                                type="number"
                                value={formData.rawPrice}
                                onChange={(e) => setFormData({ ...formData, rawPrice: parseInt(e.target.value) })}
                                placeholder="e.g., 5000000"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>Availability</label>
                            <select
                                value={formData.availability}
                                onChange={(e) => setFormData({ ...formData, availability: e.target.value as any })}
                            >
                                <option value="Available">Available</option>
                                <option value="Reserved">Reserved</option>
                                <option value="Sold">Sold</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Seller Type</label>
                            <select
                                value={formData.sellerType}
                                onChange={(e) => setFormData({ ...formData, sellerType: e.target.value as any })}
                            >
                                <option value="Verified Dealer">Verified Dealer</option>
                                <option value="Private Seller">Private Seller</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Technical Specs */}
                <div className="form-section">
                    <h2>Technical Specifications</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Drive Type</label>
                            <select
                                value={formData.drive}
                                onChange={(e) => setFormData({ ...formData, drive: e.target.value })}
                            >
                                <option value="2WD">2WD</option>
                                <option value="4WD">4WD</option>
                                <option value="AWD">AWD</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label>Engine Size</label>
                            <input
                                type="text"
                                value={formData.engineSize}
                                onChange={(e) => setFormData({ ...formData, engineSize: e.target.value })}
                                placeholder="e.g., 2500 CC"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fuel Type</label>
                            <select
                                value={formData.fuelType}
                                onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                            >
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Petrol Hybrid">Petrol Hybrid</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Horsepower</label>
                            <input
                                type="text"
                                value={formData.horsePower}
                                onChange={(e) => setFormData({ ...formData, horsePower: e.target.value })}
                                placeholder="e.g., 250 Hp"
                            />
                        </div>

                        <div className="form-group">
                            <label>Transmission</label>
                            <select
                                value={formData.transmission}
                                onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                            >
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                                <option value="CVT">CVT</option>
                                <option value="DSG Automatic">DSG Automatic</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Torque</label>
                            <input
                                type="text"
                                value={formData.torque}
                                onChange={(e) => setFormData({ ...formData, torque: e.target.value })}
                                placeholder="e.g., 350 Nm"
                            />
                        </div>

                        <div className="form-group">
                            <label>Aspiration</label>
                            <select
                                value={formData.aspiration}
                                onChange={(e) => setFormData({ ...formData, aspiration: e.target.value })}
                            >
                                <option value="Natural">Natural</option>
                                <option value="Turbocharged">Turbocharged</option>
                                <option value="Supercharged">Supercharged</option>
                                <option value="Twin Turbo">Twin Turbo</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>0-100 km/h</label>
                            <input
                                type="text"
                                value={formData.acceleration}
                                onChange={(e) => setFormData({ ...formData, acceleration: e.target.value })}
                                placeholder="e.g., 7.5 Secs"
                            />
                        </div>

                        <div className="form-group">
                            <label>Condition Score (1-10)</label>
                            <input
                                type="number"
                                step="0.1"
                                min="1"
                                max="10"
                                value={formData.conditionScore}
                                onChange={(e) => setFormData({ ...formData, conditionScore: parseFloat(e.target.value) || 8.5 })}
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="form-section">
                    <h2>Description</h2>
                    <div className="form-group">
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Detailed description of the vehicle..."
                            rows={6}
                        />
                    </div>
                </div>

                {/* Images */}
                <div className="form-section">
                    <h2>Images</h2>
                    <div className="form-group">
                        <label>Upload Images</label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="file-input"
                        />
                        <p className="form-hint">Select multiple images (first image will be the main image)</p>
                    </div>

                    {existingImages.length > 0 && (
                        <div className="existing-images">
                            <p>Existing Images:</p>
                            <div className="image-grid">
                                {existingImages.map((url, index) => (
                                    <img key={index} src={url} alt={`Vehicle ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Submit */}
                <div className="form-actions">
                    <button type="button" onClick={() => navigate('/admin/vehicles')} className="btn-secondary">
                        Cancel
                    </button>
                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : (isEdit ? 'Update Vehicle' : 'Add Vehicle')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VehicleForm;
