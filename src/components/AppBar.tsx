import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'

const styles = (theme: any) => ({
    root: {
        color: theme.palette.secondary.dark
    }
})

function AppBar(props: any) {
    return <MuiAppBar elevation={0} position="static" {...props} />
}

export default withStyles(styles)(AppBar)
