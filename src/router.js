const express = require("express");
const router = express.Router();
const path = require("path");

const getUserData = require("./queries/getUserData");
const getWalkData = require("./queries/getWalkData");
const postWalk = require("./queries/postWalk");

router.get("/api/getWalkData", (req, res) => {
  console.log("hit the route");
  getWalkData()
    .then(result => {
      console.log("here's result", result);
      res.send(result);
    })
    .catch(err => {
      console.log("yall hit err", err);
      response.status(500).render("500");
    });
});

router.post("/api/addWalk", (req, res) => {
  console.log("post add walk route");
  const newWalk = req.body;
  console.log("in post route req is", req);
  postWalk(newWalk);
  res.redirect("/walks");
});

// Handles any requests that don't match the ones above
router.get("*", (req, res) => {
  res.sendFile(
    path.join(
      "/home/charlielafosse/FAC/projects/amble2/client/build/index.html"
    )
  );
});

module.exports = router;
