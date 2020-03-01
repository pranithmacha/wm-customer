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
import mail from '../../../static/envelope-regular.svg'
import phone from '../../../static/phone-solid.svg'

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

const ContactUs: React.FC = () => {
    const classes = useStyles()
    return (
        <div id="mainHeader">
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} className={classes.gridItem}>
                    <Typography variant="h2" className={classes.mainText}>
                        Contact us
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
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                    <img
                                        src={mail}
                                        alt="graph"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        admin@wow.com
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                    <img
                                        src={phone}
                                        alt="clock"
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        040-8157981111
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                        </Grid>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default ContactUs
