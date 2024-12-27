const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

router.get('/', (req,res)=>{
    res.json({mssg: "get all workouts"})
})

router.get('/:id', (req,res)=>{
    res.json({mssg: "get ONE workouts"})
})

//POST request to create a new workout
//destructured creation of 3 variables from body, which is parsed by middleware in 
//server.js

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.patch('/:id', (req, res)=>{
    res.json({mssg: "update workout"})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: "delete route"})
})

module.exports = router