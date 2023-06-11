
import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import newspaper from '../assets/newspaper.jpg';

export default function FormDialogPassword() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState<any>({

        currentPassword: '',
        newPassword: '',
        verifyPassword: '',


    })
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                Change your password
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change password</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Change your passward
                     </DialogContentText>


                    <ValidatorForm noValidate
                        ref={formRef}
                        onSubmit={handleSubmit}>
                        <TextValidator
                            autoFocus

                            required
                            margin="dense"
                            id="currentPassword"
                            name="currentPassword"
                            label="Current Password"
                            type="password"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.currentPassword}

                        />
                        <br></br>

                        <TextValidator
                            autoFocus
                            required
                            margin="dense"
                            id="newPassword"
                            name="newPassword"
                            label="New Password"
                            type="password"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.newPassword}

                        />

                        <br></br>
                        <TextValidator
                            autoFocus
                            required
                            margin="dense"
                            id="verifyPassword"
                            name="verifyPassword"
                            label="Verify Password"
                            type="password"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.verifyPassword}

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
        </div>
    );
}
