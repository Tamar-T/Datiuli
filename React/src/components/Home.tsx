
import React, { useState, useEffect } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import globe from '../assets/aircraft.jpg';
import wheel from '../assets/wheel.jpg';
import watch from '../assets/watch.jpg';
import aircraft from '../assets/aircraft.jpg';
import book from '../assets/book.jpg';
import writing from '../assets/writing.jpg';
import newspaper from '../assets/newspaper.jpg';
import { useHistory } from 'react-router-dom';


const images = [
    {
        url: globe,
        title: 'Countries',
        width: '25%',
        link: '/country'
    },
    {
        url: wheel,
        title: 'Nearby',
        width: '25%',
        link: '/InRadius'
    },
    {
        url: watch,
        title: 'Times of Halacha',
        width: '25%',
        link: '/time'
    },
    {
        url: aircraft,
        title: 'Weather',
        width: '25%',
        link: '/weather'
    },
    {
        url: book,
        title: 'About Us',
        width: '25%',
        link: '/about'
    },
    {
        url: writing,
        title: 'Contact',
        width: '25%',
        link: '/contact'
    },
];


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        /*         backImage: {
                    backgroundImage: newspaper,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }, */
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 600,
            width: '100%',
            /*  backgroundImage: newspaper,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat', */
        },
        image: {
            position: 'relative',
            height: 200,
            [theme.breakpoints.down('xs')]: {
                width: '100% !important', // Overrides inline-style
                height: 100,
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                '& $imageMarked': {
                    opacity: 0,
                },
                '& $imageTitle': {
                    border: '4px solid currentColor',
                },
            },
        },
        focusVisible: {},
        imageButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            flexGrow: 2,
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        imageSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            position: 'absolute',
            left: 5,
            right: 5,
            top: 5,
            bottom: 5,
            backgroundColor: theme.palette.common.black,
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
            height: 3,
            width: 18,
            backgroundColor: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        },
    }),
);

export default function HomePage() {
    document.title="Datiuli - Home"

    const classes = useStyles();
    const history = useHistory();
    const navigate = (link: string) => {
        history.push(link);
    }

    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            //width: '100%',
            //height: '1000px',
        }}>
            <div className={classes.root} style={{ marginLeft: '18%' }}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        onClick={() => navigate(image.link)}
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                            height: '250px',
                            margin: '80px',
                        }}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                                {image.title}
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
        </div>
    );
}

/* function HomePage() {
    return (
        <>
            HomePage
        </>
    );
}

export default HomePage; */
