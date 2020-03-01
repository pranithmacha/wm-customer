import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/styles'
import { useMediaQuery, createStyles, Theme } from '@material-ui/core'
import Topbar from './components/topbar/TopBar'
import Sidebar from './components/sidenav/SideBar'
import Footer from './components/footer/Footer'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 56,
            height: '100%',
            [theme.breakpoints.up('sm')]: {
                paddingTop: 64
            }
        },
        shiftContent: {
            paddingLeft: 240
        },
        content: {
            height: '100%'
        }
    })
)

const MainLayout = (props: any) => {
    const { children } = props

    const classes = useStyles()
    const theme: Theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    })

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleSidebarOpen = () => {
        setOpenSidebar(true)
    }

    const handleSidebarClose = () => {
        setOpenSidebar(false)
    }

    const shouldOpenSidebar = isDesktop ? true : openSidebar

    return (
        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: isDesktop
            })}
        >
            <Topbar onSidebarOpen={handleSidebarOpen} />
            <Sidebar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? 'persistent' : 'temporary'}
            />
            <main className={classes.content}>
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default MainLayout
