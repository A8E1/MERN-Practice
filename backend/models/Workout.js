const mongoose = require('mongoose')


//SCHEMA: defines structure of a type of document in db
//MODEL: applies schema
const Schema = mongoose.Schema

const workoutSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }

}, { timestamps: true })

//creates a collection "Workouts", auto-pluralizes. 
//collection is based on workoutSchema
//we import this model to interact w the collection "Workouts"
module.exports = mongoose.model('Workout', workoutSchema)