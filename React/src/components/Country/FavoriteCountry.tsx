/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import newspaper from '../../assets/newspaper.jpg';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Country } from '../../interfaces/Country.interface';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Italy from '../../assets/Italy.png'
import Israel from '../../assets/Israel.png';
import France from '../../assets/France.png';
import United_Kingdom from '../../assets/United_Kingdom.png';
import RecipeReviewCard from './Cards';
import { useHistory } from 'react-router-dom';
import BaseRequest from '../../helpers/BaseRequest';
import { addCountry, removeCountry } from '../../state/ActionCreator';
import countryReducer from '../../state/countryReducer';

export default function FavoriteCountry() {
    let i = 0;
    const dispatch: Dispatch<any> = useDispatch();
    const [countries, setCountries] = useState<Country[]>([

        { name: 'Israel', flag: Israel, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'United Kingdom', flag: United_Kingdom, isFavorite: true, id: 'a' + (i = i + 1).toString() },
        { name: 'France', flag: France, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        //{ name: 'Italy', flag: France, isFavorite: false, id: 'a' + (i = i + 1).toString() }


    ]);
    const [countrySelected, setCountrySelected] = useState<Country>({ name: 'Israel', flag: Israel, isFavorite: false, id: 'a' + (i = i + 1).toString() });
    //  let countrySelected:Country|undefined  = { name: 'Israel', flag: Israel, isFavorite: false, id: 'a' + (i = i + 1).toString() };



    const history = useHistory();//מילה שמורה בשביל ניתוב בין עמודים
    // useEffect(() => {
    //     BaseRequest('countries/getCountries').then(res => {
    //         console.log("useEffect", res);
    //         setCountries(res);
    //     }
    //     ).catch(e => console.log(e))
    // }, []);



    useEffect(() => {
        BaseRequest('countries/getFavoriteCountry').then(res => {
            console.log("useEffect", res);
            const staticCountry = countries.find((c) => c.name == res[0].name);
            console.log("useEffect", res);
            // setCountrySelected(staticCountry);
            console.log("useEffect", countrySelected);

        }
        ).catch(e => console.log(e))
    }, [countrySelected]);



    return (
        <div className="parent" style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <RecipeReviewCard country={countrySelected} handleClick={(country: Country) => alert("Do yOu Want to ....")} setCountry={(id: string) => { }}
            />


        </div>
    );

}

