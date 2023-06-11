import { Avatar, Button, Container, CssBaseline, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(7),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        padding:theme.spacing(2)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function ChangePassword() {
    const [state, setState] = useState<any>({});
    const classes = useStyles();

    const handleChange = (e: any) => {
        let value = e.target.value, name = e.target.name;
        setState(((prevState: any) => ({ ...prevState, [name]: value })));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Change Password
            </Typography>
        <form dir="ltr" className={classes.form} onSubmit={handleSubmit}>
            <TextField onChange={handleChange} label="Last Password" type="password" name="last_password" variant="outlined" margin="normal" fullWidth />
            <TextField onChange={handleChange} label="New Password" type="password" name="new_password" variant="outlined" margin="normal" fullWidth />
            <TextField onChange={handleChange} label="Confirm Password" type="password" name="confirm_password" variant="outlined" margin="normal" fullWidth />
            <Button fullWidth variant="contained" color="primary" type="submit">Update Password</Button>
        </form>
        </div>
        </Container>
    )
}
