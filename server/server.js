// Install and import packages
const express = require('express') //Require express module
const app = express() //Create the instance of express
const mongoose = require('mongoose') //Require the mongoose module
const cors = require('cors') //Cross Origin Resource Sharing - allows frontend to talk to the server
const todoModel = require('./model/taskSchema.js') //Require the schema data structure
require('dotenv').config({path: './config/.env'}) //require the environment variable

app.use(cors()) //Use cors middleware in the express app
app.use(express.json()) // Middleware: Parse incoming JSON data

// Express route to the root route for fetching all tasks
app.get('/', (req, res) => {
    todoModel.find({}) // Retrieve all Data from collection
    .then(Todo => res.json(Todo)) // Converts data to json and sends response
    .catch(err => {
        res.json(err) //send error response as json
        console.log(err) //log the error
    })
})

// Express route for creating a new task
app.post('/createtask', (req, res) => {
    todoModel.create(req.body) // Add Data to the collection
    .then(Todo => res.json(Todo)) // Convert data to JSON and send response
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

// Express route for fetching a task by its ID coming from MongoDB
app.get('/gettask/:id', (req, res) => {
    const id = req.params.id // Extract the ID parameter from the request
    todoModel.findById(id) // Retrieve data by its ID
    .then(Todo => res.json(Todo)) // Convert data to JSON and send response
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

// Express route for updating a task by its ID(From MongoDB)
app.put('/updatetask/:id', (req, res) => {
    const id = req.params.id // Extract the ID parameter from the request
    todoModel.findByIdAndUpdate(id, { // Find and update data by its ID
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
app.delete('/deletetask/:id', (req, res) => {
    const id = req.params.id // Extract the ID parameter from the request
    todoModel.findByIdAndDelete(id 
    ) // Find and Delete data by its ID
    .then(Todo => res.json(Todo)) // Convert data to JSON and send response
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

// Establish a connection to the database and start the server
mongoose.connect(process.env.DB_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & listening on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err) // Log any database connection errors
    })