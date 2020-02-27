import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './views/Signup'
import RequestForm from './components/RequestForm'
import SignIn from './views/SignIn'
import Home from './views/Home'
import Account from './views/Account/Account'
import withRoot from './withRoot'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/requestForm">
                        <RequestForm />
                    </Route>
                    <Route path="/profile">
                        <Account />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default withRoot(App)
