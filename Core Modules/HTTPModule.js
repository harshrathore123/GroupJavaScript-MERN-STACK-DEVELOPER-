// normally require or import http module
const http = require("http");

// create server
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello From Node.js Server!");
})

// console.log(server);
server.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
})





// server.listen(3000, () => {
//   console.log("Server is running at http://localhost:3000");
// });
