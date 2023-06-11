


const { Router } = require('express');
const { mysqlConnection } = require('../sql/sql');
const restaurantRouter = Router();

restaurantRouter.put('/editRestauran/:id', (req, res) => {
    const { id } = req.params;
    const { name, address, phone, city, cosher } = req.body.body;
    console.log('name:', name, "adress", address, "phone", phone, "cosher", cosher);
    const query = `UPDATE services s JOIN restaurants r SET s.name='${name}',s.address='${address}',
     s.phone='${phone}',s.city='${city}',r.cosher='${cosher}' WHERE s.id='${id}' AND r.id='${id}'`
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

module.exports =
    restaurantRouter; 