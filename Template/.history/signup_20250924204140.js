// USING NODE JS
const http = require('http');
const mysql = require('mysql2');

// Create Connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'harsh@aA1234',
    database:'Template'
});

// DB Connect
db.connect((err)=>{
    if(err){
        console.log(`Not Connected Database`);
    }
    else{
        console.log(`Database Connected Successfully`);
    }
})

const port = 3003;
const server = http.createServer((req,res)=>{
    // Data Post
    if(req.url === '/' && req.method=== 'POST'){
        let insertarray = [req.body.fullname,req.body.email,req.body.mobile,req.body.password];
        insertarray.forEach((val)=>console.log(val));

        // let insertquery = `insert into Template (fullname,email,phone_number,password) values (?,?,?,?)`;
    }
});

server.listen(port,()=>{
    console.log(`Connection established on http://localhost:${port}`);
})