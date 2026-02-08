import { useState } from 'react';

interface AdminTopBarProps {
    onToggleSidebar: () => void;
    userEmail: string;
    onLogout: () => void;
}

const AdminTopBar = ({ onToggleSidebar, userEmail, onLogout }: AdminTopBarProps) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div className="admin-topbar">
            <div className="topbar-left">
                <button className="hamburger-btn" onClick={onToggleSidebar} aria-label="Toggle Sidebar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                <h1 className="topbar-title">CityDrive Admin</h1>
            </div>

            <div className="topbar-right">
                <div className="user-menu-container">
                    <button
                        className="user-menu-trigger"
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        aria-label="User Menu"
                    >
                        <div className="user-avatar">
                            {userEmail.charAt(0).toUpperCase()}
                        </div>
                    </button>

                    {showUserMenu && (
                        <>
                            <div className="user-menu-backdrop" onClick={() => setShowUserMenu(false)}></div>
                            <div className="user-menu-dropdown">
                                <div className="user-menu-header">
                                    <p className="user-menu-email">{userEmail}</p>
                                </div>
                                <div className="user-menu-divider"></div>
                                <button className="user-menu-item" onClick={onLogout}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg>
                                    Sign Out
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminTopBar;
