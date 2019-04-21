// const dbConnection = require("../../src/db/db_connection.js");
//
// export const getUserData = () =>
//   console.log("going into promise");
//   new Promise((resolve, reject) => {
//     console.log("going into db query");
//     dbConnection.query(`SELECT * FROM users`, (err, res) => {
//       console.log("just done query", res.rows[0]);
//       if (err) reject(err);
//       else resolve(res.rows[0]);
//     });
//   });

 export const getUserData = () => {
   return fetch('/api/getData')
   .then(res => res.json())
   .catch(err => {
     throw new Error("fetch failed!")
   })
 }
