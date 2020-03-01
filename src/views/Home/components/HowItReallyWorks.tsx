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
import signup from '../../../static/address-card-solid.svg'
import request from '../../../static/paper-plane-solid.svg'
import pickup from '../../../static/shipping-fast-solid.svg'
import payment from '../../../static/hand-holding-usd-solid.svg'

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

const HowItReallyWorks: React.FC = () => {
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
                        How it works?
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
                                        src={signup}
                                        alt="suitcase"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        Signup to create an account or raise a
                                        one time request
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    <img
                                        src={request}
                                        alt="graph"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        Request a pick up for your dry waste
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    <img
                                        src={pickup}
                                        alt="clock"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        We will pick up the waste at your
                                        doorstep
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    <img
                                        src={payment}
                                        alt="clock"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        Get paid !!!
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

export default HowItReallyWorks
