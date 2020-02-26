import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RequestForm from './components/RequestForm'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import SignUp from './components/SignUp'

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
