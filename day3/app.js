const fs = require('fs');
const http = require('http');

// reading json file // it will produce buffer data, in bytes
const jsonFile = fs.readFileSync("text.json");


//console.log(jsonFile);
//<Buffer 7b 0d 0a 20 20 20 20 22 73 74 6e 61 6d 65 22 2 ..... something like this
// so we need to convert it into string
const jsonFileString =  jsonFile.toString();

console.log(jsonFileString);
// now we need to parse the json data so that we can use something like data.stname

const data = JSON.parse(jsonFileString); 

http.createServer(function(req, res){

    for (var i=0; i<data.persons.length; i++){
        var mydata = data.persons[i].name;
        res.write(mydata);
    }
    for (var i=0; i<data.persons.length; i++){
        var mydata = data.persons[i].city;
        res.write(mydata);
    }
    for (var i=0; i<data.persons.length; i++){
        var mydata = data.persons[i].phone;
        res.write(mydata);
    }
res.write();
res.end()

}).listen(90);
