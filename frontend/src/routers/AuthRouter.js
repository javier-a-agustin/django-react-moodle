import React from 'react'
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import { AuthScreen } from '../components/AuthScreen';

export const AuthRouter = () => {
    return (
        <>

            <div className='container'>

                <Switch>

                    <Route path="/auth" component={ AuthScreen } />      

                    <Redirect to="/auth" />

                </Switch>

            </div>
        </>
    )
}