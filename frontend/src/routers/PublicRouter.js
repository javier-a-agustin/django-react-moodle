import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !isAuthenticated) 
                ? <Component { ...props } />
                : <Redirect to="/main" />
            )
            }
        
        />
    )
}