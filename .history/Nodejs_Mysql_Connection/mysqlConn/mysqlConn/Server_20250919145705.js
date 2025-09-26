const http = require (`http`);
const mysql = require ('mysql2');

//CREATE MYSQL CONNECTION

const db = mysql.createConnection({
   host:`localhost`,
   user:`root`,
   password:'harsh@aA1234',
   database: 'wdr1365'

})


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

http.createServer((req,res)=>{
     
    if(req.url ==='/'){
db.query("select * from emp",(err,result)=>{

    if(err){
        res.writeHead(500,{'content-type':'text/plain'});
        res.end("database error");
        return;
    }
    res.writeHead(200,{'content-type':'text/html'});
    res.end(JSON.stringify(result));
});

    }else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("not found");
    }
  
}).listen(3003,()=>{
    console.log(`Server connection on http://localhost:3003`)
})

