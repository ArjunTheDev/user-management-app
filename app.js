const express = require('express');
const connectDB = require('./config/db');

const userManagementApp = express();

// Middleware
userManagementApp.use(express.json());
userManagementApp.use('/api', require('./routes/user'));

// Connect to MongoDB Atlas
connectDB();

// Port to run the application
const PORT = 3000;
// Start the application
userManagementApp.listen(PORT, () => {
    console.log(`Application running on Port: ${PORT}`);
});