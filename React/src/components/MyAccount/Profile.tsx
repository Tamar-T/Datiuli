import { Avatar, Button, Container, CssBaseline, Grid, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react'
import countries from '../../assets/json/countries.json';
import PersonIcon from '@material-ui/icons/Person';
import { useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';

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
        padding: theme.spacing(2)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Profile() {
    const classes = useStyles();
    const [state, setState] = useState<any>({});
    const user = useSelector((state: any) => state.userState.user);

    const handleEdit = () => {
        setState({ ...user })
    }

    const handleChange = (event: any) => {
        let name = event.target.name, value = event.target.value;
        setState((prevState: any) => ({ ...prevState, [name]: value }))
    }

    const toSend = (e: any) => {
        e.preventDefault();
        alert('Your details have been successfully updated')
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                <Typography gutterBottom component="h1" variant="h5">
                    Profile
                </Typography>
                <IconButton onClick={handleEdit}><EditIcon /></IconButton>
                {Object.keys(state).length ?
                    <form className={classes.form} onSubmit={toSend} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="userName"
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="userName"
                                    label="First Name"
                                    onChange={handleChange}
                                    value={state.userName}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="userLastname"
                                    label="Last Name"
                                    name="userLastname"
                                    autoComplete="lname"
                                    value={state.userLastname}

                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={state.email}

                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    //required
                                    fullWidth
                                    name="language"
                                    label="Language"
                                    type="text"
                                    id="language"
                                    autoComplete="language"
                                    value={state.language}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    //id="country                
                                    // className={"country "+classes.input }
                                    id="standard-error-helper-text"
                                    options={countries}
                                    value={state.country}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(e, val: any) => handleChange({ target: { value: val ? val.name : "", name: "country" } })}
                                    renderInput={(params) => <TextField onChange={handleChange} name="country" {...params} label="Choose Country" variant="outlined" />}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            update
                        </Button>
                    </form>
                    :
                    <div dir="ltr" style={{marginLeft:'25%', textAlign: "left" }}>
                        <Typography gutterBottom>First Name: {user.userName}</Typography>
                        <Typography gutterBottom>Last Name: {user.userLastname}</Typography>
                        <Typography gutterBottom>E-mail: {user.email}</Typography>
                        <Typography gutterBottom>Language: {user.language}</Typography>
                        <Typography gutterBottom>Country: {user.country}</Typography>
                    </div>
                }</div>
        </Container>
    )
}
