// Database main connection file
const mysql = require("mysql");
const connMySQL = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test_node",
  });
};

module.exports = () => {
  return connMySQL;
};
