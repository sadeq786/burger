// setup the code to connect Node to MySQL.

var mysql = require("mysql");

var connection = mysql.createConnection({
  "development": {
    "username": "xawecbfl9w3rdkq2",
    "password": "b2994owxvzpuip5r",
    "database": "p4ns1d1yui4aama5",
    "host": "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "burgers_db",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
});

module.exports = connection;