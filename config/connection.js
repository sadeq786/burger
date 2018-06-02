// setup the code to connect Node to MySQL.

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "burgers_db",
    "port": 8889
  });
};

connection.connect();
module.exports = connection;