import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { AuthContext } from '../auth/AuthContext';

export const CoursePage = () => {
	let { id } = useParams();
	const { user } = useContext(AuthContext);
	const [course, setCourse] = useState({})

	useEffect(() => {
		const url = `http://127.0.0.1:8000/api/course/${id}/`

		fetch(url, {
				method: 'get',
				headers: {
					'Authorization': `Token ${user.token}`,
					'Content-Type': 'application/json'
				}
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setCourse(data);
			})

	}, [])

	return ( 
		<>
			<div className="mb-5 ">
				<div className="card text-white bg-dark p-3 m-1 border border-white">
						<h2>{ course.name }</h2>
						<span>Number of Students { course.max_number_students }</span>
						<div className="d-flex justify-content-center">
								<img className="card-img-top" style={{ width:'50%'}} src={ course.image } alt={ course.name }/>
						</div>
						<div className="card-body">
								<p className="card-text text-justify">{ course.description }</p>
						</div>

						{
							course.task_list &&
							course.task_list.map((task, index) => {
								return (
									<div className="card text-white bg-dark p-3 border border-white" key={ index }>
										<h4>{ task.date_from } - { task.date_to }</h4>

										<div>{ task.description }</div>

										{
											task.files && 
												<a href={ task.files.file } target="_blank">Download File</a>
										}
									</div>

								)
							})
						}


				</div>
			</div>

		</>
	);
}