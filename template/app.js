const express = require('express');
//hbs is our template now
const hbs = require('hbs');
const app = express();
const path = require('path')

const partialFolder = path.join(__dirname, 'partials');

//now system knows where our partial files are 
hbs.registerPartials(partialFolder)

//tells systemn that hbs template is in use
app.set("view engine", "hbs");

app.get('/', function(req, res){
    res.render("home", {
        username: 'Abhishek', 
        age: '22', 
        address: "Dhangadhi"
    })                  //home.hbs is not require
});
app.get('/about', function(req, res){
    res.render('about')
})

app.listen(90);