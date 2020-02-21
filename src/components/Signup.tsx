import React, { useState } from 'react';
import { Container, Paper, Grid, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        }
    })
);

const TextFieldStyle = {
    marginLeft: 40,
    width: '50%'
};

const LoginFormStyle = {
    marginTop: 100
};

const ButtonStyle = {
    marginLeft: 40,
    marginTop: 30
};

const Signup: React.FC = () => {
    const classes = useStyles();

    const [loginForm, setLoginForm] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e;
        setLoginForm({ ...loginForm, [name]: value });
    };

    return (
        <Container>
            <Paper style={LoginFormStyle} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="firstname"
                            name="firstname"
                            label="Firstname"
                            placeholder="Firstname"
                            onChange={handleChange}
                            style={TextFieldStyle}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="lastname"
                            name="lastname"
                            label="Lastname"
                            placeholder="Lastname"
                            onChange={handleChange}
                            style={TextFieldStyle}
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            placeholder="Email"
                            type="email"
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
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Signup;
