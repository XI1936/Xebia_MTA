const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  
app.post('/login',(req,res)=>{
 console.log(req.body);
 if(req.body.username == "MTN_user" && req.body.password == "MTN281#^@*"){
    res.status(201).send("SUCCESS")
 }else{
    res.status(500).send("Not Allowed..")
 }
})
 
app.listen(1010,(req,res)=>{
 console.log('Express running at port 1010......');
})