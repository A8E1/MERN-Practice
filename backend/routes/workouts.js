const express = require('express')
const router = express.Router()

const {createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout} = require('../controllers/workoutController')

//get ALL workouts
router.get('/', getWorkouts)

//get SINGLE workout
router.get('/:id', getWorkout)

//create a workout
router.post('/', createWorkout)

//update a workout
router.patch('/:id', updateWorkout)

//delete a SINGLE workout
router.delete('/:id', deleteWorkout)

module.exports = router