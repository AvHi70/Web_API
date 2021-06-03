// express module - third-party module
// nodemon --> to install globally -g at end 
const express = require("express");
const path = require("path");

const app = express();

const publicDir = path.join(__dirname, '/public');

//for image load
app.use(express.static(publicDir));


// for to build home page
app.get("/", function(req, res){
    res.sendFile(publicDir + '/home.html')
})
 
// for to build pages: here is event page
app.get("/event", function(req, res){           //url is passed
    res.sendFile(publicDir + '/event.html')
})
 
app.get("/contact", function(req, res){         //url is passed
    res.sendFile(publicDir + '/contact.html')
})
 
app.listen(90);