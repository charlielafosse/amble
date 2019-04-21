const dbConnection = require("../db/db_connection.js");

const getWalkData = () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM walks`, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
}

module.exports = getWalkData;
