
const { mysqlConnection } = require('../sql/sql');


function checkEmail(email) {
    mysqlConnection.query(`SELECT * FROM users WHERE email = ${email}`, (err, rows) => {
        if (!err)
            if (rows.length == 0)
                return true;
            else
                return false;
        return false;
    })

}

function signup(firstName, lastName, email, password) {
    const query = `INSERT INTO users(userName,email,password,permission)VALUES(${firstName + ' ' + lastName} ,${email},${password},3)`;
    mysqlConnection.query(query, (err, rows) => {
        console.log("arrived to signup function");
        const result = { "err": err, "rows": rows };
        console.log("Result ", result);
        return result;
    })
}

module.exports = {
    checkEmail, signup
}