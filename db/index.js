const mysql = require('mysql');

const config = require('../setting.json').database;

const connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});

// connection.connect();

module.exports = connection;
// connection.query(`SELECT * FROM pl_lab.user`, (error, results, fields) => {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// connection.end();