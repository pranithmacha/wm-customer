import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { SignUp as SignUpView, SignIn as SignInView } from '../views/Auth'
import { Home as HomeView } from '../views'
import RouteWithLayout from './RouteWithLayout'
import InitialLayout from '../layout/initial/InitialLayout'
import HomePage from '../views/Home/HomePage'

const Routes = () => {
    return (
        <Switch>
            <Route component={SignUpView} path="/signin" />
            <Route exact component={HomePage} path="/" />
            {/* <Redirect exact from="/" to="/home" />
            <RouteWithLayout
                exact
                component={SignUpView}
                layout={InitialLayout}
                path="/signup"
            />
            <RouteWithLayout
                exact
                component={SignInView}
                layout={InitialLayout}
                path="/signin"
            />
            <RouteWithLayout
                exact
                component={HomeView}
                layout={InitialLayout}
                path="/home"
            /> */}
        </Switch>
    )
}

export default Routes
