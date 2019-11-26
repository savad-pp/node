"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var controllers_1 = require("./controllers");
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname, '../client/dist/client')));
app.use('/', controllers_1.welcomeController);
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
