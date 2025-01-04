import React from 'react';
import StaffSidebar from './StaffSidebar';

const dummyTransactions = [
    { id: 1, date: '2023-06-01', product: 'Laptop', quantity: 10, type: 'In' },
    { id: 2, date: '2023-06-02', product: 'Smartphone', quantity: 20, type: 'Out' },
    { id: 3, date: '2023-06-03', product: 'Headphones', quantity: 50, type: 'In' },
    { id: 4, date: '2023-06-04', product: 'Mouse', quantity: 30, type: 'Out' },
    { id: 5, date: '2023-06-05', product: 'Keyboard', quantity: 25, type: 'In' },
];

function Transactions() {
    return (
        <div>
            <StaffSidebar /> 
            <div className="transactions-container">
                <h1>Stock Transactions</h1>
                <div className="cards-container">
                    {dummyTransactions.map((transaction) => (
                        <div className="card" key={transaction.id}>
                            <h2 className="card-title">{transaction.product}</h2>
                            <p className="card-date"><strong>Date:</strong> {transaction.date}</p>
                            <p className="card-quantity"><strong>Quantity:</strong> {transaction.quantity}</p>
                            <p className="card-type"><strong>Type:</strong> {transaction.type}</p>
                        </div>
                    ))}
                </div>
        </div>

            <style>
                {`
                    /* Transactions Container */
                    .transactions-container {
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

                    /* Card Date, Quantity, and Type */
                    .card-date,
                    .card-quantity,
                    .card-type {
                        font-size: 1rem;
                        color: #555;
                        margin: 5px 0;
                    }
                `}
            </style>
        </div>
    );
}

export default Transactions;
