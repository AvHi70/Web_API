const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

mongoose.connect("mongodb://127.0.0.1:27017/webTest", {
    useNewUrlParser : true, 
    useCreateIndex : true, 
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    username : {
        type: String
    }, 
    address : {
        type: String
    }
})

const Users = mongoose.model("User", userSchema);

app.post('/user/register', function(req, res){
    var myData = new Users(req.body);
    myData.save();
})

app.listen(90);