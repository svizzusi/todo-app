const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const todoModel = require('./model/taskSchema.js')

app.use(cors())
app.use(express.json())

require('dotenv').config({path: './config/.env'})

app.get('/', (req, res) => {
    todoModel.find({})
    .then(Todo => res.json(Todo))
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})
app.post('/createtask', (req, res) => {
    todoModel.create(req.body)
    .then(Todo => res.json(Todo))
    .catch(err => {
        res.json(err)
        console.log(err)
    })
})
app.put('/updatetask', (req, res) => {
    todoModel.create(req.body)
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