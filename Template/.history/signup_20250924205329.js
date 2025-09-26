// USING NODE JS
const http = require('http');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');
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
    if (req.url === '/' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'public', 'signup.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(filePath).pipe(res);
}
});

server.listen(port,()=>{
    console.log(`Connection established on http://localhost:${port}`);
})