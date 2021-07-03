import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';

export const Profile = () => {
	const { dispatch, user } = useContext( AuthContext );

	const [profile, setProfile] = useState({})

	const getUserProfile = () => {
		fetch("http://127.0.0.1:8000/api/userprofile/", {
            method: 'get', 
            headers: {
                'Authorization':  `Token ${user.token}`,
                'Content-Type': 'application/json'
            }})
            .then(res => res.json())
            .then(data => {
                setProfile(data);
            })
	}

	useEffect(() => {
		getUserProfile();
	}, [])

	return (
		<div className="container">
			<div className="card text-white bg-dark mb-3" style={{  minWidth: '18rem'}}>
				{
					profile.error && <p className="card-text">Could not get the profile. Try again</p>
				}
				
				{
					profile.username && <button className="btn btn-info">Edit</button>
				}
				<img className="card-img-top w-25" src={ "http://127.0.0.1:8000" + profile.profile_picture } alt="Card image cap"/>
				<div className="card-body">
					{/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
					<p className="card-text">{ profile.username }</p>
					<p className="card-text">{ profile.email }</p>
					{
						profile.is_student &&
							<p className="card-text">Student Profile</p>
					}

					{
						profile.is_teacher &&
							<p className="card-text">Teacher Profile</p>
					}
					
				</div>
			</div>
		</div>


	)
}
