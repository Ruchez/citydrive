import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminTopBar from './admin/AdminTopBar';
import AdminSidebar from './admin/AdminSidebar';
import '../admin-premium.css';

const AdminLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate('/admin/login');
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="admin-layout">
            <AdminTopBar
                onToggleSidebar={toggleSidebar}
                userEmail={user?.email || ''}
                onLogout={handleLogout}
            />

            <AdminSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <main className="admin-main-new">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
