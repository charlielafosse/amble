const { Pool } = require("pg");
const url = require("url");
require("dotenv").config();

let DB_URL = process.env.DB_URL;

DB_URL = "postgres://charlieamble:password@localhost:5432/amblemac";

// if (process.env.NODE_ENV === "test") {
//   DB_URL = process.env.TEST_DB_URL;
// }

console.log("db url is ", DB_URL);

if (!DB_URL) {
  throw new Error("Environment variable DB_URL must be set");
}

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2
};

if (username) {
  options.user = username;
}
if (password) {
  options.password = password;
}

options.ssl = options.host !== "localhost";

console.log("options are : ", options);

module.exports = new Pool(options);
