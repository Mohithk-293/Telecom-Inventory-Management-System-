import React from 'react';
import StaffSidebar from './StaffSidebar';

const dummySuppliers = [
    { id: 1, name: 'TechCorp', contact: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'ElectroSupply', contact: 'Jane Smith', phone: '234-567-8901' },
    { id: 3, name: 'GadgetWorld', contact: 'Bob Johnson', phone: '345-678-9012' },
    { id: 4, name: 'InnovateInc', contact: 'Alice Brown', phone: '456-789-0123' },
];

function Suppliers() {
    return (
        <div>
            <StaffSidebar/>                
            <div className="suppliers-container">
                <h1>Suppliers</h1>
                <div className="cards-container">
                    {dummySuppliers.map((supplier) => (
                        <div className="card" key={supplier.id}>
                            <h2 className="card-title">{supplier.name}</h2>
                            <p className="card-contact"><strong>Contact:</strong> {supplier.contact}</p>
                            <p className="card-phone"><strong>Phone:</strong> {supplier.phone}</p>
                        </div>
                    ))}
                </div>
        </div>

            <style>
                {`
                    /* Suppliers Container */
                    .suppliers-container {
                        padding: 20px;
                        font-family: Arial, sans-serif;
                        width:60%;
                        position: absolute;
                        right:0;
                    }

                    /* Cards Container */
                    .cards-container {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        gap: 20px;
                    }

                    /* Card Styles */
                    .card {
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        padding: 15px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }

                    .card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    }

                    /* Card Title */
                    .card-title {
                        font-size: 1.25rem;
                        font-weight: bold;
                        color: #333;
                        margin-bottom: 10px;
                    }

                    /* Card Contact and Phone */
                    .card-contact,
                    .card-phone {
                        font-size: 1rem;
                        color: #555;
                        margin: 5px 0;
                    }
                `}
            </style>
        </div>
    );
}

export default Suppliers;
