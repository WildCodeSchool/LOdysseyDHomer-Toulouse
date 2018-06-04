const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'bibous',
  database : 'homer'
});
module.exports  =  connection;
