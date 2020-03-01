import React from 'react'
import {
    Grid,
    makeStyles,
    Theme,
    createStyles,
    Divider,
    Chip,
    Container
} from '@material-ui/core'
import Typography from '../../../components/Typography'
import glass from '../../../static/glass-whiskey-solid.svg'
import plastic from '../../../static/wine-bottle-solid.svg'
import paper from '../../../static/newspaper-regular.svg'
import metal from '../../../static/tools-solid.svg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: theme.palette.secondary.light,
            overflow: 'hidden'
        },
        container: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(15),
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        number: {
            fontSize: 24,
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.secondary.main,
            fontWeight: theme.typography.fontWeightMedium
        },
        image: {
            color: 'blue',
            height: 55,
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4)
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(0, 5)
        },
        mainText: {
            marginTop: 100,
            color: '#5f9ea0'
        },
        subText: {
            marginTop: 50,
            color: '#5f9ea0'
        },
        gridItem: {
            height: '30%',
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

const Pickup: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} className={classes.gridItem}>
                    <Typography variant="h4" className={classes.mainText}>
                        What we pickup?
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Divider variant="middle" className={classes.divider} />
                </Grid>
            </Grid>
            <section className={classes.root}>
                <Container className={classes.container}>
                    <div>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    <img
                                        src={glass}
                                        alt="suitcase"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        Glass items
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    <img
                                        src={paper}
                                        alt="graph"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        Paper. Cardboard. Books
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    <img
                                        src={plastic}
                                        alt="clock"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        All types of plastic
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    <img
                                        src={metal}
                                        alt="clock"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        All types of Metal
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Pickup
