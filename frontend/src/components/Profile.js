import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';

export const Profile = () => {
	const { dispatch, user } = useContext( AuthContext );
	return (
		<div className="container">
			<div className="card text-white bg-dark mb-3" style={{  minWidth: '18rem'}}>
				<img className="card-img-top w-25" src={ "http://127.0.0.1:8000" + user.profile_picture } alt="Card image cap"/>
				<div className="card-body">
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		</div>


	)
}
