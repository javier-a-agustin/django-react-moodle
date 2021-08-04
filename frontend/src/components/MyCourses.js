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
        <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">

            {
                courses.length > 0 &&
                    courses.map( (course, index) => (
                        <MyCourse key={ index } data={ course }/>
                    )
                )

            }
            
            {
                courses.length == 0 &&
                    <h3 style={{ color: "white" }}>You are not registered in any course</h3>
            }
        </div>
    )
}
