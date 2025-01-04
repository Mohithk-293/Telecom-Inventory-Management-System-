const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    ProductImage: {
        type: String,  
        default: null
    },
    ProductCategoryName: {
        type: String,
        required: true
    },
    ModelNumber: {
        type: String,
        required: true
    },
    SerialNumber: {
        type: String,
        required: true,
        unique: true
    },
    StockLevel: {
        type: Number,
        required: true,
        default: 0
    },
    ReorderPoint: {
        type: Number,
        required: true
    }
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product;
