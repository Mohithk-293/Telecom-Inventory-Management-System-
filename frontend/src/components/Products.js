import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from the backend when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log("hi");
                const response = await fetch('http://localhost:5000/products'); // Endpoint we created
                console.log("hi");
                console.log(response);
                const data = await response.json();
                setProducts(data); // Store the products in the state
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Products</h2>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{product.ProductName}</h5>
                                    <p className="card-text">
                                        <strong>Description:</strong> {product.Description}
                                    </p>
                                    <p className="card-text">
                                        <strong>Category:</strong> {product.ProductCategoryName}
                                    </p>
                                    <p className="card-text">
                                        <strong>Model Number:</strong> {product.ModelNumber}
                                    </p>
                                    <p className="card-text">
                                        <strong>Stock Level:</strong> {product.StockLevel}
                                    </p>
                                    <p className="card-text">
                                        <strong>Reorder Point:</strong> {product.ReorderPoint}
                                    </p>
                                    <p className="card-text">
                                        <strong>Supplier:</strong> {product.SupplierName}
                                    </p>
                                    <p className="card-text">
                                        <strong>Order Date:</strong> {new Date(product.OrderDate).toLocaleDateString()}
                                    </p>
                                    <p className="card-text">
                                        <strong>Quantity Ordered:</strong> {product.Quantity}
                                    </p>
                                    <p className="card-text">
                                        <strong>Status:</strong> {product.OrderStatus}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default Products;
