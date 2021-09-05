const mysql = require ('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  database: 'text-to-speech'
});

module.exports = connection;

