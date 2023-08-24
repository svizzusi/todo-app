const mongoose = require('mongoose')

// Define a schema for the "Todo" collection
const TodoSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskDate: {
        type: String,
        required: true,
    },
    taskTime: {
        type: String,
        required: true,
    }
})

// Export the model based on the defined schema
module.exports = mongoose.model('Todo', TodoSchema)