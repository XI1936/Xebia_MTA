const express = require('express');
const cors = require('cors');
const app = express();
 app.use(cors())

  
app.post('/login',async (req,res)=>{
 
 if(req.body.username == "MTN_user" && req.body.password == "MTN281#^@*"){
    res.status(200).send("SUCCESS")
 }else{
    res.status(500).send("Not Allowed..")
 }
})
 
app.listen(1010,(req,res)=>{
 console.log('Express running at port 1010......');
})