//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Calculator
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("Your calculation result is: " + result);
});

//BMI Calculator
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    
    
    var result = w/h/h;
    res.send("Your BMI is " + result);
});


//Listener
app.listen(port, function () {
  console.log("Server open on port " + port);
});
