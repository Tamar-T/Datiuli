import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PublicIcon from '@material-ui/icons/Public';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Mycountry from './Mycountries';
import newspaper from '../assets/newspaper.jpg';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 800,
        marginLeft: 400,
    },
});

export default function MyAccount() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const permission = localStorage.getItem('permission');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
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
            <React.Fragment>
                <Mycountry />
                <Paper square
                // className={classes.root}
                >
                    {permission !== "1" ?

                        <Tabs
                            id="ma"
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        >

                            <Tab icon={<PersonPinIcon />} label="PROFILE" />
                            <Tab icon={<VpnKeyIcon />} label="CHANGE PASS" />
                            <Tab icon={<PublicIcon />} label="MY COUNTRIES" />
                            <Tab icon={<DirectionsWalkIcon />} label="MY SERVICES" />
                            <Tab icon={<SlideshowIcon />} label="LAST VIEWED" />

                        </Tabs>
                        : <Tabs
                            id="ma"
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        >

                            <Tab icon={<PersonPinIcon />} label="PROFILE" />
                            <Tab icon={<VpnKeyIcon />} label="CHANGE PASS" />
                            <Tab icon={<PublicIcon />} label="MY COUNTRIES" />
                            <Tab icon={<DirectionsWalkIcon />} label="MY SERVICES" />
                            <Tab icon={<SlideshowIcon />} label="LAST VIEWED" />
                        </Tabs>}
                </Paper>
            </React.Fragment>
        </div>
    );
}
