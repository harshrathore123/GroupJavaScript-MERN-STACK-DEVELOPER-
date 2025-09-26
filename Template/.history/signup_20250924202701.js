// USING NODE JS
const http = require('http');
const mysql = require('mysql2');



const port = 3003;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end('Server is connected');
});

server.listen(port,()=>{
    console.log(`Connection established on http://localhost:${port}`);
})