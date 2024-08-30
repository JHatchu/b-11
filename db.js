const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "asset_manager",
  port: 3306, // default MySQL port
});

module.exports = pool;