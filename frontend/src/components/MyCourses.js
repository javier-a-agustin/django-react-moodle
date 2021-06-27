import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { MyCourse } from './MyCourse';

export const MyCourses = () => {
    const { user } = useContext(AuthContext);

    const [courses, setCourses] = useState([])

    useEffect(() => {
        
        fetch("http://127.0.0.1:8000/api/my-courses/", {
            method: 'get', 
            headers: {
                'Authorization':  `Token ${user.token}`,
                'Content-Type': 'application/json'
            }})
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            })
    }, [])
    
    return (
        <>
            <h1>My Courses</h1>

            {

                courses.map( (course, index) => (
                    <MyCourse key={ index } data={ course }/>
                ))

            }
        </>
    )
}
