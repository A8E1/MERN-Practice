//we will display all workouts on the home page

import { useEffect, useState } from "react"


//components
import WorkoutDetails from '../components/workoutDetails'
const Home = () => {
    //workout is the state, setWorkouts changes the state, and workouts = null
    const [workouts, setWorkouts] = useState(null)


    //will only fire once, when component first renders bc of '[]' dependency arr
    //fetches backend data
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            //parses json, creates array of workout objects
            const json = await response.json()
            
            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    )
}

export default Home