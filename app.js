//jshint esversion:6
require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser");

const mongodb=require('mongodb');
const md5 = require('md5');
const mongoose=require('mongoose');
const ejs=require("ejs");
const app=express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true});

const userSchema= new mongoose.Schema({
    email: String,
    password:String

});




const User=mongoose.model("User",userSchema);


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res)  {
    res.render("home");
  
});
app.get("/login", function(req, res)  {
    res.render("login");
  
});
app.get("/secrets", function(req, res)  {
    res.render("secrets");
  
});
app.get("/register", function(req, res)  {
    res.render("register");
  
});


app.post("/register", function(req, res) {
    

}); 

app.post("/login", function(req, res)  {
     
        
});
    


  

app.listen(3000, function() {
    console.log(`Server started on port`);
});