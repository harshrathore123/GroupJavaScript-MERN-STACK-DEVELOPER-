const http = require('http');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"wdr1365"
});

db.connect((error)=>{
if(error){
    console.error('Database not connnected');
    return;
}
console.log('Database Connected');
})

http.createServer((req,res)=>{
    if(req.url === '/'){
        db.query('select * from emp',(err,result)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end('database error');
                return;
            }
            res.writeHead(200,{"content-type":"text/html"});
            res.write(`
                <html>
                    <head><title>Server Database</title></head>
                    <body bgcolor="black">
                        <div class="container">
                            <div class="card">
                                <h1 style="color:red;box-shadow:0 0 20px red">${result[0].fname} ${result[0].lname}</h1>
                                <p>${result[0].addline1}</p>
                                <p>${result[0].addline2}</p>
                                <p>${result[0].dob}</p>
                            </div>
                        </div>
                    </body>
                </html>
                `);
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/plaiin"});
        console.log(`Not Found`);
    }
}).listen(3009,()=>{
    console.log(`Connection established on http://localhost:3009`);
})