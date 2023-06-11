
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import countries from '../../assets/json/countries.json'
import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { Button, CircularProgress, makeStyles, Theme, createStyles, Divider } from '@material-ui/core';
//import App from './components/Tehila';
import BaseRequest from '../../helpers/BaseRequest';
import { Country } from '../../interfaces/Country.interface.js';
import Results from './Results';
import SearchIcon from '@material-ui/icons/Search';
import responseSearch from '../../helpers/responseSearch.js';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: "flex",
            alignItems: "center",
        },
        input: {
            marginRight: theme.spacing(1)
        },
        container: {
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(2)
        },
        content: {
            width: "82%"
        }
    }),
);

export default function TourInRadius() {
    document.title="Datiuli - Nearby"

    const [state, setState] = useState({ filters: { country: "", zipCode: "", radius: "" }, filteredArray: [] });
    const classes = useStyles();

    //מערכים לכל השירותים
    const [filteredHotels, setFilteredHotels] = useState<any[]>([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
    const [filteredAttractions, setFilteredAttractions] = useState<any[]>([]);
    const [filteredTours, setFilteredTours] = useState<any[]>([]);    
    const [filteredSynagogues, setFilteredSynagogues] = useState<any[]>([]);
    const [filteredLecturs, setFilteredLecturs] = useState<any[]>([]);

    const [hotels, setHotels] = useState<any[]>([]);
    const [restaurants, setRestaurants] = useState<any[]>([])
    const [Attractions, setAttractions] = useState<any[]>([]);
    const [Tours, setTours] = useState<any[]>([])
    const [synagogues, setSynagogues] = useState<any[]>([]);
    const [Lecturs, setLecturs] = useState<any[]>([])

    //משתנים לשמירת קלט המשתמש
    const [country, setCountry] = useState<string>("");
    const [countryAlpha, setCountryAlpha] = useState<string>("");
    const [zipcode, setZipcode] = useState<string>("");
    const [radius, setRadius] = useState<string>("");
    const [codes, setCodes] = useState<any[]>([]);

    //משתני עזר
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const onCountryChanged = (country: any) => {
        setCountry(country.name);
        setCountryAlpha(country.alpha2);
        console.log("The country changed to ", country)
    }
    const onZipCodeChanged = (zipcode: string) => {
        setZipcode(zipcode);
    }
    const onRadiusChanged = (radius: string) => {
        setRadius(radius);
    }

    const doTheComponentWork = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        getZipcodesInRadius();
        // getListsOfServices();
        // filterListsOfServicesInRadius();
    }
    const getZipcodesInRadius = () => {
        console.log(countryAlpha, radius, zipcode);
        BaseRequest(`zipcode/getZipCodeInRadius/${zipcode}/${radius}/${countryAlpha}`).then(res => {
            console.log("useEffect", res);
            setCodes(res);
            console.log(codes);
            getListsOfServicesHotels(res);
            getListsOfServicesRestaurnts(res);
            getListsOfServicesAttractions(res);
            getListsOfServicesTours(res);
            getListsOfServicesSynagogues(res);
            getListsOfServicesLecturs(res);

        }
        ).catch(e => console.log(e))
    }

    //שליפת services - כאן יהיו שליפות של כל השירותים
    //כאן שליפת מלונות 
    const getListsOfServicesHotels = (zipcodes: any[]) => {
        BaseRequest(`services/getServicesById/1/${country}`).then(res => {
            console.log("useEffect", res);
            setHotels(res);
            filterListsOfServicesInRadius(zipcodes, res);
        }).catch(e => console.log(e))
    }

    //////////מסעדות
    const getListsOfServicesRestaurnts = (zipcodes: any[]) => {
        BaseRequest(`services/getServicesById/2/${country}`).then(res => {
            console.log("useEffect", res);
            setRestaurants(res);
            filterListsOfServicesInRadiusRestaurants(zipcodes, res);
        }).catch(e => console.log(e))
    }

    //אתרים
    const getListsOfServicesAttractions = (zipcodes: any[]) => {
        BaseRequest(`services/getServicesById/5/${country}`).then(res => {
            console.log("useEffect", res);
            setAttractions(res);
            filterListsOfServicesInRadiusAttraction(zipcodes, res);
        }).catch(e => console.log(e))
    }

    //סיורים
    const getListsOfServicesTours = (zipcodes: any[]) => {
        BaseRequest(`services/getServicesById/5/${country}`).then(res => {
            console.log("useEffect", res);
            setTours(res);
            filterListsOfServicesInRadiusTour(zipcodes, res);
        }).catch(e => console.log(e))
    }
    
    //בתי כנסת

    const getListsOfServicesSynagogues = (zipcodes: any[]) => {
        BaseRequest(`services/getServicesById/5/${country}`).then(res => {
            console.log("useEffect", res);
            setSynagogues(res);
            filterListsOfServicesInRadiusSynagogue(zipcodes, res);
        }).catch(e => console.log(e))
    }

//הרצאות
    const getListsOfServicesLecturs = (zipcodes: any[]) => {
        BaseRequest(`services/getServicesById/5/${country}`).then(res => {
            console.log("useEffect", res);
            setLecturs(res);
            filterListsOfServicesInRadiusLectur(zipcodes, res);
        }).catch(e => console.log(e))
    }

    //סינון ע''פ zip codeכנ''ל על כל השירותים 
    const filterListsOfServicesInRadius = (zipcodes: any[], hotels: any[]) => {
        console.log("arrived to the last funciotn!!!!!!")
        let filteredArr: any[] = [];
        zipcodes.forEach((code) => {
            // console.log("zipcode now is: " + code);
            const filteredHotelsForCode = hotels.filter((h) => {
                //     console.log(code.code, h.zipcode, code.code.includes(h.zipcode));
                return code.code.includes(h.zipcode);
            });
            //    console.log(filteredHotelsForCode)
            filteredArr.push(...filteredHotelsForCode);
            // console.log("filterd arr", filteredArr);
        })
        setIsLoading(false);
        console.log("filterd arr", filteredArr);
        filteredArr = filteredArr.filter(function (item, pos) {
            return filteredArr.indexOf(item) == pos;
        })
        console.log("filterd arr", filteredArr);
        //בתוך ה-filteredArr יש את הנתונים!!!!
        setFilteredHotels(filteredArr);
    }

    //סינון ע''פ zip codeכנ''ל על כל השירותים 
    const filterListsOfServicesInRadiusRestaurants = (zipcodes: any[], restaurants: any[]) => {
        console.log("arrived to the last funciotn!!!!!!")
        let filteredArr: any[] = [];
        zipcodes.forEach((code) => {
            // console.log("zipcode now is: " + code);
            const filteredRestaurantForCode = restaurants.filter((r) => {
                //     console.log(code.code, h.zipcode, code.code.includes(h.zipcode));
                return code.code.includes(r.zipcode);
            });
            //    console.log(filteredHotelsForCode)
            filteredArr.push(...filteredRestaurantForCode);
            // console.log("filterd arr", filteredArr);
        })
        setIsLoading(false);
        console.log("filterd arr", filteredArr);
        filteredArr = filteredArr.filter(function (item, pos) {
            return filteredArr.indexOf(item) == pos;
        })
        console.log("filterd arr", filteredArr);
        //בתוך ה-filteredArr יש את הנתונים!!!!
        setFilteredRestaurants(filteredArr);
    }

    const filterListsOfServicesInRadiusAttraction = (zipcodes: any[], Attractions: any[]) => {
        console.log("arrived to the last funciotn!!!!!!")
        let filteredArr: any[] = [];
        zipcodes.forEach((code) => {
            // console.log("zipcode now is: " + code);
            const filterAttractionForCode = Attractions.filter((s) => {
                //     console.log(code.code, h.zipcode, code.code.includes(h.zipcode));
                return code.code.includes(s.zipcode);
            });
            //    console.log(filteredHotelsForCode)
            filteredArr.push(...filterAttractionForCode);
            // console.log("filterd arr", filteredArr);
        })
        setIsLoading(false);
        console.log("filterd arr", filteredArr);
        filteredArr = filteredArr.filter(function (item, pos) {
            return filteredArr.indexOf(item) == pos;
        })
        console.log("filterd arr", filteredArr);
        //בתוך ה-filteredArr יש את הנתונים!!!!
        setFilteredAttractions(filteredArr);
    }

    const filterListsOfServicesInRadiusTour = (zipcodes: any[], Tours: any[]) => {
        console.log("arrived to the last funciotn!!!!!!")
        let filteredArr: any[] = [];
        zipcodes.forEach((code) => {
            // console.log("zipcode now is: " + code);
            const filterTourForCode = Tours.filter((s) => {
                //     console.log(code.code, h.zipcode, code.code.includes(h.zipcode));
                return code.code.includes(s.zipcode);
            });
            //    console.log(filteredHotelsForCode)
            filteredArr.push(...filterTourForCode);
            // console.log("filterd arr", filteredArr);
        })
        setIsLoading(false);
        console.log("filterd arr", filteredArr);
        filteredArr = filteredArr.filter(function (item, pos) {
            return filteredArr.indexOf(item) == pos;
        })
        console.log("filterd arr", filteredArr);
        //בתוך ה-filteredArr יש את הנתונים!!!!
        setFilteredTours(filteredArr);
    }
    
    //בית כנסת
    const filterListsOfServicesInRadiusSynagogue = (zipcodes: any[], synagogues: any[]) => {
        console.log("arrived to the last funciotn!!!!!!")
        let filteredArr: any[] = [];
        zipcodes.forEach((code) => {
            // console.log("zipcode now is: " + code);
            const filterSynagogueForCode = synagogues.filter((s) => {
                //     console.log(code.code, h.zipcode, code.code.includes(h.zipcode));
                return code.code.includes(s.zipcode);
            });
            //    console.log(filteredHotelsForCode)
            filteredArr.push(...filterSynagogueForCode);
            // console.log("filterd arr", filteredArr);
        })
        setIsLoading(false);
        console.log("filterd arr", filteredArr);
        filteredArr = filteredArr.filter(function (item, pos) {
            return filteredArr.indexOf(item) == pos;
        })
        console.log("filterd arr", filteredArr);
        //בתוך ה-filteredArr יש את הנתונים!!!!
        setFilteredSynagogues(filteredArr);
    }

    const filterListsOfServicesInRadiusLectur = (zipcodes: any[], Lecturs: any[]) => {
        console.log("arrived to the last funciotn!!!!!!")
        let filteredArr: any[] = [];
        zipcodes.forEach((code) => {
            // console.log("zipcode now is: " + code);
            const filterLecturForCode = Lecturs.filter((s) => {
                //     console.log(code.code, h.zipcode, code.code.includes(h.zipcode));
                return code.code.includes(s.zipcode);
            });
            //    console.log(filteredHotelsForCode)
            filteredArr.push(...filterLecturForCode);
            // console.log("filterd arr", filteredArr);
        })
        setIsLoading(false);
        console.log("filterd arr", filteredArr);
        filteredArr = filteredArr.filter(function (item, pos) {
            return filteredArr.indexOf(item) == pos;
        })
        console.log("filterd arr", filteredArr);
        //בתוך ה-filteredArr יש את הנתונים!!!!
        setFilteredLecturs(filteredArr);
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
            <h2 style={{
                fontSize: '350%',
                fontStyle: 'oblique',
                fontFamily: 'serif',
                color: '#F50057',
                fontWeight: 'bold',
                marginTop: '5%',
                textAlign: 'center',
            }}>
                Search near your location
            </h2>
            <div className="serach-services-div">
                <form onSubmit={doTheComponentWork} className={classes.form}>
                    <Autocomplete
                        //id="country                
                        className={"country " + classes.input}
                        id="standard-error-helper-text"
                        options={countries}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 348 }}

                        onChange={(e: any, newValue: any) => {
                            onCountryChanged(newValue);
                        }}
                        renderInput={(params) => <TextField name="country" {...params} label="Choose Country" margin="normal" variant="outlined" />}
                    />
                    <br />
                    <TextField
                        autoComplete="zipCode"
                        name="zipCode"
                        variant="outlined"
                        // required
                        //fullWidth
                        id="zipCode"
                        label="Enter Zip Code"
                        autoFocus
                        margin="normal"
                        className={classes.input}
                        style={{backgroundColor: "transparent !important"}}
                        onChange={(e: any) => onZipCodeChanged(e.target.value)} />

                    <TextField
                        autoComplete="zipCode"
                        name="radius"
                        variant="outlined"
                        // required
                        //fullWidth
                        id="radius"
                        label="Enter Radius"
                        margin="normal"
                        onChange={(e: any) => onRadiusChanged(e.target.value)} className={classes.input}
                    />
                    <Button variant="contained" startIcon={<SearchIcon />} type="submit" style={{padding: '16px',}}>search</Button>
                </form>
                </div>
                <Divider />
                {isLoading == true && <CircularProgress />}

                <Results list={[...filteredHotels, ...filteredRestaurants, ...filteredAttractions, ...filteredTours, ...filteredSynagogues, ...filteredLecturs]} />
            </div>
        </div>
    )
}
{/* ///list={[...filteredHotels,...filterdReturandets]} */ }