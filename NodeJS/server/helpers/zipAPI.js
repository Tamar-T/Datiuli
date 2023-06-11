const axios = require('axios');

const apikey = "d229fc40-9655-11eb-a02e-171e69f3ee9a"
const baseURL = "https://app.zipcodebase.com/api/v1/";

//---1

//פונקציה לשליפת רשימת הערים עע''פ מדינה


const getCitiesByCountry = async (country) => {

    const url = `${baseURL}country/province?apikey=${apikey}&country=${country}`;
    console.log(url);
    try {
        const result = await axios.get(
            url, {

        }
        );
        if (result) {
            return result.data;
        }
    }
    catch (error) {
        console.log("error " + error);
    }
}

//---2
//פונקציה לשליפת רשימת המיקודים בכל עיר
const getZipCodesByState = async (country, stateName) => {
    const url = `${baseURL}code/state?apikey=${apikey}&state_name=${stateName}&country=${country}`;
    console.log(url);
    try {
        const result = await axios.get(
            url, {

        }
        );
        if (result) {
            return result.data;
        }
    }
    catch (error) {
        console.log("error " + error.response.body);
    }
}


//---3


const getZipCodeInRadius = async (code, radius, country) => {

    const url = `${baseURL}radius?apikey=${apikey}&code=${code}&radius=${radius}&country=${country}`;
    console.log(url);
    try {
        const result = await axios.get(
            url, {

        }
        );
        if (result) {
            return result.data;
        }
    }
    catch (error) {
        console.log("error " + error.response.body);
    }
}


const calculateDistance = (code, compare, country) => {
    const compareString = compare.join();
    axios.get(
        `${this.baseURL}/distance/apikey=${apikey}&code=${code}&compare=${compareString}&country=${country}`, {

    }
    ).then((res) => {
        console.log(res);
        return res.data;
    })
        .catch((err) => {
            console.log(err);
            throw err;
        })
}


const demoFunction = async (city, country, limit) => {
    const url = `${baseURL}code/city?apikey=${apikey}&city=${city}&country=${country}&limit=${limit}`;
    console.log(url);
    try {
        const result = await axios.get(
            url, {

        }
        );
        if (result) {
            return result.data;
        }
    }
    catch (error) {
        console.log("error " + error.response.body);
    }
}

const zip = {
    getCitiesByCountry,
    calculateDistance,
    demoFunction,
    getZipCodesByState,
    getZipCodeInRadius
}

module.exports = zip;





