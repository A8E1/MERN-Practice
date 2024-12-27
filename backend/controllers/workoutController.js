const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
//create workout
const createWorkout = async (req,res)=>{

    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}
//read/get ALL workouts

const getWorkouts = async (req, res) => {
    //-1 means in descending order
    const workouts = await Workout.find({ }).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//get a SINGLE workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error: "No such workout"})

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

//update workout

//delete workout


module.exports = {createWorkout, getWorkouts, getWorkout}