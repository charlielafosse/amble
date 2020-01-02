const fs = require("fs");
const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const buildDatabase = cb => {
  console.log("bout to build db");
  dbConnection.query(sql, cb);
};

//uncomment to run in command line db_build.js
// buildDatabase();

module.exports = buildDatabase;
