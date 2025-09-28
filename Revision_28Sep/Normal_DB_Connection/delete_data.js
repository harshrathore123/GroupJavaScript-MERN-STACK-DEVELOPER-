const db = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    let DeleteId = 1;
    let DeleteQuery = 'Delete from Harsh_Express where id=?';
    db.query(DeleteQuery,DeleteId,(err,result)=>{
        if(err){
            res.json({message:"Deleted Id is not present"});
            return;
        }
        res.json({message:`${JSON.stringify(result)}}`});
    })
})

app.listen(2002,()=>{
    console.log(`Connection established on http://localhost:2002`);
})
