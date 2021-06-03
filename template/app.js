const express = require('express');
//hbs is our template now
const hbs = require('hbs');
const app = express();

//tells systemn that hbs is in use
app.set("view engine", "hbs");

app.get('/', function(req, res){
    res.render("home", {
        username: 'Love of God', 
        age: '22'
    })                  //home.hbs is not require
});
app.get('/about', function(req, res){
    res.render('about')
})

app.listen(90);