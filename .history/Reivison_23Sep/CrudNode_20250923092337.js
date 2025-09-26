//Here we will perform normal crud operation in node js with search

const http = require('http');
const port = 3004;

//For performing crud operation get the data here
let data = [
    {id:1,name:"harsh",age:23},
    {id:2,name:"akash",age:32},
]

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end('Hi this is my server');

    //For read all data
    if(req.url === '/'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(data);
    }
})






server.listen(port,()=>{
    console.log(`Our Connection is Established on http://localhost:${port}`);
})