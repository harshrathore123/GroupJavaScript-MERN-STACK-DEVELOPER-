const express = require('express');
const mysql = require('mysql2');
const port = 3002;

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"wdr1365"
});

db.connect((err)=>{
    if(err){
        console.error(`Error: ${err}`);
        return;
    }
    else{
        console.log(`Connected Successfully`);
    }
})

app.get('/',(req,res)=>{
    let select = "select eid,fname,lname,salary,dob from emp";
    db.query(select,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            res.json(JSON.stringify(result));
        }
    })
})

app.listen(port,()=>{
    console.log(`Established Connection on http://localhost:${port}`);
})