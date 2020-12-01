//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const User = require("./models/user");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


const port = process.env.PORT||3000;
const app =  express();

app.use(session({
    secret: "secretpage",
    resave: false,
    saveUninitialized: false
}))

mongoose.connect("mongodb://localhost:27017/userDB", {useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true});


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
 
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req,res)=>{
    res.render("home");
});

app.get("/login", (req,res)=>{
    res.render("login");
});

app.post("/login", (req,res)=>{
    
});

app.get("/register", (req,res)=>{
    res.render("register");
});

app.post("/register", (req,res)=>{
    User.register
});


app.listen(port, ()=>{
    console.log("Server is running on port " + port);
});