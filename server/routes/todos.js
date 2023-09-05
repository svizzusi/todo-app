const express = require('express')
const router = express.Router()
const todoSchema = require('../model/todoSchema.js');


// Express route to the root route for fetching all tasks
router.get('/todo/:id', (req, res) => {
    const userId = req.params.id; // Extract the userId parameter from the request
    console.log(userId);  
    todoSchema.find({ userId: userId }) // Retrieve all Data from collection
    .then(Todo => res.json(Todo)) // Converts data to json and sends response
    .catch(err => {
        res.json(err) //send error response as json
        console.log(err) //log the error
    })
})

// Express route for creating a new task
router.post('/createtask', (req, res) => {
    todoSchema.create(req.body) // Add Data to the collection
    .then(Todo => res.json(Todo)) // Convert data to JSON and send response
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

// Express route for fetching a task by its ID coming from MongoDB
router.get('/gettask/:id', (req, res) => {
    const id = req.params.id // Extract the ID parameter from the request
    todoSchema.findById(id) // Retrieve data by its ID
    .then(Todo => res.json(Todo)) // Convert data to JSON and send response
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

// Express route for updating a task by its ID(From MongoDB)
router.put('/updatetask/:id', (req, res) => {
    const id = req.params.id // Extract the ID parameter from the request
    todoSchema.findByIdAndUpdate(id, { // Find and update data by its ID
        taskName: req.body.taskName,
        taskDate: req.body.taskDate,
        taskTime: req.body.taskTime
    }) 
    .then(Todo => res.json(Todo)) // Convert data to JSON and send response
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

// Express route for deleting a task by its ID(From MongoDB)
router.delete('/deletetask/:id', (req, res) => {
    const id = req.params.id // Extract the ID parameter from the request
    todoSchema.findByIdAndDelete(id 
    ) // Find and Delete data by its ID
    .then(Todo => res.json(Todo)) // Convert data to JSON and send response
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

const todoRouter = router
module.exports = todoRouter