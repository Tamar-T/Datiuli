import { makeStyles } from '@material-ui/core';
import React from 'react'
import { HeadCell } from '../../interfaces/HeadCell.interface';
import CustomTable from '../DataTables/Table'

const useStyles = makeStyles((theme) => ({
    div:{
      "& #Table":{
        display:"block",
        "& #table":{         
          "& .MuiTablePagination-root":{
             display:"none",
          }   
        }
      }
    }
  }));

const headCells: HeadCell[] = [
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

const myToursList = [{
    id: 46,
    name: "City of David",
    typeOfService: 4,
    phone: "0554448899",
    address: "Ma’alot Ir David Street",
    city: "Jerusalem",
    country: "Israel",
    "area ID": "9710600",
    guide: "Nadav ",
    phoneGuide: "0586669393",
    placeOfDeparture: "Entrance to the reserve",
    duration: "2-2.5 hours",
    level: "family fun",
    age: "+5",
    description: null,
    zipCode: "55",
    radius: 20,
  },
  {
    id: 47,
    name: "Kol Shofar",
    typeOfService: 4,
    phone: "0737823272",
    address: "Givat Yoav",
    city: "Ramat HaGolan",
    country: "Israel",
    "area ID": "1294600",
    guide: "Shimon Keinan",
    phoneGuide: "0521114747",
    placeOfDeparture: "factory",
    duration: "1 hour",
    level: " easy",
    age: "No age limit",
    description:
      "מפעל משפחתי לייצור שופרות.המספק הצצה נדירה לעולם ייצור השופרות.",
    zipCode: "55",
    radius: 20,
  },
  {
    id: 48,
    name: "Beit HaTfuztot",
    typeOfService: 4,
    phone: "073-7824030",
    address: "Tel Aviv University Campus-Klausner Street",
    city: "Tel Aviv ",
    country: "Israel",
    "area ID": "6901100",
    guide: "Israel",
    phoneGuide: "0536663636",
    placeOfDeparture: "museum lobby",
    duration: "4-5 hour",
    level: " profound",
    age: "No age limit",
    description:
      "מוזיאון העם היהודי, מספר על תרבות העם היהודי ומהווה מוסד עולמי ולו תפקיד חשוב בחיזוק הזהות היהודית ובהנצחת המורשת היהודית בעולם כולו.",
    zipCode: "55",
    radius: 20,
  },
  {
    id: 49,
    name: "Kal Daat",
    typeOfService: 4,
    phone: "073-782-4149",
    address: "1 HaTayarut St.",
    city: " Moshav Aloni HaBashan",
    country: "Israel",
    "area ID": "1241200",
    guide: " Michael",
    phoneGuide: "0511112323",
    placeOfDeparture: "Entrance to the reserve",
    duration: "1-2 hours",
    level: " hard",
    age: "+16",
    description: "טיולי סגווי שטח בגולן",
    zipCode: "55",
    radius: 20,
  },
  {
    id: 50,
    name: "De Karina",
    typeOfService: 4,
    phone: "073-782-3551",
    address: "",
    city: "Kibbutz Ein Zivan",
    country: "Israel",
    "area ID": "1242600",
    guide: "Yoav",
    phoneGuide: "0524447896",
    placeOfDeparture: "factory",
    duration: "1-2 hour",
    level: "easy & fun",
    age: "+3",
    description: "במפעל שוקולד דה-קרינה תוכלו לצאת לסיור בעולם השוקולד",
    zipCode: "55",
    radius: 20,
  },
  {
    id: 51,
    name: "Coca-Cola Sensory Center",
    typeOfService: 4,
    phone: "073-782-4597",
    address: "Rabbi Kahneman 129",
    city: "Bnei Brak",
    country: "Israel",
    "area ID": "5155366",
    guide: " Natan",
    phoneGuide: "0523332145",
    placeOfDeparture: "factory",
    duration: "1.5 hours",
    level: "easy & fun",
    age: "+7",
    description:
      'הסיפור של קוקה-קולה, מהיום שבו הומצא המשקה בבית המזיגה של ד"ר פמברטון, דרך הסיפור הגלובאלי, הזווית הישראלית, עולמות התוכן של המותג וסיור באחד מקווי הייצור החדשניים והמתקדמים ביותר בעולם.',
    zipCode: "55",
    radius: 20,
  },
];

export default function MyTours() {
    const classes = useStyles();
    return (
        <div className={classes.div}>
         <CustomTable headCells={headCells} rows={myToursList} />
         </div>
    )
}
