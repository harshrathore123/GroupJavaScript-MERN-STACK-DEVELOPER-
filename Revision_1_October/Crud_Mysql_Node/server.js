const http = require('http');
const db = require('./db');

const server = http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='POST'){
        const data = ['harsh','rathore','bhopal',23,475875];
        const insert = 'insert into practicemysql(fname,lname,city,age,pincode) values(?,?,?,?,?)';
        
        db.query(insert,data,(err,result)=>{
            if(err) return console.log(`Something went wrong`);
            console.log(result.insertId);
        })   
    }
    if(req.url==='/update' && req.method==='POST'){
          const data = ['piyush','rathore','bhopal',23,475875];
        const insert = 'update practicemysql set fname=?,lname=?,city=?,age=?,pincode=? where id = 1';
        
        db.query(insert,data,(err,result)=>{
            if(err) return console.log(`Something went wrong`);
            console.log(result.insertId);
        })  
    }
        if(req.url==='/read' && req.method==='GET'){
        const insert = 'select * from practicemysql';
        
        db.query(insert,(err,result)=>{
            if(err) return console.log(`Something went wrong`);
            console.log(JSON.stringify(result));
        })  
    }
})

server.listen(3000,()=>console.log(`Established connection on http://localhost:3000`))