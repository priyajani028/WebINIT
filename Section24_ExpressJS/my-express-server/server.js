//jshint esversion:6

const express = require('express');

const app = express();

app.get("/",function(req, res){
    // console.log(request);
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req,res){
    res.send("contact me");
});

app.get("/about", function(req,res){
    res.send("This is me");
});

app.get("/hi", function(req,res){
    res.send("hiiiii");
});

app.listen(3000, function(){
    console.log("Host started!");
});
