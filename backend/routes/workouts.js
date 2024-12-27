const express = require('express')
const router = express.Router()

const {createWorkout} = require('../controllers/workoutController')

router.get('/', (req,res)=>{
    res.json({mssg: "get all workouts"})
})

router.get('/:id', (req,res)=>{
    res.json({mssg: "get ONE workouts"})
})

router.post('/', createWorkout)

router.patch('/:id', (req, res)=>{
    res.json({mssg: "update workout"})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: "delete route"})
})

module.exports = router