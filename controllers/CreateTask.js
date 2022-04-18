import React from 'react'
import { useState, useEffect, useNavigate } from 'react'


export default function CreateTask() {
    const [createTask, setCreateTask] = useState([])
    const route = useNavigate()

    useEffect(() => {
        getCreateTask(id)
        .then(res => res.json())
        .then(res => setCreateTask(res))
        
    }, [])

    return (
        <div>
            <h3>{createTask.description} </h3>
            <h3>complete: {createTask.complete} </h3>

        <button onClick={() => {
            route("/")
        }}>Index Page</button>
        </div>
    )
}



//useParams 