const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    console.log(req.body.city);
    const cityName = req.body.city;
    const apiKey = "c76edc14ccf833d4f40072b1171fa1c5";
    const units = "metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units="+units+"";

    https.get(url, function (response) {
      console.log(response.statusCode);

      response.on("data", function (data) {
        const weatherData = JSON.parse(data);

        const location = weatherData.name;
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const iconUrl = " http://openweathermap.org/img/wn/" + icon + "@2x.png";

        res.write(
          "<h1>The temperature in " + location + " is: " + temp + " C</h1>"
        );
        res.write("<p> with " + description + " </p>");
        res.write("<img src= '" + iconUrl + "'>");
        res.send();
      });
    });
  });

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
