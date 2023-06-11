const { Router } = require('express');
const { mysqlConnection } = require('../sql/sql');
const mail = require('../helpers/mail');

const mailRouter = Router();

mailRouter.post('/sendUserMail', (req, res) => {
    const { email, text, firstName } = req.body.body;
    console.log(req.body.body);
    mail.sendindUserMail(email, firstName, text);

})


mailRouter.post('/resetPassword', (req, res) => {
    const { email } = req.body.body;
    console.log(req.body);
    mail.sendingManagerMail(email )
})






















module.exports =
    mailRouter; 