var fs=require('node:fs')
var path=require('node:path')
//var qs=require('node:qs')
var net=require('node:net')
var express=require("express");

var dweets=JSON.parse(fs.readFileSync(path.join(__dirname, "..", "http", "dweets.json")))

var endpoint = module.exports = express.Router();

endpoint.get("/random", async function(req,res) { 

    var rnd=Math.floor(Math.random()*dweets.length);
    var object = dweets[rnd];

    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(object)); 
});

endpoint.get("/id/:id", async function(req,res) { 

    var rnd=Math.floor(Math.random()*dweets.length);
    var object = dweets[rnd];

    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(object)); 
});

endpoint.use(express.static(path.join(__dirname, "..", "http")));