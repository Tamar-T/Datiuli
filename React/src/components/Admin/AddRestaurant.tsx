
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

export default function AddRestaurant() {
    document.title= `Datiuli - Add Restaurant`

    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState<any>({

        name: '',
        address: '',
        phone: '',
        country: '',
        city: '',
        cosher: '',


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
                    address: formData.address,
                    phone: formData.phone,
                    country: formData.country,
                    cosher: formData.cosher,
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
                Add Restaurant
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Add Restaurant</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Restaurant
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
                            label="Name"
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
                            id="Address"
                            name="address"
                            label="Address"
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
                            label="Phone"
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
                            id="Country"
                            name="country"
                            label="Country"
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
                            id="City"
                            name="city"
                            label="City"
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
                            id="Cosher"
                            name="cosher"
                            label="Cosher"
                            type="text"
                            onChange={handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={formData.cosher}
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





























