const dbConnection = require("../db/db_connection.js");

const postWalk = newWalk => {
  console.log("submitted data is:", newWalk);
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO walks (location, difficulty) VALUES ($1, $2)`;
    const values = [newWalk.location, newWalk.difficulty];
    dbConnection.query(query, values, (err, res) => {
      if (err) reject(err);
      else resolve(res.rows);
    });
  });
};

module.exports = postWalk;
