const mongoose = require('mongoose');

// User Schema for MongoDB Collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required.."]
    },
    email: {
        type: String,
        required: [true, "Email is required.."],
        unique: true
    },
    age: {
        type: Number,
        required: [true, "Age is required.."]
    }
}, {
    timestamps: true,
    strict: false
});

// User Model for MongoDB Collection
const User = mongoose.model('User', userSchema);

module.exports = User;