import React from 'react'
import { makeStyles, createStyles, Theme, Grid } from '@material-ui/core'
import NavBar from '../../layout/initial/components/topbar/NavBar'
import MainHeader from './xyz'
import FindOutMore from './FIndOutMore'
import HowItWorks from './components/HowItWorks'
import HowItReallyWorks from './components/HowItReallyWorks'
import ContactUs from './components/ContactUs'
import Pickup from './components/Pickup'

const HomePage = () => {
    return (
        <React.Fragment>
            <MainHeader />
            <HowItReallyWorks />
            <Pickup />
            <ContactUs />
        </React.Fragment>
    )
}

export default HomePage
