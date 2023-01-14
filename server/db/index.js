const mysql = require('mysql2');

// Create and export the connection to local mySQL database 'movieist'
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movielist'
});

module.exports = connection;