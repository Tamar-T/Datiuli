
import React, { useState, useRef, useEffect, Dispatch } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import BaseRequest from '../../helpers/BaseRequest';
import newspaper from '../../assets/newspaper.jpg';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../state/ActionCreator';

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function SignIn() {
    document.title="Datiuli - Sign In"

    const history = useHistory();
    const dispatch: Dispatch<any> = useDispatch();

    // const [formData, setFormData] = useState<any>({
    //     email: '',
    //     password: '',
    // })
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    const toSingUp = (e: any) => {
        history.push(`/signup`)
    }
    // const toMyAccount = (user:{}) => {
    //     //  localStorage.setItem()
    //  //   localStorage.getItem()
    //     history.push(`/myAccount`);
    // }
    const toMyAccount = () => {
        BaseRequest(`users/logIn/${email}/${password}`).then((res) => {
            const stringData = JSON.stringify(res);
            dispatch(updateUser(res));
            localStorage.setItem('user', stringData);
            localStorage.setItem('email', res.email);
            localStorage.setItem('password', res.password);
            localStorage.setItem('permission', res.permission);
            if (localStorage.getItem('email') !== 'undefined')
                history.push("/myAccount");
        }).catch((e) => {
            console.log(e)
        })
    }
    useEffect(() => {
        if (submitted)
            setTimeout(() => setSubmitted(false), 5000);

    }, [submitted]);
    // const handleChange = (event: any) => {
    //     let fd = { ...formData };
    //     fd[event.target.name] = event.target.value;
    //     setFormData(fd);
    // }
    const handleSubmit = () => {
        setSubmitted(true);
        // toMyAccount{formData} //!!!!
    }
    const classes = useStyles();
    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "right",
            direction: "rtl",
            padding: '2%',
        }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                </Typography>
                    <ValidatorForm className={classes.form} noValidate
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <TextValidator
                            variant="outlined"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            autoComplete="email"
                            onChange={(e: any) => setEmail(e.target.value)}
                            //  onChange={handleChange}
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                        <br />
                        <TextValidator
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e: any) => setPassword(e.target.value)}
                            //onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={password}
                        />
                        <br />
                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            type="submit"
                            // disabled={submitted}
                            onClick={toMyAccount}
                        >
                            {
                                (submitted && 'No email or paswoord correct')
                                || (!submitted && 'Submit')
                            }
                        </Button>
                    </ValidatorForm>
                    <br />
                    <Grid container>
                        < Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                onClick={toSingUp}
                                className="Link"
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        </div>
    );
}
