//Node js
const http = require('http'); //require http for createServer
const mysql = require('mysql2');

// create server
const server = http.createServer((req,res)=>{
    //first we make header file
    res.writeHead(200,{"content-type":"text/plain"});
    res.end('Hi, My SERVER IS CREATED');
});

// server listen
server.listen(5000,()=>{
    console.log('Established Connection on http://localhost:5000');
})