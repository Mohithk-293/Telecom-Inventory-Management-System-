import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManagerDashboard.css';

const initialProducts = [
  { id: 1, name: 'Router', stock: 10, price: 50 },
  { id: 2, name: 'Modem', stock: 5, price: 30 },
];

const initialSuppliers = [
  { id: 1, name: 'ABC Electronics', contact: '123-456-789' },
  { id: 2, name: 'XYZ Corp', contact: '987-654-321' },
];

const initialNotifications = [
  { id: 1, message: 'Stock for Router is low. Only 5 items left.', type: 'warning' },
  { id: 2, message: 'Product “Modem” is restocked by supplier XYZ Corp.', type: 'info' },
];

const ManagerDashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [newProductName, setNewProductName] = useState('');
  const [newProductStock, setNewProductStock] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newSupplierName, setNewSupplierName] = useState('');
  const [newSupplierContact, setNewSupplierContact] = useState('');

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: newProductName,
      stock: parseInt(newProductStock),
      price: parseFloat(newProductPrice),
    };
    setProducts([...products, newProduct]);
    setNewProductName('');
    setNewProductStock('');
    setNewProductPrice('');
  };

  const addSupplier = (e) => {
    e.preventDefault();
    const newSupplier = {
      id: suppliers.length + 1,
      name: newSupplierName,
      contact: newSupplierContact,
    };
    setSuppliers([...suppliers, newSupplier]);
    setNewSupplierName('');
    setNewSupplierContact('');
  };

  const updateProductStock = (id, amount) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: product.stock + amount } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="manager-dashboard">
      <h1>Manager Dashboard</h1>

      {/* Notifications */}
      <div className="notifications">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id} className={notif.type}>
              {notif.message}
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Products */}
      <div className="manage-products">
        <h2>Manage Products</h2>
        <form onSubmit={addProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProductStock}
            onChange={(e) => setNewProductStock(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            required
          />
          <button type="submit">Add Product</button>
        </form>

        <h3>Product List</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.stock} units - ${product.price}
              <button onClick={() => updateProductStock(product.id, 1)}>Restock +1</button>
              <button onClick={() => updateProductStock(product.id, -1)}>Reduce Stock -1</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Suppliers */}
      <div className="manage-suppliers">
        <h2>Manage Suppliers</h2>
        <form onSubmit={addSupplier}>
          <input
            type="text"
            placeholder="Supplier Name"
            value={newSupplierName}
            onChange={(e) => setNewSupplierName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Supplier Contact"
            value={newSupplierContact}
            onChange={(e) => setNewSupplierContact(e.target.value)}
            required
          />
          <button type="submit">Add Supplier</button>
        </form>

        <h3>Supplier List</h3>
        <ul>
          {suppliers.map((supplier) => (
            <li key={supplier.id}>
              {supplier.name} - {supplier.contact}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/">Logout</Link>
    </div>
  );
};

export default ManagerDashboard;
