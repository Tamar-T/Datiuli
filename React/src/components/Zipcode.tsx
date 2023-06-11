 import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import BaseJsonRequest from '../helpers/BaseJsonRequest';
import Countries from '../assets/json/countries.json';
import BaseRequest from '../helpers/BaseRequest';
import newspaper from '../assets/newspaper.jpg';

export default function Zipcode() {
  document.title= `Datiuli - Zip Code`

  const [countriesList, setCountriesList] = useState<any[]>([])
  const [citiesList, setCitiesList] = useState<any[]>([])
  const [serviceList, setServiceList] = useState<any[]>([])

  const [countrySelected, setCountrySelected] = useState<string>('')
  const [zipSelected, setZipSelected] = useState<any>([]);
  const [enterRadiuos, setEnterRadiuos] = useState<any>([]);

  const [getZipData, setGetZipData] = useState<any>({
    country: '',
    city: '',
  })
  const [zipList, setZipList] = useState<any[]>([]);

  // const options: any = {
  //   method: 'GET',
  //   url: 'https://global-address.p.rapidapi.com/V3/WEB/GlobalAddress/doGlobalAddress',
  //   params: {
  //     ctry: 'ISR',
  //     DeliveryLines: 'Off',
  //     a1: 'Gießener Str. 30',
  //     format: 'json',
  //     postal: '60435',
  //     a2: 'Frankfurt am Main'
  //   },
  //   headers: {
  //     'x-rapidapi-key': 'b29a8dcf03msh8d88aa3bdc39aa5p1c75d8jsn7de577befb8f',
  //     'x-rapidapi-host': 'global-address.p.rapidapi.com'
  //   }
  // };

  //-------------------בקשה לקבלת רשימת מיקודים בעיר
  //GET https://app.zipcodebase.com/api/v1/code/city?apikey=YOUR-APIKEY&city=Amsterdam&country=nl

  //-------------------בקשה לקבלת רשימת מיקודים בטווח המתבקש
  //GET https://app.zipcodebase.com/api/v1/radius?apikey=YOUR-APIKEY&code=10005&radius=100&country=us



  // useEffect(() => {

  //   axios.get('').then(function (res) {
  //     console.log(res.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });

  // })
  useEffect(() => {
    setCountriesList(Countries);
  });



  const selectCountry = (e: any, newValue: any) => {
    console.log("changed");
    console.log(newValue);
    setCountrySelected(newValue?.alpha2);
    console.log(newValue?.alpha2);
    // getProvincesByCountry(newValue?.alpha2);
    //העתקת רשימת הערים המתאימה לרשימת הערים
  }

  // const getProvincesByCountry = (country: string) => {

  //   BaseRequest(`zipcode/getCitiesByCountry/${country}`).then(res => {
  //     console.log("useEffect", res);

  //   }
  //   ).catch(e => {
  //     console.log(e)
  //   }
  //   )
  // }

  // const selectCity = (e: any, newValue: any) => {
  //   console.log(newValue);
  //   setCountrySelected(newValue?.country)

  //  // getZipsList();
  // }

  const selectZip = (e: any) => {
    const input = e.target;
    setZipSelected(input.value);
    console.log(input.value);

  }
  const enteringRadiuos = (e: any) => {
    const input = e.target;
    console.log(input.value);
    setEnterRadiuos(input.value);
  }
  const findServicesInRadius = () => {
    const radius = enterRadiuos;
    const country = countrySelected;
    const zipcode = zipSelected;

    BaseRequest(`zipcode/getZipCodeInRadius/${zipcode}/${radius}/${country}`).then(res => {
      console.log("useEffect", res);
    }).catch(e => {
      console.log(e)
    })

  }


  // const getZipsList = () => {
  //   //הפעלת בקשה משרת זיפים
  // }

  const getServicesList = () => {
    //הפעלת בקשה מהשרת שלנו - שם תופעל בקשה לשרת זןפןם שיחזיר זיפים במרחק מסוים ויסנן שירותים
  }


  return (
    <div style={{
      backgroundImage: `url(${newspaper})`,
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      textAlign: "right",
      direction: "rtl",
      padding: '10%',
    }}>
      <Autocomplete
        //id="country
        className="country"
        id="standard-error-helper-text"
        options={countriesList}
        //options={top100Films}
        onChange={selectCountry}
        getOptionLabel={(option) => {
          return option.name;
        }}
        style={{ width: 348 }}
        renderInput={(params) => <TextField {...params} label="Choose Country" variant="outlined" />}
      />
      {/* הוספת תיבת טקסט לעיר ורחוב */}
      <label>הכנס מיקוד</label>
      <input onChange={selectZip} />
      <br></br>
      <label>הכנס רדיוס</label>
      <input onChange={enteringRadiuos} />

      <button type="submit" onClick={findServicesInRadius}>הצג תוצאות</button>

    </div>
  )
}