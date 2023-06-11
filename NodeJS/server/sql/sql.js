const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3308,
    password: '1234',
    database: 'project',
    multipleStatements: true
});

module.exports = {
    mysqlConnection
};