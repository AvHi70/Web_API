// const validator = require("validator");

// var email = "mycollege";
// var check = validator.isEmail(email);

// if(check = "mycollege"){
//     console.log("Valid")
// }else{
//     console.log("Not valid")
// }

// var http = require("http")

// http.createServer(function(req, res){
//     res.write("Hello Abhishek, ");
//     res.end();

// }).listen(90)

var calculate = require("./calc") //path specify " ./ "
var result = calculate(7,4);
console.log("The result is "+result);

console.log("I am learning")