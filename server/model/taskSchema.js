const mongoose = require('mongoose')

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

module.exports = mongoose.model('Todo', TodoSchema)