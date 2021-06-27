import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';

export const Course = ({ data, callback }) => {

    const { user } = useContext(AuthContext);

    const handleButton = (id, method) => {
        const url = "http://127.0.0.1:8000/api/courses/";

        fetch(url, {
            method: "POST",
            headers: {
                'Authorization':  `Token ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                method: method

            })
        })
            .then(res => res.json())
            .then(d => {
                callback();
            });
    }

    return (
        <div className="mb-5">
            <div className="card p-3 card text-white bg-dark border border-white">
                <h2>{ data.name }</h2>

                <div className="card-body">
                    <p className="card-text">{ data.description }</p>
                </div>
                <div className="d-flex justify-content-center">
                    {data.registered
                        ? <button className="btn btn-outline-primary" onClick={ () => handleButton(data.id, "") }>Unrerister</button>
                        : <button className="btn btn-outline-primary" onClick={ () => handleButton(data.id, "create") }>Register</button>
                    }
                </div>
                
            </div>
        </div>
    )
}
