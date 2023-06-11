
import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import BaseRequestPost from '../../helpers/BaseRequestPost ';

export default function AddTour() {
    document.title= `Datiuli - Add Tour`

    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState<any>({

        name: '',
        placeOfDeparture: '',
        phone: '',
        country: '',
        duration: '',
        level: '',
        age: '',
        description: '',
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
        //alert('bbbb');
        setSubmitted(true);
        console.log("data sent to server////", formData);

        BaseRequestPost('hotels/addHotel', formData).then(res => {
            console.log("sign up response", res);
            if (res.success) {
                setSubmitted(true);
                const data = {
                    id: res,
                    name: formData.name,
                    placeOfDeparture: formData.placeOfDeparture,
                    phone: formData.phone,
                    duration: formData.duration,
                    level: formData.level,
                    age: formData.age,
                    description: formData.description

                }
                setFormData(data);
                console.log("dataaaaa", data);
                //toMyAccount(data);
            }
            else {

            }
        }
        ).catch(e => console.log(e))
    }

    return (
        <div>
            <Button variant="outlined" color="primary" className="addService" onClick={handleClickOpen}>
                Add Tour
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Add Tour</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Tour
                     </DialogContentText>

                    <ValidatorForm noValidate
                        ref={formRef}
                        onSubmit={handleSubmit}>
                        <TextValidator
                            autoFocus
                            onChange={handleChange}
                            required
                            //width="40%"
                            margin="dense"
                            id="Name"
                            name="name"
                            label="Guide"
                            type="text"
                            // onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.name}
                        //fullWidth
                        />
                        <br></br>
                        <TextValidator
                            autoComplete="fname"
                            autoFocus
                            required
                            margin="dense"
                            id="placeOfDeparture"
                            name="placeOfDeparture"
                            label="Place Of Departure"
                            type="text"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.address}

                        />

                        <br></br>
                        <TextValidator
                            autoFocus
                            required
                            margin="dense"
                            id="Phone"
                            name="phone"
                            label="Phone Guide"
                            type="text"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.phone}

                        />
                        <br></br>
                        <TextValidator
                            autoFocus
                            required
                            margin="dense"
                            id="duration"
                            name="duration"
                            label="Duration"
                            type="text"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.country}
                        />
                        <br></br>
                        <TextValidator
                            autoFocus
                            required
                            margin="dense"
                            id="level"
                            name="level"
                            label="Level"
                            type="text"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.city}
                        />
                        <br></br>
                        <TextValidator
                            autoFocus
                            required
                            margin="dense"
                            id="age"
                            name="age"
                            label="Age"
                            type="text"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.rabbi}
                        />
                        <br></br>
                        <TextValidator
                            autoFocus
                            required
                            margin="dense"
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.nusach}
                        />

                        <br></br>
                
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





























