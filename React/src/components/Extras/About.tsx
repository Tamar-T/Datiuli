import React from 'react'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import newspaper from '../../assets/newspaper.jpg';
import group from '../../assets/group.png';
import Team from './Team';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const images = [
    {
        borderRadius: '50%',
        url: group,
        title: 'Team',
        width: '20%',
        link: '/team'
    }
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
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
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
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
    document.title = `Datiuli - About`

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
            textAlign: "center",
            direction: "ltr",
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
                marginBottom: '5%',
                textAlign: "center",
            }}>
                ABOUT US
            </h2>
            <div style={{
                textAlign: "left",
                direction: "ltr",
                //padding: '10%',
                //marginTop: '5%'
            }}>
                <p>&nbsp;
                    <strong>Hey, welcome!</strong>
                    <br />
                    We are Tamar and Tehila the actual planners and executors of this amazing site in front of you.
                </p>
                <p>&nbsp;
                    A site that is the fruit of a determined dream to turn the ultra-Orthodox vacation anywhere in the world into an easier, more comfortable and more pampering experience.
                </p>
                <p>&nbsp;
                    <strong>  So how did it all start? </strong>
                    <br />
                    What is clear is that nothing started on the day the facilitator announced to present her with ideas for a final project, but much earlier ...
                </p>
                <p>&nbsp;
                    Well, the authority to speak to Tamar:
                </p>
                <p>&nbsp;
                    I am Tamar, the eldest of five, in a family that travels a lot and has been almost everywhere - at least in our small country.
                </p>
                <p>&nbsp;
                    I not only love hiking but also really good at it, so I am officially responsible for planning family trips.
                </p>
                <p>&nbsp;
                    My family loves hiking and it is important to note - also observant, which challenges travel planning.
                </p>
                <p>&nbsp;
                    As the person in charge of planning the trips at home, I found a way to travel and even enjoy despite these challenges.
                </p>
                <p>&nbsp;
                    I discovered that even Sabbath-keeping and kosher people can travel the world, just what? The craft of gathering information and planning a route where the waypoints match our lifestyles is a bit difficult and not really exhaustive.
                </p>
                <p>&nbsp;
                    You find yourself trying to gather information here and there, the name of a friend who has returned from abroad and here a family member ... and receives partial, unmapped, incomplete and certainly not verifiable information.
                </p>
                <p>&nbsp;
                    Usually you go out on an limb - whatever it is will be good, we'll get along ... and in reality - sometimes get along and sometimes come back with tattered stories to tell the guys (you'll also get something good :-)
                </p>
                <p>&nbsp;
                    But luck can not always be relied upon, which is also never worth it, especially if traveling to a more distant place or with children.
                </p>
                <p>&nbsp;
                    This site has come to fill this gap. It was established to provide a practical and reliable solution for observant travelers around the world. The site provides access to a lot of information, divided into categories, such as kosher shops and restaurants - with all the details up to the level of kosher, kosher hotels, synagogues and prayer quorums and more.
                </p>
                <p>&nbsp;
                    Apart from the site's administrators, all those responsible for the content are rabbis and Chabad emissaries from all over the world who contribute to us from their vast experience in dealing with local conditions, because our ultimate goal is to provide ultra-Orthodox surfers with as reliable and quality information about every Jewish point in the globe.
                </p>
                <p>&nbsp;
                    Thus, among other things, the site contributes to the connection between the private Jew and the Jewish communities around the world, as well as contributes to the connection between them and collaborations.
                </p>
                <p>&nbsp;
                    We have done everything to make the use as enjoyable and effective as possible, hope you enjoy and we would love to hear from you ...
                    <Button to="/Contact" component={Link} color="secondary">
                        Contact Us
                    </Button>
                </p>
                <p>&nbsp;
                   <strong>Have a good vocation!</strong>
                </p>
            </div>
            <div>
                <p>&nbsp;
                    <br />
                    <u>Photos on the site courtesy of:</u>
                    <br />
                    <br />
                    <a href="https://www.pexels.com/">pexels</a>‏
                    <br />
                    <a href="https://pixabay.com/">pixabay</a>‏
                    <br />
                    <a href="https://unsplash.com/">unsplash</a>‏
                    <br />
                    <a href="https://www.freepik.com/">freepik</a>‏
                </p>
            </div>
            <div className={classes.root} style={{ marginLeft: '33%', marginBottom: '-15%' }}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        onClick={() => navigate(image.link)}
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            borderRadius: "50%",
                            width: image.width,
                            height: '235px',
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
    )
};