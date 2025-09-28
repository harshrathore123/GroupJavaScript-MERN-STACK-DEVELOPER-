const db = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    let insert_data = ['Harsh',23,'Bhopal'];
    let insertQuery = 'insert into harsh_express (name,age,city) values (?,?,?)';
    db.query(insertQuery,insert_data,(err,result)=>{
        if(err){
            res.json({message:"Duplicate Entry"});
            return;
        }
        res.json({message:`${JSON.stringify(result)}}`});
    })
})

app.listen(2002,()=>{
    console.log(`Connection established on http://localhost:2002`);
})
