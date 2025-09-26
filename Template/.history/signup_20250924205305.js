// USING NODE JS
const http = require('http');
const mysql = require('mysql2');
const path = require('path');

path.join(__dirname,'public');

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
    if(req.url==='/'){
        res.sendFile(path.join(__dirname,'public','SignUp.html'));
    }
});

server.listen(port,()=>{
    console.log(`Connection established on http://localhost:${port}`);
})