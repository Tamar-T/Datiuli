
const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');
const zip = require('./ziimodule');
console.log("zip", zip);
var app = express();
app.use(cors());
app.use(bodyparser.json());


const port = process.env.PORT || 3001;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(port, () => console.log(`Listening on port ${port}..`));


app.get('/getDemoResponse', async (req, res) => {
    const asyncFunction = zip.demoFunction("Amsterdam", "nl", 1);
    const result = await asyncFunction;

    console.log("result returned in server:", result);
    if (result != undefined) {
        res.send(result);
    }
    else
        res.send("arrived to server without result");
});



app.get('/getZipCodesByState/:country/:stateName', async (req, res) => {
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

app.get('/getZipCodeInRadius/:code/:radius/:country', async (req, res) => {
    const { code, radius, country } = req.params;

    const asyncFunction = zip.getZipCodeInRadius(code, radius, country)

    const result = await asyncFunction;

    console.log("result returned in server:", result);
    if (result != undefined) {
        console.log(result);
        res.send(result);
    }
    else
        res.send("arrived to server  without result");
});