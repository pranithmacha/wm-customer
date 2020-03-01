import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import {
    AppBar,
    Toolbar,
    Badge,
    IconButton,
    Theme,
    createStyles
} from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import Typography from '../../../../components/Typography'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            boxShadow: 'none',
            backgroundColor: theme.palette.background.default
        },
        flexGrow: {
            flexGrow: 1
        },
        signOutButton: {
            marginLeft: theme.spacing(1)
        }
    })
)

const Topbar = (props: any) => {
    const { className, onSidebarOpen, ...rest } = props

    const classes = useStyles()

    const [notifications] = useState([])

    return (
        <AppBar {...rest} className={clsx(classes.root, className)}>
            <Toolbar>
                <div className={classes.flexGrow} />
                <Typography variant="h4">WOW</Typography>
                <IconButton color="primary">
                    <Badge
                        badgeContent={notifications.length}
                        color="primary"
                        variant="dot"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar
