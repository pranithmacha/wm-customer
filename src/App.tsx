import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import withRoot from './withRoot'
import { ThemeProvider } from '@material-ui/core'
import theme from '../src/theme/theme'
import Routes from './routes/Routes'
import HomePage from './views/Home/HomePage'

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes />
            </Router>
        </React.Fragment>

        // <ThemeProvider theme={theme}>
        //     <Router>
        //         <Routes />
        //     </Router>
        // </ThemeProvider>
    )
}

export default withRoot(App)
