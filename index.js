const express = require('express');
const cors = require("cors");
const bodyParser = require("express");
const routes = require("./routes");

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes)

app.listen(3000, () => {
    console.log("Running on port 3000");
});