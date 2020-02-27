import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from './Typography'
import signup from '../../src/static/address-card-solid.svg'
import request from '../../src/static/paper-plane-solid.svg'
import pickup from '../../src/static/shipping-fast-solid.svg'
import payment from '../../src/static/hand-holding-usd-solid.svg'

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
        item: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(0, 5)
        },
        title: {
            marginBottom: theme.spacing(14)
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
        curvyLines: {
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7
        },
        button: {
            marginTop: theme.spacing(8)
        }
    })
)

const HowItWorks = (props: any) => {
    const classes = useStyles()

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src="/static/themes/onepirate/productCurvyLines.png"
                    className={classes.curvyLines}
                    alt="curvy lines"
                />
                <Typography
                    variant="h4"
                    marked="center"
                    className={classes.title}
                    component="h2"
                >
                    Make money out of Waste
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                <div className={classes.number}>1.</div>
                                <img
                                    src={signup}
                                    alt="suitcase"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    Signup to create an account
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                <div className={classes.number}>2.</div>
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
                                <div className={classes.number}>3.</div>
                                <img
                                    src={pickup}
                                    alt="clock"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    We will pick up the waste at your doorstep
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                <div className={classes.number}>4.</div>
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
    )
}

export default HowItWorks
