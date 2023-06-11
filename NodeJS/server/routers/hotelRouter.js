const { Router } = require('express');
const { mysqlConnection } = require('../sql/sql');
const hotelRouter = Router();
//const { checkEmail, signup } = require('../actions/actions');



hotelRouter.post('/addHotel', (req, res) => {
    const { name, adress, phone, country, city, manager, stars } = req.body.body;
    console.log(req.body);
    // const query = `SELECT * FROM users WHERE email = '${email}'`;
    // console.log(query);
    const singupQuery = `INSERT INTO services(name,adress,phone,country,city)VALUES('${name}' ,'${adress}','${phone}','${country}','${city}')`;
    mysqlConnection.query(singupQuery, (err, result) => {
        if (!err)
            res.send({ success: true, id: result.insertId, msg: "success" });
        else
            res.send(err);
    })

    // const query = `INSERT INTO hotels(manager,stars)VALUES('${manager}' ,'${stars}'}')`;
    // mysqlConnection.query(query, (err, result) => {
    //     if (!err)
    //         res.send({ success: true, id: result.insertId, msg: "success" });
    //     else
    //         res.send(err);
    // })


    // else
    //     res.send({ success: false, msg: "Somthing is wrong!", err: err });
})






hotelRouter.put('/editHotel/:id', (req, res) => {
    const { id } = req.params;
    const { name, address, phone, city, manager, stars } = req.body.body;
    console.log('name:', name, "adress", address, "phone", phone);
    const query = `UPDATE services s JOIN hotels h SET s.name='${name}',s.address='${address}',
     s.phone='${phone}',s.city='${city}',h.manager='${manager}',h.stars='${stars}' WHERE s.id='${id}' AND h.id='${id}'`
    // const query = 'UPDATE services s JOIN hotels h SET name=?,address=? WHERE s.id=?,h.id=?', [name, address, id, id]
    mysqlConnection.query(query, (err, result) => {
        if (!err) {
            if (result.affectedRows > 0) {
                res.send(result);
            }
            else
                res.send("failed to edit hotel")
        }
        else
            console.log(err);
    })
})


hotelRouter.delete('/deleteHotel/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE  FROM  hotels h WHERE h.id='${id}'`
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            const query1 = `DELETE  FROM  services s WHERE s.id='${id}'`
            mysqlConnection.query(query1, (err, result) => {
                if (!err)
                    res.send({ success: true, msg: "success" });
                else
                    res.send(err);
            })
        }
        else
            res.send({ success: false, msg: "Somthing is wrong!", err: err });
    })
})


/**userRouter.post('/signup', (req, res) => {
const { firstName, lastName, email, password } = req.body;
console.log(req.body);
const query = `SELECT * FROM users WHERE email = '${email}'`;
console.log(query);
mysqlConnection.query(query, (err, rows) => {
    if (!err)
        if (rows.length > 0)   //אם האימייל תקין
            res.send({ success: false, msg: "Email is already exists!" });
        else {
            const singupQuery = `INSERT INTO users(userName,email,password,permission)VALUES('${firstName + ' ' + lastName}' ,'${email}','${password}',${3})`;
            mysqlConnection.query(singupQuery, (err, result) => {
                if (!err)
                    res.send({ success: true, id: result.insertId, msg: "success" });
                else
                    res.send(err);
            })
        }

    else
        res.send({ success: false, msg: "Somthing is wrong!", err: err });
})
}) */


module.exports =
    hotelRouter; 
