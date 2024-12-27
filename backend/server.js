//requiring packages
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const workoutRouter = require('./routes/workouts')

//start express app
const app = express()

app.get('/', (req,res)=>{
    res.send("Finallyyyy it works!")
})

//middleware
app.use(express.json())

//routes
app.use('/api/workouts', workoutRouter)

//connect 2 db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen 4 requests
        app.listen(process.env.PORT, ()=>{
        console.log(`The server should be working on http://localhost:${process.env.PORT}}`)
        })

    })
    .catch((error) => {
        console.log(error)
    })


