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
                
                `)
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/plaiin"});
        console.log(`Not Found`);
    }
}).listen(3009,()=>{
    console.log(`Connection established on http://localhost:3009`);
})