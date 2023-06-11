import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import newspaper from '../assets/newspaper.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export default function Footer() {
    const classes = useStyles();

    return (
        <footer style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            bottom: 0,
            position: "fixed",
            width: "100%",
            zIndex:1,
        }}>
            <div className={classes.root} style={{ textAlign: 'center', color: '#5dc6b3' }}>
                <Button to="/Terms" component={Link} color="secondary">
                    Terms of Use
            </Button>
                <Button to="/Privacy" component={Link} color="secondary">
                    Privacy Policy
            </Button>
                <Button to="/Contact" component={Link} color="secondary">
                    Help
            </Button>
                <Button to="/Contact" component={Link} color="secondary">
                    Contact Us
            </Button>
            </div>
        </footer>
    )
}