

const { Router } = require('express');
const { mysqlConnection } = require('../sql/sql');
const synagogueRouter = Router();

synagogueRouter.put('/editSynagogue:id', (req, res) => {
    const { id } = req.params;
    const { name, address, phone, city, rabbi, nusach, community } = req.body.body;
    console.log('name:', name, "adress", address, "phone", phone, "cosher", cosher);
    const query = `UPDATE services s JOIN synagogues sy SET s.name='${name}',s.address='${address}',
     s.phone='${phone}',s.city='${city}',sy.rabbi='${rabbi}',sy.nusach='${nusach}' ,sy.community='${community}' 
     WHERE s.id='${id}' AND sy.id='${id}'`
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
synagogueRouter; 