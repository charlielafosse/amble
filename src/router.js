const express = require("express");
const router = express.Router();
const path = require("path");

const{ getUserData, getWalkData, postWalk } = require("./queries")

router.get("/api/getWalkData", (req, res) => {
  console.log("hit the route");
  getWalkData()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log("yall hit err", err);
      response.status(500).render("500");
    });
});

router.post("/api/addWalk", (req, res) => {
  const newWalk = req.body;
  console.log("in post route req body is", newWalk);
  postWalk(newWalk)
    .then(data => {
      console.log("RESULT FROM POSTWALK QUERY", data);
      res.send(data);
    })
    .catch(err => console.log("error", err));
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
