const mysql = require("mysql2");

const dbConnection = mysql.createConnection(
  {
  host: "localhost",
  user: "root",
  password: "HP$38uZ61BbMth0",
  database: "employees_db"
},
);

// NOTE: This program looks to access 'mysql/promise' not just mysql.
module.exports = dbConnection.promise();