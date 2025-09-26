//Here we will perform normal crud operation in node js with search

const http = require('http');
const port = 3004;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end('Hi this is my server');
})

server.listen(port,()=>{
    console.log(`Our Connection is Established on http://localhost:${port}`);
})