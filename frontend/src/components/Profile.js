import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';

export const Profile = () => {
	const { user } = useContext( AuthContext );

	const [profile, setProfile] = useState({});
	const [repos, setRepos] = useState([]);
	const [profileImage, setProfileImage] = useState({file: null});

	const [edit, setEdit] = useState({
		value: false
	});

	const getUserProfile = () => {
		fetch("http://127.0.0.1:8000/api/userprofile/", {
            method: 'GET', 
            headers: {
                'Authorization':  `Token ${user.token}`,
                'Content-Type': 'application/json'
            }})
            .then(res => res.json())
            .then(data => {
				data.profile_picture = "http://127.0.0.1:8000/api" + data.profile_picture;
                setProfile(data);
            })
	};

	const getUserRepos = () => {
			fetch(`https://api.github.com/users/${profile.github_username}/repos`)
				.then(res => res.json())
				.then(data => {
					setRepos(data);
					console.log("repos", repos);
				})


	}

	useEffect(() => {
		getUserProfile();
		getUserRepos();
	}, []);

	const toggleEdit = () => {
		setEdit(edit => ({
			value: !edit.value
		}));
	};

	const handleInputChange = ({ target }) => {
		setProfile({
			...profile,
			[ target.name ]: target.value
		});
	}

	const handleSaveProfile = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('username', profile.username);
		formData.append('email', profile.email);
		formData.append('github_username', profile.github_username);

		if (profileImage.file) {
			formData.append('profile_picture', profileImage.file);
		}
		fetch(`http://127.0.0.1:8000/api/userprofilepicture/${profile.user_id}`, {
            method: 'put',
			headers: {
                'Authorization':  `Token ${user.token}`,
			},
            body: formData

		})
			.then(res => res.json())
			.then(data => {
				getUserProfile();
				toggleEdit();
			})
			.catch(error => {
				console.error(error);
				toggleEdit();
			})

	}

	const handleChangePicture = (e) => {
		e.preventDefault();
		const file = e.target.files[0]
		setProfileImage({file: file})
		setProfile({
			...profile,
			[ "profile_picture" ]: URL.createObjectURL(e.target.files[0])
		});
	}

	return (
		<div className="container">
			<div className="card text-white bg-dark mb-3" style={{  minWidth: '18rem'}}>
				{
					profile.error && <p className="card-text">Could not get the profile. Try again</p>
				}
				
				{
					profile.is_student &&
						<p className="card-text">Student Profile</p>
				}

				{
					profile.is_teacher &&
						<p className="card-text">Teacher Profile</p>
				}
				
				<div>
					<img className="card-img-top w-25 form-control" src={ profile.profile_picture } alt="Card image cap"/>
					{
						edit.value && <input name="profile_picture" type="file" onChange={ handleChangePicture } />
					}
				</div>
				<div className="card-body">

					<p className="card-text">
						<input value={ profile.username } name="username" type="text" onChange={ handleInputChange } placeholder="Username"  disabled={ !edit.value } className="form-control" />
					</p>

					<p className="card-text">
						<input value={ profile.email } name="email" type="text" onChange={ handleInputChange } placeholder="Email"  disabled={ !edit.value } className="form-control" />
					</p>

					<p className="card-text">
						<input value={ profile.github_username } name="github_username" type="text" placeholder="Github Username" onChange={ handleInputChange } disabled={ !edit.value } className="form-control" />
					</p>

					<div className="container d-flex justify-content-center">
						{
							profile.username && <div>
									<button className="btn btn-info m-3" onClick={ toggleEdit }>Edit</button>
								</div>
						}

						{
							edit.value && <div>
								<button className="btn btn-info m-3" onClick={ handleSaveProfile }>Save</button>
							</div>
						}
					</div>
					
				</div>

			{
				repos &&
				repos.map( repo => {
					return (
						<a className="card-text" href={ repo.html_url } target="_blank">
							{ repo.name }
							{/* html_url */}
						</a> 
				)})
			}
			</div>
		</div>


	)
}
