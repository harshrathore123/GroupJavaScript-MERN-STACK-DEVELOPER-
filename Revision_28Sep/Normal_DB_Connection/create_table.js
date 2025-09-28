const db = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    let createtable = 'create table harsh_express1 (id int primary key auto_increment,name varchar(100), age int, city varchar(100))';
    db.query(createtable,(err,result)=>{
        if(err){
            res.json({message:"Already Exists Table"});
            return;
        }
        res.json({message:`${JSON.stringify(result)}}`});
    })
})

app.listen(2002,()=>{
    console.log(`Connection established on http://localhost:2002`);
})
