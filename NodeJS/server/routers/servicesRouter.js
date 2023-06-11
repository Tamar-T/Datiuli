const { Router } = require('express');
const { mysqlConnection } = require('../sql/sql');


const servicesRouter = Router();


servicesRouter.get('/getService', (req, res) => {
    mysqlConnection.query('SELECT * FROM typeofservice ', (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

servicesRouter.get('/getServicesById/:serviceId/:country', (req, res) => {
    const { serviceId, country } = req.params;
    let queryString;
    switch (serviceId) {
        case '1':
            queryString = `SELECT * FROM services s join hotels h on s.id = h.id WHERE typeOfService = ${serviceId} AND country = "${country}"`
            break;
        case '2':
            queryString = `SELECT * FROM services s join restaurants h on s.id = h.id WHERE typeOfService = ${serviceId} 
            AND country = "${country}"`
            break;
        case '3':
            queryString = `SELECT * FROM services s join sites h on s.id = h.id WHERE typeOfService = ${serviceId} AND country = "${country}"`
            break;
        case '4':
            queryString = `SELECT * FROM services s join tours h on s.id = h.id WHERE typeOfService = ${serviceId} AND country = "${country}"`
            break;
        case '5':
            queryString = `SELECT * FROM services s join synagogues h on s.id = h.id WHERE typeOfService = ${serviceId}
             AND country = "${country}"`
            break;
    }
    console.log(queryString);
    mysqlConnection.query(queryString, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})











// countryRouter.get('/getCountries', (req, res) => {
//     mysqlConnection.query('SELECT  * FROM country', (err, rows) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// })







// servicesRouter.put('/editHotel/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, address, phone, city, manager, stars } = req.body;
//     console.log(req.body);
//     console.log(req.body.name);
//     //console.log('name:', name, "adress", address, "phone", phone);
//     const query = `UPDATE services s JOIN hotels h SET s.name='${name}',s.address='${address}',
//      s.phone='${phone}',s.city='${city}',h.manager='${manager}',h.stars='${stars}' WHERE s.id='${id}' AND h.id='${id}'`
//     // const query = 'UPDATE services s JOIN hotels h SET name=?,address=? WHERE s.id=?,h.id=?', [name, address, id, id]
//     mysqlConnection.query(query, (err, result) => {
//         if (!err) {
//             if (result.affectedRows > 0) {
//                 res.send(result);
//             }
//             else
//                 res.send("failed to edit hotel")
//         }
//         else
//             console.log(err);
//     })
// })

servicesRouter.delete('deleteHotel/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM services s JOIN hotels h WHERE s.id='${id}' AND h.id='${id}'`
    mysqlConnection.query(query, (err, result) => {
        if (!err) {
            if (result.affectedRows > 0) {
                res.send(result);
            }
            else
                res.send("failed to add students")
        }
        else
            console.log(err);
    })
})













/**userRouter.put('/editaccount/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, country, language, password } = req.body;
    console.log(req.body);
    const query = `UPDATE users SET userName='${name}',country='${country}',language='${language}',email='${email}',password='${password}'
  WHERE id ='${id}'`
    mysqlConnection.query(query, (err, result) => {
        if (!err) {
            if (result.affectedRows > 0) {
                res.send(result);
            }
            else
                res.send("failed to add students")
        }
        else
            console.log(err);
    })
}) */
module.exports =
    servicesRouter; 
