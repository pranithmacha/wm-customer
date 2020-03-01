import React from 'react'
import Typography from '../../components/Typography'
import {
    Grid,
    makeStyles,
    Theme,
    createStyles,
    Divider,
    Chip
} from '@material-ui/core'
import NavBar from '../../layout/initial/components/topbar/NavBar'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainText: {
            marginTop: 150,
            color: '#5f9ea0'
        },
        subText: {
            marginTop: 50,
            color: '#5f9ea0'
        },
        gridItem: {
            height: '50%',
            justifyContent: 'center',
            textAlign: 'center'
        },
        divider: {
            height: 3,
            marginTop: 30,
            width: 60,
            color: '#d14719'
        },
        chip: {
            marginTop: 100,
            backgroundColor: '#d14719',
            color: '#edb8a6',
            fontFamily: theme.typography.fontFamily,
            font: theme.typography.fontFamily,
            fontSize: 15,
            fontWeight: 'bold',
            width: 180,
            height: 60
        }
    })
)

const MainHeader: React.FC = () => {
    const classes = useStyles()
    return (
        <div id="mainHeader">
            <NavBar />
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} className={classes.gridItem}>
                    <Typography variant="h2" className={classes.mainText}>
                        Make money out of waste
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Divider variant="middle" className={classes.divider} />
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Typography variant="h6" className={classes.subText}>
                        Do not throw away your dry waste. You can now make money
                        out of waste.
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Chip label="FIND OUT MORE" className={classes.chip} />
                </Grid>
            </Grid>
        </div>
    )
}

export default MainHeader
