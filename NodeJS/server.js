const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { mysqlConnection } = require('./server/sql/sql');
const servicesRouter = require('./server/routers/servicesRouter');
const userRouter = require('./server/routers/userRouter');
const countryRouter = require('./server/routers/countryRouter');
const hotelRouter = require('./server/routers/hotelRouter');
const restaurantRouter = require('./server/routers/restaurantRouter');
const synagogueRouter = require('./server/routers/synagogueRouter')
const zipCodeRouter = require('./server/routers/zipCodeRouter');
const mailRouter = require('./server/routers/mailRouter');
var app = express();
app.use(bodyparser.json());
app.use(cors());
app.use('/services', servicesRouter);
app.use('/users', userRouter);
app.use('/countries', countryRouter);
app.use('/hotels', hotelRouter);
app.use('/restaurants', restaurantRouter);
app.use('/synagogues', synagogueRouter);
app.use('/zipcode', zipCodeRouter);
 app.use('/mail', mailRouter);
mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
app.get('/api/checkUser/:newEmail', (req, res) => {
    const { newEmail } = req.params;
    mysqlConnection.query(`SELECT * FROM users WHERE userName=${newEmail} `, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})


//כשמגדירים לאפפ להשתמש בראוטר בוחרים איזה ניווט יביא לדף של הראוטר
//  '/services/getServiceById

// app.use('/mail', mailRouter);
//Establish the server connection
//PORT ENVIRONMENT VARIABLE