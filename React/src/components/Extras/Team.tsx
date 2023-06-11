import React from 'react'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import newspaper from '../../assets/newspaper.jpg';
import Tamar from '../../assets/Tamar.jpg';
import Tehila from '../../assets/Tehila.jpg';


const images = [
    {
        borderRadius: '50%',
        url: Tamar,
        title: 'Tamar',
        width: '25%',

    },
    {
        borderRadius: '50%',
        url: Tehila,
        title: 'Tehila',
        width: '25%',
    }
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            //display: 'flex',
            //flexWrap: 'wrap',
            minWidth: 600,
            width: '100%',
        },
        image: {
            position: 'relative',
            borderRadius: '50%',
            height: 200,
            [theme.breakpoints.down('xs')]: {
                borderRadius: '50%',
                width: '100% !important', // Overrides inline-style
                height: 100,
            },
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                /*                 '& $imageMarked': {
                                    opacity: 0,
                                }, */
                /*                 '& $imageTitle': {
                                    border: '4px solid currentColor',
                                }, */
            },
        },
        focusVisible: {},
        imageButton: {
            borderRadius: '50%',
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
            borderRadius: '50%',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            borderRadius: '50%',
            position: 'absolute',
            left: 5,
            right: 5,
            top: 5,
            bottom: 5,
            backgroundColor: theme.palette.common.black,
            opacity: 0.25,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            marginBottom: '-40%',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        },
        imageMarked: {
            borderRadius: '50%',
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


export default function About() {
    document.title = `Datiuli - Team`

    const classes = useStyles();

    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "center",
            //direction: "rtl",
            padding: '10%',
        }}>

            <h2 style={{
                fontSize: '350%',
                fontStyle: 'oblique',
                fontFamily: 'serif',
                color: '#F50057',
                fontWeight: 'bold',
                //marginRight: '40%',
                marginTop: '-5%',
                textAlign: 'center',
            }}>
                OUR TEAM
            </h2>
            <div className={classes.root}>
                {images.map((image) => (
                    <div>
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            //focusVisibleClassName={classes.focusVisible}
                            style={{
                                borderRadius: "50%",
                                width: image.width,
                                height: '294px',
                                margin: '100px',
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
                                    {/*<span className={classes.imageMarked} />*/}                            </Typography>
                            </span>
                        </ButtonBase>

                        <div>
                            {(() => {
                                if (image.url === Tamar) {
                                    return (
                                        <div style={{ marginTop: '-5%', textAlign: "center" }} >
                                            <br />
                                            <strong> Tamar Tzuberi‏ <br /></strong>
                                            <p>&nbsp;
                                <br />
                                              A 20-year-old woman lives in Elad
                                <br />
                                                 Works at Cardorex Herzliya
                                <br />
                                            And studying for a degree in computer science

                                                <br />
                                A sworn freak of technology
                                <br />
                                And a hunter of written words.
                                <br />
                                in simple words,
                                <br />
                                Loves reading to learn and discover new worlds.
                            </p>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div style={{ marginTop: '-5%', textAlign: "center" }} >
                                            <br />
                                            <strong> Tehila Refaeli<br /></strong>
                                            <p>&nbsp;
                                <br />
                                            A 20-year-old woman lives in Petah Tikva
                                <br />
                                            Works at Angular in web design
                                <br />
                                             And is studying for a degree in computer science
                                <br />
                                            Cannon performing specific tasks
                                <br />
                                            And strives for them with determination.
                                <br />
                                            in simple words,
                                <br />
                                            Likes to mark as much as possible V in the to-do list.
                            </p>
                                        </div>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
