"use strict";

const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("path");
const cors = require("cors");

//load env from .env file
if (fs.existsSync("./.env")) {
    require("dotenv").config();
}

const config = require('./src/config');

//routers
const indexRouter = require("./src/routes/index");
const apiRouter = require("./src/routes/api");
var apiResponse = require("./src//helpers/apiResponse");

//initializing app
let app = express();
app.listen(process.env.PORT);

//setting up config and parser
app.set("config", config);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// View engine setup
app.set("views", join(__dirname, "public"));
app.set("view engine", "html");
app.engine('html', require('hbs').__express);

app.use("/", indexRouter);
app.use("/api/", apiRouter);
//allow cors
//app.use(cors());
//app.use(cors({origin: 'http://localhost:3000/*'}));

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

process.on("SIGINT", () => {
    console.log("stopping the server");
    process.exit(-1);
});



module.exports = app;

