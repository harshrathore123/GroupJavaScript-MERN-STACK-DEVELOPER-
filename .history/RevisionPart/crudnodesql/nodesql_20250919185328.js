// node js and express js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const Port = 3004;

app.use(express.json());

// Connection create
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"wdr1365"
});

// Test connection
db.connect((err)=>{
    if(err){
        console.log(`Error: ${errr}`);
        return;
    }
    console.log(`Database Connected`);
});

// Read Data without where clause
app.get('/',(req,res)=>{
    let query = 'select * from emp';

    // Create Query
    db.query(query,(err,result)=>{
        if(err){
            res.json({message:"Not found database"});
            return;
        }
        res.json(result);
    })
});

// Read Selected Data with where clause
app.get('/specificdata',(req,res)=>{
    let query = 'select * from emp where fname="harsh"';

    // Create Query
    db.query(query,(err,result)=>{
        if(err){
            res.json({message:"Not found database"});
            return;
        }
        res.json(result);
    })
});

// Insert data at particular id
app.get('/insert',(req,res)=>{
    let insertquery = `insert into emp 
    (fname,mname,lname,addline1,addline2,dob,salary,doj,email,pwd,did,dol) 
    values("Riya","","Sharma","32-Bhawna Nagar","Indore","2003-12-12",32000,"2024-12-12","Riya@gmail.com","riya23234",3,"2025-01-01")`;

    // Create Query
    db.query(insertquery,(err,result)=>{
        if(err){
            res.json({message:"Not found database"});
            return;
        }
        res.json(result);
    })
});


app.listen(Port,()=>{
    console.log(`Established Connection on http://localhost:${Port}`);
})