import React from 'react';

const dummyProducts = [
    { id: 1, name: 'Laptop', price: 999.99, stock: 50 },
    { id: 2, name: 'Smartphone', price: 599.99, stock: 100 },
    { id: 3, name: 'Headphones', price: 99.99, stock: 200 },
    { id: 4, name: 'Mouse', price: 29.99, stock: 150 },
    { id: 5, name: 'Keyboard', price: 49.99, stock: 100 },
    { id: 6, name: 'Monitor', price: 299.99, stock: 75 },
];

function Products() {
    return (
        <div>
            <h1>Products</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Price</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyProducts.map((product) => (
                        <tr key={product.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>${product.price.toFixed(2)}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;

