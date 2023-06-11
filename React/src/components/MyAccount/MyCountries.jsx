import React, { Dispatch, useState } from 'react';
import { Country } from '../../interfaces/Country.interface';
//import RecipeReviewCard from './Cards';
//import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import RecipeReviewCard from '../Country/Cards';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addCountry, removeCountry } from '../../state/ActionCreator';
import { red } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
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

const useStyles = makeStyles((theme) =>
    createStyles({ 
        grid:{
            width: '100%', // Fix IE 11 issue.
            padding:theme.spacing(5)
        }        
    }),
);

export default function MyCountries() {
    const classes = useStyles();
    const [countrySelected, setCountrySelected] = useState('')
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countriesState.countries);
    const history = useHistory();//מילה שמורה בשביל ניתוב בין עמודים

    // const countries =[{ name: 'Israel', flag: Israel, isFavorite: false, id: 'a1'},
    // { name: 'United Kingdom', flag: United_Kingdom, isFavorite: true, id: 'a2' },
    // { name: 'France', flag: France, isFavorite: false, id: 'a3' }]
    

    const selectCountryCard = (country) => {
        setCountrySelected(country.name);
        localStorage.setItem('bbb', country.name);
        history.push('/s');
    }

    const updateIsFavorite = (id) => {
        let arr = [...countries]
        arr.forEach(a => {
            if (a.id === id)
                a.isFavorite = !a.isFavorite
        })
        // setCountries(arr);
        const country = arr.find(c => c.id == id);
        if (country?.isFavorite == true) {
            dispatch(addCountry(country));
        } else {
            if (country)
                dispatch(removeCountry(country));
        }
    }

    return (
        <Grid container className={classes.grid} spacing={2}>           
          { countries.map((c, idx) => { 
               return <Grid item xs={4}><RecipeReviewCard key={idx} country={c} handleClick={(country) => selectCountryCard(country)} setCountry={(id) => updateIsFavorite(id)}
          />
         </Grid>
        })}
      </Grid>
    );
}


