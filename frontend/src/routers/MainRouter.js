import React from 'react'
import { Navbar } from '../components/Navbar'
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { MainScreen } from '../components/MainScreen';
import { MyCourses } from '../components/MyCourses';
import { Footer } from '../components/Footer';
import { CoursePage } from '../components/CoursePage';
import { Profile } from '../components/Profile';

export const MainRouter = () => {
    return (
        <>
            <Navbar />
                <div className='container'>
                    <Switch>
                        <Route path="/main" component={ MainScreen } /> 
                        <Route path="/my-courses" component={ MyCourses } />     
                        <Route path="/course/:id" component={ CoursePage } />
                        <Route path="/profile" component={ Profile } />
                        <Redirect to="/main" />
                    </Switch>
                </div>
            <Footer />

        </>
    )
}