const db = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    let AlterQuery = 'alter table harsh_express add column birth_of_year int';
    db.query(AlterQuery,(err,result)=>{
        if(err){
            res.json({message:"Already Add"});
            return;
        }
        res.json({message:`${JSON.stringify(result)}}`});
    })
})

app.listen(2002,()=>{
    console.log(`Connection established on http://localhost:2002`);
})
