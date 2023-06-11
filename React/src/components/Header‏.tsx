import React, { useState } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
//import LanguageIcon from '@material-ui/icons/Language';
import { lightBlue } from '@material-ui/core/colors';
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuList, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Location from '../assets/Location.png';


const useStyles = makeStyles((theme: Theme) =>

    createStyles({

        // body: {
        //     position: 'fixed',
        //     top: '0%',
        //     zIndex: 1000,
        //     backgroundColor: '#46867b‏'


        // },
        grow: {
            flexGrow: 1,
        },
        list: {

            width: 250,

        },
        listDrawer: {
            height: '94%',
            marginTop: '6%'
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        /*         search: {
                    position: 'relative',
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: fade(theme.palette.common.white, 0.15),
                    '&:hover': {
                        backgroundColor: fade(theme.palette.common.white, 0.25),
                    },
                    marginRight: theme.spacing(2),
                    marginLeft: 0,
                    width: '100%',
                    [theme.breakpoints.up('sm')]: {
                        marginLeft: theme.spacing(3),
                        width: 'auto',
                    },
                },
                searchIcon: {
                    padding: theme.spacing(0, 2),
                    height: '100%',
                    position: 'absolute',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, */
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        HomeIcon: {
            padding: theme.spacing(0, 200),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        Location: {
            // padding: theme.spacing(1, 92),
            height: '80%',
            // width: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 6
        },
        /* Icon: {
            padding: theme.spacing(0, 200),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, */
    }),
);

export default function Header() {
    const history = useHistory();
    const classes = useStyles();
    const user = useSelector((state: any) => state.userState.user);
    const [open, setOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const permission = localStorage.getItem('permission');
    const navigate = (link: string) => {
        history.push(link);
    }

    const toLogOut = (e: any) => {

        localStorage.setItem('email', "null");
        localStorage.setItem('password', "null");
        localStorage.setItem('permission', "null");
        history.push(`/`)
    }

    const toSingUp = (e: any) => {
        history.push(`/signup`)
    }
    const toMYAccount = (route: string) => {
        history.push(`/myAccount${route}`)
    }

    const toHome = (e: any) => {
        history.push(`/home`)
    }
    const drawerStyle = {
        height: '94%',
        marginTop: '6%'
    };
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setMenuOpen(open)

    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ fontStyle: 'oblique', fontFamily: 'inherit', color: '#F50057', }}
        >
            <List>
                {[
                    { text: 'Home', link: '/home' },
                    { text: 'Countries', link: '/country' },
                    { text: 'Nearby', link: '/InRadius' },
                    { text: 'Times of Halacha', link: '/time' },
                    { text: 'Weather', link: '/Weather' },
                    { text: 'Betei Chabad', link: '/Chabad' },
                    { text: 'About Us', link: '/About' },
                    { text: 'Our Team', link: '/Team' },
                    { text: 'Terms', link: '/terms' },
                    { text: 'Privacy', link: 'privacy' },
                    { text: 'Help', link: '/contact' },
                    { text: 'Contact', link: '/contact' },
                    // { text: 'My account', link: '/myAccount' },
                ].map((item, index) => (
                    <ListItem button key={item.text} onClick={() => navigate(item.link)}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={item.text} />

                    </ListItem>
                ))}


            </List>
            <Divider />
            {/* <List>
                {[{text:'ALL MAILS',link:'mails'}, 'Trash', 'Spam'].map((item, index) => (
                    <ListItem button key={item.text} onClick={()=>navigate(item.link)}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> 
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };



    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ backgroundColor: '#5dc6b3' }}>
                <Toolbar>
                    <React.Fragment key={'left'}>
                        <Button
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer className={classes.listDrawer} anchor={'left'} open={menuOpen} onClose={toggleDrawer(false)} style={drawerStyle} >
                            {list()}
                        </Drawer>
                    </React.Fragment>
                    {/* <IconButton>
                        edge="start"
                        className={classes.menuButton}
                        aria-controls={drawerId}
                        color="inherit"
                        aria-label="open drawer"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography className={classes.title} variant="h6" noWrap>
                        Datiuly
                    </Typography>
                    {/* <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div> */}
                    <div style={{
                        marginRight: 80,
                        marginLeft: 20
                    }}>
                        <img className={classes.Location} src={Location} alt="Location" />
                    </div>
                    {user && user.userName && <Typography>Hello {user.userName}</Typography>}
                    <div className={classes.grow} />
                    {/*                     <div className={classes.sectionDesktop}>
                        <IconButton aria-label="homePage" aria-haspopup="true" color="inherit" onClick={toHome} >
                            <HomeIcon />
                        </IconButton>
                    </div> */}
                    {/* <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div> */}
                    <div onMouseOver={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}>
                        <Button
                            ref={anchorRef}
                            aria-label="account of current user"
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            color="inherit"

                        >
                            <AccountCircle />
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList style={{ fontStyle: 'oblique', fontFamily: 'inherit', color: '#F50057', }} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                {permission === "null" && <MenuItem onClick={toSingUp}>Sign In\Sign Up</MenuItem>}
                                                {permission !== "null" && <MenuItem onClick={toLogOut}>Log Out</MenuItem>}
                                                {permission !== "null" && <MenuItem onClick={() => toMYAccount("/profile")}>Profile</MenuItem>}
                                                {permission !== "null" && <MenuItem onClick={() => toMYAccount("/change_pass")}>Password</MenuItem>}
                                                {permission !== "null" && <MenuItem onClick={() => toMYAccount("/my_countries")}>My Countries</MenuItem>}
                                                {/* {permission !== "null" && <MenuItem onClick={() => toMYAccount("/my_services")}>My Services</MenuItem>} */}
                                                {permission !== "null" && <MenuItem onClick={() => toMYAccount("/last_viewed")}>Last Viewed</MenuItem>}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="homePage" aria-haspopup="true" color="inherit" onClick={toHome} >
                            <HomeIcon />
                        </IconButton>
                    </div>
                    {/* <IconButton aria-label="Lang" aria-haspopup="true" color="inherit" >
                        <LanguageIcon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu}
            {renderDrawer}
            {renderMenu}  */}
        </div >
    );
}
