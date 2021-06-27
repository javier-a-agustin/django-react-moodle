import React from 'react'
import { useHistory } from 'react-router';
// import { AuthContext } from '../auth/AuthContext';

export const MyCourse = ({data}) => {
    const history = useHistory();
    // const { user } = useContext(AuthContext);
    const handleShowClass = (name, id) => {
        history.push(`course/${id}`)
    }

    return (
        <div className="mb-5 ">
            <div className="card text-white bg-dark p-3 border border-white">
                <h2>{ data.name }</h2>
                <span>Number of Students { data.max_number_students }</span>
                <div className="d-flex justify-content-center">
                    <img className="card-img-top" style={{ width:'100px'}} src={ data.image } alt={ data.name }/>
                </div>
                <div className="card-body">
                    <p className="card-text text-justify">{ data.description }</p>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-primary" onClick={ () => handleShowClass(data.name, data.id) }>Go to { data.name } page</button>
                </div>
            </div>
        </div>
    )
}
