const express = require('express');
const path = require('path');
const router = require("./router")

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join('/home/charlielafosse/FAC/projects/amble2/client/build/index.html')));

app.use(router);
app.set("port", process.env.PORT || 5000);

module.exports = app;
