import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { Course } from './Course';

export const MainScreen = () => {

    const { user } = useContext(AuthContext);

    const [courses, setCourses] = useState([])

    const callback = () => {
        // setCourses(data)
        fetch("http://127.0.0.1:8000/api/courses/", {
            method: 'get', 
            headers: {
                'Authorization':  `Token ${user.token}`,
                'Content-Type': 'application/json'
            }})
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }
    useEffect(() => {
        callback();
    }, [])
    
    return (
        <div>
            <h1>Home</h1>

            {

                courses.map( (course, index) => (
                    <Course key={ index } data={ course } callback={ callback }/>
                ))

            }

        </div>
    )
}
