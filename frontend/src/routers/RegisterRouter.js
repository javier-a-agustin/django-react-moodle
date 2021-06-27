import React from 'react'
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import { LoginScreen } from '../components/LoginScreen';
import { RegisterScreen } from '../components/RegisterScreen';

export const AuthRouter = () => {
    return (
        <>

            <div className='container'>

                <Switch>

                    <Route path="/register" component={ RegisterScreen } />      

                    <Redirect to="/register" />

                </Switch>

            </div>
        </>
    )
}