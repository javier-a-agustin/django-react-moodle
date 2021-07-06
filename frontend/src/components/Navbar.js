import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../auth/types';

export const Navbar = () => {
    const { dispatch, user } = useContext( AuthContext );

    const history = useHistory();

    const handleLogOut = () => {

        dispatch({
            type: types.logout
        });

        history.replace('/login');
    }

    const changeFocus = (path) => {

        history.replace('/' + path);
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">
                <span className="navbar-brand">{ user.name }</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto mr-5">
                    <button className="nav-link btn btn-link" onClick={ () => changeFocus('main') }>Home</button>                
                    <button className="nav-link btn btn-link" onClick={ () => changeFocus('profile') }>Profile</button>                
                    <button className="nav-link btn btn-link" onClick={ () => changeFocus('my-courses') }>My Courses</button>                
                    <button className="nav-link btn btn-link" onClick={ handleLogOut }>Logout</button>                
                </div>
                </div>
            </div>
        </nav>

    )
}
