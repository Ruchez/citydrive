import { Link, useLocation } from 'react-router-dom';

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Backdrop for mobile */}
            {isOpen && <div className="sidebar-backdrop" onClick={onClose}></div>}

            <aside className={`admin-sidebar-new ${isOpen ? 'open' : ''}`}>
                <nav className="sidebar-nav-new">
                    <Link
                        to="/admin"
                        className={`nav-item-new ${isActive('/admin') ? 'active' : ''}`}
                        onClick={onClose}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        to="/admin/vehicles"
                        className={`nav-item-new ${isActive('/admin/vehicles') ? 'active' : ''}`}
                        onClick={onClose}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                            <circle cx="8.5" cy="16.5" r="1.5"></circle>
                            <circle cx="15.5" cy="16.5" r="1.5"></circle>
                            <path d="M3 11V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"></path>
                        </svg>
                        <span>Vehicles</span>
                    </Link>

                    <Link
                        to="/admin/vehicles/new"
                        className={`nav-item-new ${isActive('/admin/vehicles/new') ? 'active' : ''}`}
                        onClick={onClose}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span>Add Vehicle</span>
                    </Link>

                    <div className="nav-divider"></div>

                    <Link
                        to="/"
                        className="nav-item-new"
                        onClick={onClose}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>View Site</span>
                    </Link>
                </nav>
            </aside>
        </>
    );
};

export default AdminSidebar;
