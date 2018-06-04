const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'bengaioff',
  database : 'quete040'
});
module.exports  =  connection;