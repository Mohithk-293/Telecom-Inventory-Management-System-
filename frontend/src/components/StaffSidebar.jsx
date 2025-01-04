import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Package, Truck, BarChart2, Bell } from 'lucide-react';
import "./StaffSidebar.css";
const StaffSidebar = () => {
    const location = useLocation();
    const navItems = [
        { name: 'View Products', href: '/products', icon: Package },
        { name: 'View Suppliers', href: '/suppliers', icon: Truck },
        { name: 'Stock Transactions', href: '/transactions', icon: BarChart2 },
        { name: 'View Notifications', href: '/notifications', icon: Bell },
    ];


  return (
      
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
  );
        
}

export default StaffSidebar;