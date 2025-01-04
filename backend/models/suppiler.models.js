const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    SupplierName: {
        type: String,
        required: true
    },
    SupplierMail: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    SupplierContact: {
        type: Number,
        required: true
    }
});

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;
