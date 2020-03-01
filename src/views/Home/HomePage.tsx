import React from 'react'
import MainHeader from './xyz'
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
