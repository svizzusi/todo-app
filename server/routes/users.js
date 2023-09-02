const express = require('express')
const router = express.Router()
const userSchema = require('../model/userSchema.js');

// Route for user signup
router.post('/signup', (req, res) => {
    const { name, email, password } = req.body; // Destructure user data from request body
    
    userSchema.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.json({
                    message: "User already exists, login instead",
                    success: false,
                }); // Send a response indicating that the user already exists
            }

            // Create a new user
            return userSchema.create({ name, email, password })
                .then(newUser => {
                    return res.json({
                        message: 'Account created successfully',
                        success: true,
                        user: newUser // Include the newly created user in the response
                    });
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Internal Server Error',
                        error: err,
                        success: false,
                    }); // Send error response if user creation fails
                });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err,
                success: false,
            });
        });
});

// Route for user login
router.post('/login', (req, res) => {
    const {name, email, password} = req.body // Destructure user data from request body
    userSchema.findOne({ email: email }) // Find a user with the given email
    .then( user => {
        if (user) {
            if (user.password === password) {
                res.json({
                    success: true,
                    message: 'Login successful'
                }) // Send success response if login is successful
            } else {
                res.json({
                    success: false,
                    message: 'Incorrect username or password'
                }) // Send response indicating incorrect username or password
            }
        } else {
            res.json({
                success: false,
                message: 'Proceed to sign up'
            }) // Send response indicating that the user does not exist
        }
    })
})

const userRouter = router
module.exports = userRouter