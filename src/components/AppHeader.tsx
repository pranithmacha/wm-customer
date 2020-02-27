import React from 'react'
import clsx from 'clsx'
import { withStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from './AppBar'
import Toolbar, { styles as toolbarStyles } from './ToolBar'

const styles = (theme: Theme) => ({
    title: {
        fontSize: 24
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between'
    },
    left: {
        flex: 1
    },
    leftLinkActive: {
        color: theme.palette.secondary.dark
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.secondary.dark,
        marginLeft: theme.spacing(3)
    },
    linkSecondary: {
        color: theme.palette.secondary.dark
    }
})

const AppHeader = (props: any) => {
    const { classes } = props

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/premium-themes/onepirate/"
                    >
                        {'onepirate'}
                    </Link>
                    <div className={classes.right}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            href="/signin"
                        >
                            {'Sign In'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            className={clsx(
                                classes.rightLink,
                                classes.linkSecondary
                            )}
                            href="/signup"
                        >
                            {'Sign Up'}
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    )
}

export default withStyles(styles)(AppHeader)