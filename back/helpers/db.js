const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'supertramp',
  database : 'Homer'
});
module.exports  =  connection;