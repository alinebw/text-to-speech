const mysql = require ('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'r091779',
  database: 'text-to-speech'
});

module.exports = connection;

