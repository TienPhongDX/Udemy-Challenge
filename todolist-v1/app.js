const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = process.env.PORT;

let taskList = ["Learning", "Date with Ý", "Go to beach"];
let workList = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var day = date.getDate();

  res.render("index", { listTitle: day, newTask: taskList});
});

app.get("/work", function (req, res) {
  var work = "Work";
  res.render("index", { listTitle: work, newTask: workList});
});

app.post("/", function (req, res) {
   task = req.body.task;

   if (req.body.list === "Work") {
    workList.push(task);
    res.redirect("/work");
   } else {
    taskList.push(task);
    res.redirect("/");
   }
   
   
   
})



app.listen(port || 3000, function () {
  console.log("Server is runnning on port " + port);
});
