const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"Template"
});

db.connect((err)=>{
    if(err){
        console.log(`Connection is not connected`);
    }
    else{
        console.log(`Connection is Connected Successfully`);
    }
})

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','SignUp.html'));
})

app.post('/',(req,res)=>{
    let insertarray = [req.body.fullname,req.body.email,req.body.mobile,req.body.password];
    
})

app.listen(3003,()=>{
    console.log(`Connection Established on http://localhost:3003`);
})