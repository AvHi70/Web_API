// const validator = require("validator");

// var num = "123456";
// var check = validator.isNumeric(num);

// if(check == true){
//     console.log("Is Number")
// }else{
//     console.log(" Is not a number")
// }

// var login = require("./mymodule/login")
// var result = login("Abhishek", 678)
// console.log(result)

// file system 
// module name fs : it is a core mouule.
const fs = require("fs");


// to write the file (and create if not)
fs.writeFileSync("note.txt", "I am Abhishek Chaudhary.");

// to append the file
fs.appendFileSync("note.txt", "I am soon going to Korea.")

// to read the file
const txt = fs.readFileSync("note.txt")
const read = txt.toString();
console.log(read)
