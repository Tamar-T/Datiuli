import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import newspaper from '../../assets/newspaper.jpg';
import BaseRequestPost from '../../helpers/BaseRequestPost ';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function Contact() {
    document.title = `Datiuli - Contact`

    const classes = useStyles();
    const [data, setData] = useState<any>({

        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        contactUs: '',



    })

    const handelChange = (event: any) => {
        let fd = { ...data };
        fd[event.target.name] = event.target.value;
        setData(fd)
    }

    const toSend = () => {
        alert('הטופס נשלח בהצלחה')
        BaseRequestPost('mail/sendUserMail', data).then(res => {
            if (res.success) {
                const d = {
                    id: res,
                    firstName: data.firstName + ' ' + data.lastName,
                    from: data.email,
                    text:data.contactUs
                }
                setData(d)
            }
            else {

            }
        }).catch(e => console.log(e))
    }

    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "center",
            padding: '2%',
        }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        contact
        </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={data.firstName}
                                    onChange={handelChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handelChange}
                                    value={data.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    // required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handelChange}
                                    value={data.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    //required
                                    fullWidth
                                    name="phone"
                                    label="Phone"
                                    type="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    onChange={handelChange}
                                    value={data.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="contact us"
                                    name="contactUs"
                                    label="Contact us"
                                    multiline
                                    rows={7}
                                    //    defaultValue="contact us..."
                                    variant="outlined"
                                    aria-label="contact us"
                                    fullWidth
                                    onChange={handelChange}
                                    value={data.contactUs}
                                />
                            </Grid>

                            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={toSend}
                        >
                            Contact Us
          </Button>

                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        </div>
    );
}
