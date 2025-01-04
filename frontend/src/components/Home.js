import React from "react";
// import "./HomePage.css"; // Import your custom CSS for additional styling

const Home = () => {
    return (
        <div className="home-page-container">
            <header className="bg-primary text-white text-center py-4">
                <h1 className="display-4">Welcome to Telecom Inventory Management System (TIMS)</h1>
                <p className="lead">Efficiently manage telecom products and services inventory with ease.</p>
            </header>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">User Management</h5>
                                <p className="card-text">
                                    Role-based access for Admins, Managers, and Staff to ensure secure and efficient
                                    management.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">Product Inventory</h5>
                                <p className="card-text">
                                    Add, edit, and track products with detailed stock information and reorder alerts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="card shadow h-100">
                            <div className="card-body">
                                <h5 className="card-title">Supplier Management</h5>
                                <p className="card-text">
                                    Manage supplier details, contact information, and order history seamlessly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-section bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Features</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Alerts & Notifications:</strong> Get timely notifications for low stock and overdue orders.
                        </li>
                        <li className="list-group-item">
                            <strong>Search & Filtering:</strong> Quickly find products with powerful search and filter options.
                        </li>
                        <li className="list-group-item">
                            <strong>Reporting Dashboard:</strong> Visualize key metrics like stock levels and supplier order status.
                        </li>
                        <li className="list-group-item">
                            <strong>Demand Forecasting:</strong> Use historical data to predict future inventory needs.
                        </li>
                    </ul>
                </div>
            </div>

            <footer className="bg-dark text-white text-center py-3">
                <p className="mb-0">&copy; 2024 Telecom Inventory Management System. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
