import React, { useState, useEffect } from 'react'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
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
import newspaper from '../../assets/newspaper.jpg';
import ChangePassword from './ChangePassword';
import LastViewed from './LastViewed';
import MyTours from './MyServices';
import Profile from './Profile';
import Users from './users'
import { Divider } from '@material-ui/core';
import MyCountries from './MyCountries';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 800,
        marginLeft: 400,
    },
    tabs: {
        position: "fixed",
        bottom: 50,
        //backgroundColor: "#5dc6b3",
        width: "100%",
        right: 0,
        borderTop: "solid 1px #0000008a"
    }
});

const tabs = [{ path: "profile", label: "Profile", icon: <PersonPinIcon /> },
{ path: "change_pass", icon: <VpnKeyIcon />, label: "Change Password" },
{ path: "my_countries", icon: <PublicIcon />, label: "My countries" },
{ path: "my_services", icon: <DirectionsWalkIcon />, label: "My services" },
{ path: "last_viewed", icon: <SlideshowIcon />, label: "Last Viewed" }]


const getTitle = (tab: string) => {
    return tabs.find(item => item.path === tab)?.label;
}

export default function MyAccount(props: any) {
    const classes = useStyles();
    const permission = localStorage.getItem('permission');
    const history = useHistory()
    const params = useParams();
    const tab = history.location.pathname.split("/")[2];

    const handleTabsChange = (event: React.ChangeEvent<{}>, value: string) => {
        history.push('/myAccount/' + value);
    };

    if (!tab) {
        return <Redirect to={'/myAccount/profile'} />;
    }

    document.title = `Datiuli - ${getTitle(tab)}`


    return (
        <div 
        style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "right",
            direction: "rtl",
            padding: '5%',
            height: "100vh"
        }}
        >
            <React.Fragment>
                <div
                // className={classes.root}
                >
                    {tab === "change_pass" && <ChangePassword />}
                    {tab === "last_viewed" && <LastViewed historyArray={props.historyArray} />}
                    {tab === "my_countries" && <MyCountries />}
                    {tab === "my_services" && <MyTours />}
                    {tab === "profile" && <Profile />}
                    {tab === "users" && <Users />}
                    {permission !== "1" ?

                        <Tabs
                            id="ma"
                            value={tab}
                            onChange={handleTabsChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                            className={classes.tabs}
                        >
                            <Divider />
                            <Tab icon={<PersonPinIcon />} value="profile" label="PROFILE" />
                            <Tab icon={<VpnKeyIcon />} value="change_pass" label="CHANGE PASS" />
                            {/* <Tab icon={<PublicIcon />} value="my_countries" label="MY COUNTRIES" /> */}
                            <Tab icon={<DirectionsWalkIcon />} value="my_services" label="MY SERVICES" />
                            <Tab icon={<SlideshowIcon />} value="last_viewed" label="LAST VIEWED" />

                        </Tabs>
                        : <Tabs
                            id="ma"
                            value={tab}
                            onChange={handleTabsChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                            className={classes.tabs}
                        >

                            <Tab icon={<PersonPinIcon />} value="profile" label="PROFILE" />
                            <Tab icon={<VpnKeyIcon />} value="change_pass" label="CHANGE PASS" />
                            <Tab icon={<PublicIcon />} value="my_countries" label="MY COUNTRIES" />
                            <Tab icon={<DirectionsWalkIcon />} value="users" label="USERS" />
                            <Tab icon={<SlideshowIcon />} value="last_viewed" label="LAST VIEWED" />
                        </Tabs>
                    }
                </div>
            </React.Fragment>
        </div>
    );
}







