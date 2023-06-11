/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import newspaper from '../../assets/newspaper.jpg';
import SearchIcon from '@material-ui/icons/Search';
import countries from '../../assets/json/countries.json'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Country } from '../../interfaces/Country.interface';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import RecipeReviewCard from './Cards';
import { useHistory } from 'react-router-dom';
import BaseRequest from '../../helpers/BaseRequest';
import { addCountry, removeCountry } from '../../state/ActionCreator';
import countryReducer from '../../state/countryReducer';
import Israel from '../../assets/Flags/Israel.png';
import USA from '../../assets/Flags/USA.png'
import Canada from '../../assets/Flags/Canada.png'
import Brazil from '../../assets/Flags/Brazil.png'
import Argentina from '../../assets/Flags/Argentina.png'
import Turkey from '../../assets/Flags/Turkey.png'
import Russia from '../../assets/Flags/Russia.png'
import Ukraine from '../../assets/Flags/Ukraine.png'
import Poland from '../../assets/Flags/Poland.png'
import Germany from '../../assets/Flags/Germany.png'
import Czech from '../../assets/Flags/Czech.png'
import Grace from '../../assets/Flags/Grace.png'
import Netherlands from '../../assets/Flags/Netherlands.png'
import Belgium from '../../assets/Flags/Belgium.png'
import Italy from '../../assets/Flags/Italy.png'
import France from '../../assets/Flags/France.png';
import United_Kingdom from '../../assets/Flags/United_Kingdom.png';
import United_Arab_Emirates from '../../assets/Flags/United_Arab_Emirates.png'
import India from '../../assets/Flags/India.png'
import China from '../../assets/Flags/China.png'
import Morocco from '../../assets/Flags/Morocco.png'
import Egypt from '../../assets/Flags/Egypt.png'
import Australia from '../../assets/Flags/Australia.png'
import './countries.css'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 600,
            width: '100%',
        },
        grid: {
            width: '100%', // Fix IE 11 issue.
            padding: theme.spacing(5)
        }
    }),
);

export default function Countries() {
    document.title = "Datiuli - Countries"

    const classes = useStyles();
    let i = 0;
    const dispatch: Dispatch<any> = useDispatch();
    const [countries, setCountries] = useState<Country[]>([

        { name: 'Israel', flag: Israel, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'USA', flag: USA, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Canada', flag: Canada, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Brazil', flag: Brazil, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Argentina', flag: Argentina, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Turkey', flag: Turkey, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Russia', flag: Russia, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Ukraine', flag: Ukraine, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Poland', flag: Poland, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Germany', flag: Germany, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Czech', flag: Czech, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Grace', flag: Grace, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Belgium', flag: Belgium, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Netherlands', flag: Netherlands, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Italy', flag: Italy, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'France', flag: France, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'United Kingdom', flag: United_Kingdom, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'United Arab Emirates', flag: United_Arab_Emirates, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'India', flag: India, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'China', flag: China, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Morocco', flag: Morocco, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Egypt', flag: Egypt, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'Australia', flag: Australia, isFavorite: false, id: 'a' + (i = i + 1).toString() },


    ]);
    const [countriesList, setCountriesList] = useState<any[]>([])

    const [serviceList, setServiceList] = useState<any[]>([])
    const [countrySelected, setCountrySelected] = useState<string>('')
    const history = useHistory();//מילה שמורה בשביל ניתוב בין עמודים
    // useEffect(() => {
    //     BaseRequest('countries/getCountries').then(res => {
    //         console.log("useEffect", res);
    //         setCountries(res);
    //     }
    //     ).catch(e => console.log(e))
    // }, []);


    const updateIsFavorite = (id: string) => {
        let arr = [...countries]
        arr.forEach(a => {
            if (a.id === id)
                a.isFavorite = !a.isFavorite
        })
        setCountries(arr);
        const country = arr.find(c => c.id === id);
        if (country?.isFavorite === true) {
            dispatch(addCountry(country));
        } else {
            if (country)
                dispatch(removeCountry(country));
        }
    }
    useEffect(() => {
        BaseRequest('countries/getCountry').then(res => {
            console.log("useEffect", res);
            setCountriesList(res);
        }
        ).catch(e => console.log(e))
    }, []);

    useEffect(() => {
        BaseRequest('services/getService').then(res => {
            console.log("useEffect", res);
            setServiceList(res);
        }
        ).catch(e => console.log(e))
    }, []);

    const ServiceChange = (e: any, option: any) => {
        console.log(option)
        let route = option.serviceName//option.serviceName.charAt(0).toLowerCase() + option.serviceName.slice(1);
        console.log(route)
        const serviceId = option.id;
        console.log(serviceId);
        history.push(`/${route}/${serviceId}/${countrySelected}`);
    }
    const selectCountry = (e: any, newValue: any) => {
        console.log('dfghjklkjhg', newValue.country);
        setCountrySelected(newValue.country);
        localStorage.setItem('bbb', newValue.country);

        history.push('/s')
    }
    const selectCountryCard = (country: any) => {
        console.log('dfghjklkjhg', country.name);
        setCountrySelected(country.name);
        localStorage.setItem('bbb', country.name);

        history.push('/s');
    }


    // <div style={{
    //     backgroundImage: `url(${newspaper})`,
    //     backgroundRepeat: 'repeat',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     textAlign: "right",
    //     direction: "rtl",
    //     padding: '10%',
    // }}>
    return (
        <div className="parent" style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            padding: '10%',
        }}>
            <div className="serach-services-div">
                <Autocomplete
                    //id="country
                    className="country"
                    id="standard-error-helper-text"
                    options={countries}
                    //options={top100Films}
                    onChange={selectCountry}
                    getOptionLabel={(option) => option.name}
                    /* getOptionLabel={(option) => {
                        console.log(option);
                        return option.country;
                    }} */
                    /* style={{ marginLeft: '28%' }} */
                    renderInput={(params) => (
                        <TextField style={{ width: 348, marginRight: '0%' }}
                            {...params}
                            label="Search Country"
                            margin="normal"
                            variant="outlined"
                        //InputProps={{ ...params.InputProps, type: 'search' }}
                        />
                    )}
                />
                <h2 style={{
                    fontSize: '350%',
                    fontStyle: 'oblique',
                    fontFamily: 'serif',
                    color: '#F50057',
                    fontWeight: 'bold',
                    marginLeft: '10%',
                    textAlign: 'center',
                }}>
                    COUNTRIES
            </h2>
            </div>
            {/* <div style={{ marginTop: '20%' }}></div> */}
            {/* {
                countrySelected &&
                <Autocomplete
                    //id="service"
                    className="ssss"
                    options={serviceList}
                    getOptionLabel={(option) => option.serviceName}
                    style={{ width: 348 }}
                    onChange={ServiceChange}
                    renderInput={(params) => <TextField {...params} label="Choose Service" variant="outlined" />}
                />
            } */}

            <Grid container className={classes.grid} spacing={2} style={{ padding: '0%',}}>
                {countries.map((c, idx) => {
                    return <Grid item xs={4}><RecipeReviewCard
                        key={idx}
                        country={c}
                        handleClick={(country: Country) => selectCountryCard(country)}
                        setCountry={(id: string) => updateIsFavorite(id)}
                    />
                    </Grid>
                })}
            </Grid>

            {/* <div className="country-place">
                {
                    countries.map((c, idx, ) => {
                        return <RecipeReviewCard
                            key={idx}
                            country={c}
                            handleClick={(country: Country) => selectCountryCard(country)}
                            setCountry={(id: string) => updateIsFavorite(id)}
                        />

                    })
                }</div> */}
        </div>
    );

}

