const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const todoModel = require('./model/taskSchema.js')

app.use(cors())
app.use(express.json())

require('dotenv').config({path: './config/.env'})

app.get('/', (req, res) => {
    todoModel.find({}) // Get all Data from collection
    .then(Todo => res.json(Todo)) // Converts data to json
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})
app.post('/createtask', (req, res) => {
    todoModel.create(req.body) // Add Data to the collection
    .then(Todo => res.json(Todo))
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})
app.get('/gettask/:id', (req, res) => {
    const id = req.params.id 
    todoModel.findById(id) //get data by it's id
    .then(Todo => res.json(Todo)) 
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})
app.put('/updatetask/:id', (req, res) => {
    const id = req.params.id 
    todoModel.findByIdAndUpdate(id, {
        taskName: req.body.taskName,
        taskDate: req.body.taskDate,
        taskTime: req.body.taskTime
    })
    .then(Todo => res.json(Todo))
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})

mongoose.connect(process.env.DB_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & listening on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })