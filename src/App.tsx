import React from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RequestForm from './components/RequestForm'

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/requestForm">
                        <RequestForm />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
