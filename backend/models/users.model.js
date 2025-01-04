const mongoose = require('mongoose');



const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (email) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                },
                message: props => `${props.value} is not a valid email!`
            }
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['staff', 'admin', 'manager'],
            default: 'staff'
        }
    },
    { timestamps: true }
);

// Remove password hashing logic and the comparePassword method
// No need for pre-save hook or bcrypt now

const User = mongoose.model('User', userSchema);

module.exports = User;
