import React from 'react';

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
            <h1>Stock Transactions</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Product</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Quantity</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.date}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.product}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.quantity}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{transaction.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Transactions;

