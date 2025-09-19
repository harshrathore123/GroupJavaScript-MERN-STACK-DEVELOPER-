// //http module require for creating server
// const http = require("http");

// //fs module require for file read,write,update
// const fs = require("fs");

// // path module require for taking path data.json
// const path = require("path");

// // Taking port in a variable
// const PORT = 5000;

// const servers = http.createServer((req,res)=>{
//     // res.writeHead(200,{"Content-Type":"text/Plan"});
//     // console.log(req.url);

//     // if(req.url === '/user'){
//     //     res.end("<html><body><h1>Hello This is user path</h1></body></html>");
//     //     return;
//     // }
//     // res.end("Hello World");

//     if(req.url === '/'){
//     // 404 route
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end("Route not found");
//     }
    
//     else if (req.url === "/api/users" && req.method === "GET") {
//     const filePath = path.join(__dirname, "data.json");

//     // fs is used for read write operation
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Error reading data file" }));
//       } else {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(data); // send JSON content
//       }
//     });
//   }
// });

// servers.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT}`);
// });