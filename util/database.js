const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Azar.190320",
  database: "node-complete",
});

module.exports = pool.promise();
