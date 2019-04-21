const dbConnection = require("../db/db_connection.js");

const getUserData = () => {
  console.log("going into promise");
  return new Promise((resolve, reject) => {
    console.log("going into db query");
    dbConnection.query(`SELECT * FROM users`, (err, res) => {
      console.log("just done query", res.rows[0]);
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
}

module.exports = getUserData;
