const { Router } = require('express');
const { mysqlConnection } = require('../sql/sql');

const countryRouter = Router();

countryRouter.get('/getCountry', (req, res) => {
    mysqlConnection.query('SELECT DISTINCT country FROM services', (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})
countryRouter.get('/getCountries', (req, res) => {
    mysqlConnection.query('SELECT  * FROM country', (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})
countryRouter.get('/getCountriesById/:userId', (req, res) => {
    const { userId } = req.params;
    const query = `SELECT *, IF(F.userId>0, true,false) as isFavorite
    FROM country C  LEFT JOIN favorites F ON C.id  =F.countryId
    WHERE F.userId=${userId}
    ORDER BY isFavorite DESC `;

    mysqlConnection.query(query, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})
countryRouter.put('/updateFavorite/:countryId/:userId', (req, res) => {
    const { countryId, userId } = req.params;
    mysqlConnection.query(`SELECT * FROM favorites WHERE userId = ${userId} AND countryId = ${countryId} `, (err, rows) => {
        if (!err) {
            if (rows.length == 0) {
                const query = `INSERT INTO favorites VALUES('${userId}' ,'${countryId}')`;
                mysqlConnection.query(query, (err, rows) => {
                    if (!err)
                        res.send("add success");
                })
            }
            else {
                console.log("entered to delete");
                const query = `DELETE FROM favorites WHERE userId='${userId}' AND countryId ='${countryId}'`;
                console.log(query);
                mysqlConnection.query(query, (err, rows) => {
                    if (!err)
                        res.send("delete success");
                })
            }

        }
        else
            console.log(err);
    });

})

countryRouter.get('/getFavoriteCountry', (req, res) => {
    mysqlConnection.query(`
    SELECT countryId ,name,flag
    FROM favorites f JOIN country c ON f.countryId = c.id
    GROUP BY countryId ,name,flag
    ORDER BY (count(userId)) DESC
    LIMIT 1`, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

module.exports =
    countryRouter; 