import React from 'react';
import { Avatar, Button, Container, CssBaseline, Grid, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom'
import { HistoryArrayProps } from '../../interfaces/HistoryArrayProps.interface'
import { ListSubheader } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Autocomplete from '@material-ui/lab/Autocomplete';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        float: "left"
        // backgroundColor: theme.palette.background.paper,
    },
    listSubheader: {
        float: "left"
    },
    paper: {
        marginTop: theme.spacing(7),
        marginLeft: theme.spacing(100),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        //padding: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function LastViewed(props: HistoryArrayProps) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            {/*             <List component="nav" aria-label="secondary mailbox folder"
                subheader={
                    <ListSubheader className={classes.listSubheader} component="div" id="nested-list-subheader">
                        Last Viewed
                    </ListSubheader>
                }
            > */}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar style={{ marginLeft:'13%' }} className={classes.avatar}>
                        <SlideshowIcon />
                    </Avatar>
                    <Typography style={{ marginLeft:'8%' }} gutterBottom component="h1" variant="h5">
                        Last Viewed
                    </Typography>
                    {props.historyArray.map((item: any) => <ListItem>
                        <ListItemText style={{marginLeft:'25%', textAlign: "left", width: '30px' }} primary={<Link to={item.pathname}>{item.title}</Link>} />
                    </ListItem>
                    )}
                    {/*</List>*/}
                </div>
            </Container>
        </div>
    );
}
