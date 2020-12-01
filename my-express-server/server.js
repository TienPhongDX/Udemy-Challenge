//jshint esversion: 6
 const express = require("express");
 const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("HHHHHHHHHHHHContact me at: ntphongdx62@gmail.com.");
});

app.get("/about", function (req, res) {
    res.send("Author: Nguyen Tien Phong <br> La Hai, Dong Xuan, Phu Yen");
});



 app.listen(3000, function () {
     console.log("Server open on port 3000 ");
 });