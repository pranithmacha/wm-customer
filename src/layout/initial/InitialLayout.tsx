import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { createStyles, Theme } from '@material-ui/core'
import Topbar from './components/topbar/TopBar'
import NavBar from './components/topbar/NavBar'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100%'
        },
        shiftContent: {
            paddingLeft: 240
        },
        content: {
            height: '100%'
        }
    })
)

const InitialLayout = (props: any) => {
    const { children } = props

    const classes = useStyles()

    const handleSidebarOpen = () => {}

    return (
        <div
            className={clsx({
                [classes.root]: true
            })}
        >
            {/* <Topbar onSidebarOpen={handleSidebarOpen} /> */}
            <NavBar />
            <main className={classes.content}>{children}</main>
        </div>
    )
}

export default InitialLayout
