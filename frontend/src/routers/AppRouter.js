import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {
    
    const {user} = useContext(AuthContext);

    return (
        <div>
            <Router>
                <div>
                    <Switch>

                        <PublicRouter path='/auth' component={ AuthRouter } isAuthenticated={ user.logged }/>

                        <PrivateRoute path='' component={ MainRouter } isAuthenticated={ user.logged }/>

                    </Switch>
                </div>
            </Router>
        </div>
    )
}