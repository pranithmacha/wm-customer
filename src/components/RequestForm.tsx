import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'
import { Paper, Grid, TextField, InputAdornment } from '@material-ui/core'

interface TabPanelProps {
    children?: React.ReactNode
    dir?: string
    index: any
    value: any
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%'
    }
}))

const RequestForm: React.FC = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = React.useState(0)

    const tabOneValues = [
        { material: 'Cardboard', unitPrice: '5' },
        { material: 'Books', unitPrice: '7' }
    ]

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index: number) => {
        setValue(index)
    }

    return (
        <Paper elevation={3}>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Paper" {...a11yProps(0)} />
                        <Tab label="Metal" {...a11yProps(1)} />
                        <Tab label="Plastic" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Grid container spacing={3}>
                            {tabOneValues.map(item => (
                                <>
                                    <Grid item xs={3} md={3}>
                                        <TextField
                                            id="type"
                                            name="username"
                                            label="Material"
                                            value={item['material']}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            label="Weight"
                                            id="standard-start-adornment"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        Kg
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            label="Unit Price"
                                            id="unit_price"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        Rs
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={item['unitPrice']}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            label="Total"
                                            id="unit_price"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        Rs
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={'10'}
                                        />
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>
            </div>
        </Paper>
    )
}

export default RequestForm
