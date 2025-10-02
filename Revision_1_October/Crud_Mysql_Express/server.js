const db = require('./db');
const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'Crud_Mysql_Express')))

app.get('/',(req,res)=>{
    res.send(`Server Running`);
})

// Insert Data
app.get('/api/insert_data',(req,res)=>{
    res.sendFile(path.join(__dirname,'insert.html'));
})

app.post('/api/insert_data',(req,res)=>{
    try{
        const {fname,lname,city,age,pincode} = req.body;
        const data = [fname,lname,city,age,pincode];
        const insert = 'insert into practicemysql(fname,lname,city,age,pincode) values(?,?,?,?,?)';

        db.query(insert,data,(err,result)=>{
            if(err) return res.send(`Something Went Wrong`);
            res.end(`Row inserted on insert ID: ${result.insertId}`);
        })
    }
    catch(error){
        res.send(`Error: ${err}`);
    }
})

//Update Data
app.get('/api/update_data',(req,res)=>{
    res.sendFile(path.join(__dirname,'update.html'));
})

app.post('/api/update_data',(req,res)=>{
    try{
        const {fname,lname,city,age,pincode} = req.body;
        const data = [fname,lname,city,age,pincode];
        const insert = 'update practicemysql set fname=?,lname=?,city=?,age=?,pincode=? where id=1';

        db.query(insert,data,(err,result)=>{
            if(err) return res.send(`Something Went Wrong`);
            res.end(`Updated Successfully`);
        })
    }
    catch(error){
        res.send(`Error: ${err}`);
    }
})

//Delete Data
app.get('/api/delete_data',(req,res)=>{
    res.sendFile(path.join(__dirname,'delete.html'));
})

app.post('/api/delete_data',(req,res)=>{
    try{
    const {id} = req.body;
    const delete_id = [id];
    const query = 'delete from practicemysql where id=?';
    db.query(query,delete_id,(err,result)=>{
        if(err) return res.end(`Something went wrong`);
        res.end(`Deleted Successfully`);
    })
    }
    catch(err){
        res.send(`Error: ${err}`);
    }
})

//Read Data
app.get('/api/read_data',(req,res)=>{
    try{
    const select = 'select * from practicemysql';
    db.query(select,(err,result)=>{
        if(err) return res.end(`Error: ${err}`);
        res.end(`Show Data ${JSON.stringify(result)}`);
    })
    }
    catch(e){
        res.end(`Error in Exception: ${e}`);
    }
})

//Read By ID Data
app.get('/api/read_byID_data',(req,res)=>{
    res.sendFile(path.join(__dirname,'read.html'));
})

app.post('/api/read_byID_data',(req,res)=>{
    try{
    const {id} = req.body;
    const select = 'select * from practicemysql where id = ?';
    db.query(select,id,(err,result)=>{
        if(err) return res.end(`Error: ${err}`);
        res.end(`Show Data ${JSON.stringify(result)}`);
    })
    }
    catch(e){
        res.end(`Error in Exception: ${e}`);
    }
})



app.listen(3000,()=>console.log(`Established Connected on http://localhost:3000`));
