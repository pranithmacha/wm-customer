import React, { useState } from 'react'
import { Container, Paper, Grid, Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        container: {
            marginTop: 100,
            maxWidth: 'lg'
        }
    })
)

const TextFieldStyle = {
    marginLeft: 40,
    width: '70%'
}

const LoginFormStyle = {
    marginTop: 100,
    marginLeft: 300
}

const ButtonStyle = {
    marginLeft: 40,
    marginTop: 30
}

const Login: React.FC = () => {
    const classes = useStyles()

    const [loginForm, setLoginForm] = useState({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e
        setLoginForm({ ...loginForm, [name]: value })
    }

    const signup = () => {
        window.location.href = '/signup'
    }

    const requestForm = () => {
        window.location.href = '/requestForm'
    }

    return (
        <Container className={classes.container}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={8}>
                    <TextField
                        required
                        id="username"
                        name="username"
                        label="Username"
                        placeholder="Username"
                        onChange={handleChange}
                        style={TextFieldStyle}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        style={TextFieldStyle}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={ButtonStyle}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={ButtonStyle}
                        onClick={signup}
                    >
                        Signup
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={ButtonStyle}
                        onClick={requestForm}
                    >
                        RequestForm
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
