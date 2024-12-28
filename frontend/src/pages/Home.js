//we will display all workouts on the home page

import { useEffect, useState } from "react"

const Home = () => {
    //workout is the state, setWorkouts changes the state, and workouts = null
    const [workouts, setWorkouts] = useState(null)


    //will only fire once, when component first renders bc of '[]' dependency arr
    //fetches backend data
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:3000/api/workouts')
            //parses json, creates array of workout objects
            const json = await response.json()
            
            if(response.ok){
                setWorkouts(json)
            }
        }
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <p key={workout._id}>{workout.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home