const express = require('express');
const router = express.Router();
const Product = require('../models/products.model'); 
const Transaction = require('../models/transaction.models'); 

router.post('/', async (req, res) => {
    try {
        const { productName, quantity, role_id } = req.body; 

        const product = await Product.findOne({ ProductName: productName });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.StockLevel < quantity) {
            return res.status(400).json({ message: 'Insufficient stock available' });
        }
 
        product.StockLevel -= quantity;
        await product.save(); 

        
        const transaction = new Transaction({
            product_id: product._id, 
            quantity: quantity, 
            role_id: role_id, 
            order_status: 'Delivered' 
        });

        
        await transaction.save();

        
        res.status(200).json({
            message: 'Transaction successful',
            transaction
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
