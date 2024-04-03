#!/usr/bin/env node
'use strict'

var express = require('express');
var app = express();
//var logger = require('morgan')
// log requests
//app.use(logger('dev'));
//mount express-route 
app.use("/dwitter", require("./package"));

var port=process.argv[2]||3000;

app.listen(port);

console.log("http://localhost:"+port+"/dwitter")

