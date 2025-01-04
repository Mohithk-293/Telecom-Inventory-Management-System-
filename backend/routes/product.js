const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
    ProductName: { type: String, required: true },
    Description: { type: String, required: true },
    ProductImage: { type: String, default: null },
    ProductCategoryName: { type: String, required: true },
    ModelNumber: { type: String, required: true },
    SerialNumber: { type: String, unique: true, required: true },
    StockLevel: { type: Number, required: true },
    ReorderPoint: { type: Number, required: true },
    SupplierMail: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

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

module.exports = router;
