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

// select (read)
app.get('/',(req,res)=>{
    let select = "select eid,fname,lname,salary,dob from emp";
    db.query(select,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            res.json(result);
        }
    })
})

// select (where)
app.get('/select',(req,res)=>{
    let name = 'harsh';
    let selectspecific = "select eid,fname,lname,salary,dob from emp where fname=?";
    db.query(selectspecific,name,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            res.json(result);
        }
    })
})

// Insert Value
app.get('/insert',(req,res)=>{
    let arrayinsertdata = ['Harish','Patil','Sudhama Nagar','2002-12-12','2025-02-01','harish@gmail.com','harish@harsh'];
    let Insertdata = "insert into emp (fname,lname,addline1,dob,doj,email,pwd) values(?,?,?,?,?,?,?)";
    db.query(Insertdata,arrayinsertdata,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            // res.json(result);
            let select = "select * from emp";
            db.query(select,(err,result)=>{
                if(err){
                    res.json({message:"Not Found"});
                    return;
                }
                else{
                    res.json(result);
                }
            })
        }
    })
})

// Update Value
app.get('/update',(req,res)=>{
    let updatedValue = ['Harish','Patil','Sudhama Nagar','2002-12-12','2025-02-01','harish@gmail.com','harish@harsh'];
    let UpdateData = "update emp set fname=?,lname=?,addline1=?,dob=?,doj=?,email=?,pwd=? where eid = 1";
    db.query(UpdateData,updatedValue,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            // res.json(result);
            let select = "select * from emp";
            db.query(select,(err,result)=>{
                if(err){
                    res.json({message:"Not Found"});
                    return;
                }
                else{
                    res.json(result);
                }
            })
        }
    })
})

// Deleted Value
app.get('/deleted',(req,res)=>{
    let deletecond = 'Harish';
    let deletequery = 'Delete from emp where fname=?';

    db.query(deletequery,deletecond,(err,result)=>{
        if(err){
            res.json({message:"Delete Id not found"});
            return;
        }
        else{
            res.json({message:`Deleted Succesfully ${result}`})
        }
    })
})

app.listen(port,()=>{
    console.log(`Established Connection on http://localhost:${port}`);
})