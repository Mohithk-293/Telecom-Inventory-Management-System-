const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
        ref: 'Product',
        required: true
    },
    OrderDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    Quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1']
    },
    OrderStatus: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        required: true
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
