const express = require('express')
const router = express.Router()

const {createWorkout, getWorkouts, getWorkout} = require('../controllers/workoutController')

//get ALL workouts
router.get('/', getWorkouts)

//get SINGLE workout
router.get('/:id', getWorkout)

//create a workout
router.post('/', createWorkout)

//update a workout
router.patch('/:id', (req, res)=>{
    res.json({mssg: "update workout"})
})

//delete a SINGLE workout
router.delete('/:id', (req, res) => {
    res.json({mssg: "delete route"})
})

module.exports = router