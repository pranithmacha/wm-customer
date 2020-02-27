import { withStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

export const styles = (theme: Theme) => ({
    root: {
        backgroundColor: '#0f3c5f',
        height: 64,
        [theme.breakpoints.up('sm')]: {
            height: 70
        }
    }
})

export default withStyles(styles)(Toolbar)
