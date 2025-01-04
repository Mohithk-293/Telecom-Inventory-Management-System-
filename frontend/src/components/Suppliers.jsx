import React from 'react';

const dummySuppliers = [
    { id: 1, name: 'TechCorp', contact: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'ElectroSupply', contact: 'Jane Smith', phone: '234-567-8901' },
    { id: 3, name: 'GadgetWorld', contact: 'Bob Johnson', phone: '345-678-9012' },
    { id: 4, name: 'InnovateInc', contact: 'Alice Brown', phone: '456-789-0123' },
];

function Suppliers() {
    return (
        <div>
            <h1>Suppliers</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Contact</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {dummySuppliers.map((supplier) => (
                        <tr key={supplier.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{supplier.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{supplier.contact}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{supplier.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Suppliers;

