const Workout = require('../models/workoutModel')

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
//read/get workout



//update workout

//delete workout


module.exports = {createWorkout}