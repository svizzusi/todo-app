const mongoose = require('mongoose')

// Define a schema for the "Todo" collection
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// Export the model based on the defined schema
module.exports = mongoose.model('User', UserSchema)