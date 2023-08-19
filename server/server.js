const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

require('dotenv').config({path: './config/.env'})

mongoose.connect(process.env.DB_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })