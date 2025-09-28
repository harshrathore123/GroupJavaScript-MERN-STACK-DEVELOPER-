const db = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    let UpdateQuery = 'update harsh_express set birth_of_year = 2003 where id=3';
    db.query(UpdateQuery,(err,result)=>{
        if(err){
            res.json({message:"Already Updated"});
            return;
        }
        res.json({message:`${JSON.stringify(result)}}`});
    })
})

app.listen(2002,()=>{
    console.log(`Connection established on http://localhost:2002`);
})
