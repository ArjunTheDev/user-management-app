const router = require('express').Router();
const User = require('../models/user');

// Create new user in the User collection
router.post('/user', async(req, res) => {
    try{
        const userData = req.body;
        const user = await User.create(userData); //3ms
        res.status(201).json({
            user: user
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

//Get all users from the User collection
router.get('/users', async(req, res) => {
    try {
        const userList = await User.find();
        res.status(200).json({
            users: userList
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// Update a user in the User collection
router.put('/user/:id', async(req, res) => {
    try {
        const newUserData = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, newUserData, {new: true});
        if (!updatedUser) { //null
            return res.status(404).json({
                message: "User not found.."
            });
        }
        res.status(200).json({
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// Delte a user from the User collection
router.delete('/user/:id', async(req, res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) { //null
            return res.status(404).json({
                message: "User not found.."
            });
        }
        res.status(200).json({
            user: deletedUser
        });
    }catch(error){
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;