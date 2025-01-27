const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB Atlas Database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected..');
    } catch (error) {
        console.error("Database connection failed.." + error.message);
        process.exit(1);
    }
};

module.exports = connectDB;