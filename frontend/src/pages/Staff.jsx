import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package, Truck, BarChart2, Bell } from 'lucide-react';
import './staff.css';

const navItems = [
    { name: 'View Products', href: '/products', icon: Package },
    { name: 'View Suppliers', href: '/suppliers', icon: Truck },
    { name: 'Stock Transactions', href: '/transactions', icon: BarChart2 },
    { name: 'View Notifications', href: '/notifications', icon: Bell },
];

function Staff({ children }) {  // Accept 'children' as a prop
    const location = useLocation();

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className="sidebar">
                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`nav-item ${location.pathname === item.href ? 'active' : ''}`}
                        >
                            <item.icon />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
                
            <main style={{ flex: 1, overflowY: 'auto', padding: '20px'}}>
                {children}  {/* Render the passed child component */}
            </main>
        </div>
    );
}

export default Staff;

