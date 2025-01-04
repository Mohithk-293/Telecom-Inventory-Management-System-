const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products.model.js');

// Product Schem
// Route to add a product
router.post('/add', async (req, res) => {
    const {
        ProductName,
        Description,
        ProductImage,
        ProductCategoryName,
        ModelNumber,
        SerialNumber,
        StockLevel,
        ReorderPoint,
        SupplierMail
    } = req.body;

    // Validate required fields
    if (!ProductName || !Description || !ProductCategoryName || !ModelNumber || !SerialNumber || !StockLevel || !ReorderPoint || !SupplierMail) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    try {
        // Create and save the product
        const newProduct = new Product({
            ProductName,
            Description,
            ProductImage,
            ProductCategoryName,
            ModelNumber,
            SerialNumber,
            StockLevel,
            ReorderPoint,
            SupplierMail
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully!', product: newProduct });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Serial Number must be unique!' });
        }
        res.status(500).json({ message: 'Failed to add product!', error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the DB
        console.log(products);
        res.status(200).json(products); // Send products as a JSON response
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
