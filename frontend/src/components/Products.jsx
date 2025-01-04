import React from 'react';
import StaffSidebar from './StaffSidebar.jsx';

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
            <StaffSidebar/>                
            <div className="products-container">
                <h1>Products</h1>
                <div className="cards-container">
                    {dummyProducts.map((product) => (
                        <div className="card" key={product.id}>
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-price"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                            <p className="card-stock"><strong>Stock:</strong> {product.stock}</p>
                        </div>
                    ))}
                </div>
        </div>
        
            <style>
                {`
                    /* Products Container */
                    .products-container {
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

                    /* Card Price and Stock */
                    .card-price,
                    .card-stock {
                        font-size: 1rem;
                        color: #555;
                        margin: 5px 0;
                    }
                `}
            </style>
        </div>
    );
}

export default Products;
