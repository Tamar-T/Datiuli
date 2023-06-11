import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomTable from './../DataTables/Table';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordionDetails: {
        "& #Table": {
            display: "block",
            "& #table": {
                "& .MuiTablePagination-root": {
                    display: "none",
                }
            }
        }
    }
}));

const headCellsHotel = [
    { id: 'name', label: ' Name', },
    { id: 'address', label: 'Address', },
    { id: 'phone', label: 'Phone', },
    { id: 'city', label: 'City', },
    { id: 'manager', label: 'Manager', },
    { id: 'stars', label: 'Stars', },

];

const headCellsRestuarnt = [
    { id: 'name', label: ' Name', },
    { id: 'address', label: 'Address', },
    { id: 'phone', label: 'Phone', },
    { id: 'city', label: 'City', },
    { id: 'cosher', label: 'Cosher', },
];

const headCellsAttraction = [
    { id: 'name', label: ' Name', },
    { id: 'address', label: 'Address', },
    { id: 'phone', label: 'Phone', },
    { id: 'city', label: 'City', },
    { id: 'typeOfActivity', label: 'TypeOfActivity', },

];

const headCellsTour = [
    { id: 'name', label: ' Name', },
    { id: 'address', label: 'Address', },
    { id: 'city', label: 'City', },
    { id: 'guide', label: ' Guide', },
    { id: 'phoneGuide', label: 'Phone Guide', },
    { id: 'placeOfDeparture', label: 'Place Of Departure', },
    { id: 'duration', label: 'Duration', },
    { id: 'level', label: 'Level', },
    { id: 'age', label: 'Age', },
    { id: 'description', label: 'Duscription' },
];

const headCellsSynagogue = [
    { id: 'name', label: ' Name', },
    { id: 'city', label: 'City', },
    { id: 'address', label: 'Address', },
    { id: 'phone', label: 'Phone', },
    { id: 'rabbi', label: 'Rabbi', },
    { id: 'nusach', label: 'Nusach', },
    { id: 'community', label: 'Community', }
];

const headCellsLecture = [
    { id: 'name', label: ' Name', },
    { id: 'address', label: 'Address', },
    { id: 'phone', label: 'Phone', },
    { id: 'city', label: 'City', },
    { id: 'lecturer', label: 'Lecturer', },
    { id: 'subject', label: 'Subject', },
    { id: 'date', label: 'Date', },
    { id: 'time', label: 'Time', },
    { id: 'duration', label: 'Duration', },
    { id: 'synagogue', label: 'Synagogue', },
];


const images = [
    {
        title: 'Hotels',
        width: '25%',
        link: 'hotel',
        id: 1,
        headCells: headCellsHotel
    },
    {
        title: 'Restuarnts',
        width: '25%',
        link: 'restaurant',
        id: 2,
        headCells: headCellsRestuarnt

    },
    {
        title: 'Attractions',
        width: '25%',
        link: 'tour',
        id: 4,
        headCells: headCellsAttraction
    },
    {
        title: 'Tours',
        width: '25%',
        link: 'tour',
        id: 4,
        headCells: headCellsTour
    },
    {
        title: 'Synagogues',
        width: '25%',
        link: 'synagogue',
        id: 5,
        headCells: headCellsSynagogue


    },
    {
        title: 'Lecturs',
        width: '25%',
        link: 'tour',
        id: 4,
        headCells: headCellsLecture
    },

];


export default function TourInRadiuesResult({ list }) {
    console.log(list)
    const classes = useStyles();

    const getListArrayGrouped = () => {
        let array = list||[];
        return array.reduce((r, a) => {
            r[a.typeOfService] = [...r[a.typeOfService] || [], a];
            return r;
           }, {});           
    }


    return (
        <div className={classes.root}>
            {images.map(image => <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{image.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    {getListArrayGrouped()[image.id] && <CustomTable headCells={image.headCells} rows={getListArrayGrouped()[image.id]} />}
                </AccordionDetails>
            </Accordion>
            )}
        </div>
    );
}