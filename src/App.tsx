import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RequestForm from './components/RequestForm'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/requestForm">
                        <RequestForm />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <SignIn />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
