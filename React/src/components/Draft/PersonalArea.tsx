

import React, { useState, useRef, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import newspaper from '../assets/newspaper.jpg';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState<any>({
        name: '',
        email: '',
        country: '',
        language: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    useEffect(() => {
        if (submitted)
            setTimeout(() => setSubmitted(false), 5000);
    }, [submitted]);

    const handleChange = (event: any) => {
        let fd = { ...formData };
        fd[event.target.name] = event.target.value;
        setFormData(fd)
    }

    const handleSubmit = () => {
        setSubmitted(true);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "right",
            direction: "rtl",
            padding: '10%',
        }}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Edit your personal information
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Personal Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your personal information
          </DialogContentText>
                    <ValidatorForm noValidate
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                        />
                        <br />
                        <TextValidator
                            autoFocus
                            margin="dense"
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            onChange={handleChange}
                            value={formData.email}
                            validators={['isEmail']}
                            errorMessages={['email is not valid']}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="country"
                            label="Country"
                        />
                        <br></br>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="language"
                            label="Language"
                        />
                        <br />
                        < TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                         </Button>
                            <Button
                                fullWidth
                                color="primary"
                                //variant="contained"
                                type="submit"
                                disabled={submitted}
                            >
                                {
                                    (submitted && 'Your form is submitted!')
                                    || (!submitted && 'Submit')
                                }
                            </Button>

                        </DialogActions>
                    </ValidatorForm>
                </DialogContent>


            </Dialog>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
