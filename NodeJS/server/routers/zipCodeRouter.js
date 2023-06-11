const { Router } = require('express');
const { mysqlConnection } = require('../sql/sql');
const zip = require('../helpers/zipAPI');
const zipCodeRouter = Router();


zipCodeRouter.get('/getCitiesByCountry/:country', async (req, res) => {
    const country = req.params.country;
    console.log(req.params);
    const asyncFunction = zip.getCitiesByCountry(country)

    const result = await asyncFunction;

    console.log("result returned in server:", result);
    if (result != undefined) {
        console.log(result);
        res.send(result);
    }
    else
        res.send("arrived to server  without result");
});

zipCodeRouter.get('/getZipCodesByState/:country/:stateName', async (req, res) => {
    const country = req.params.country;
    const stateName = req.params.stateName;
    const asyncFunction = zip.getZipCodesByState(country, stateName)

    const result = await asyncFunction;

    console.log("result returned in server:", result);
    if (result != undefined) {
        console.log(result);
        res.send(result);
    }
    else
        res.send("arrived to server  without result");
});


zipCodeRouter.get('/getZipCodeInRadius/:code/:radius/:country', async (req, res) => {
    const { code, radius, country } = req.params;

    const asyncFunction = zip.getZipCodeInRadius(code, radius, country)

    const result = await asyncFunction;

    console.log("result returned in server:", result);
    if (result != undefined) {
        console.log(result);
        res.send(result.results);
    }
    else
        res.send("arrived to server  without result");
});

module.exports =
    zipCodeRouter;