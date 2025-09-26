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
                    <head><title>Server Database</title>
                    <style>
                    .card {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: linear-gradient(135deg, #1e1e2f, #2a2a40);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  text-align: center;
  transition: 0.4s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 12px 40px rgba(0,0,0,0.5);
}

.card h1 {
  font-size: 26px;
  color: #ff4d4d;
  text-shadow: 0 0 15px red, 0 0 30px rgba(255,0,0,0.6);
  margin-bottom: 15px;
}

.card p {
  font-size: 18px;
  margin: 8px 0;
  color: #00ff88;
  text-shadow: 0 0 8px #00ff88, 0 0 20px rgba(0,255,136,0.6);
}

.card .dob {
  font-size: 18px;
  color: gold;
  text-shadow: 0 0 10px gold, 0 0 25px rgba(255,215,0,0.7);
}

                    </style></head>
                    <body bgcolor="black">
                        <div class="container">
                            <div class="card">
                                <h1>${result[0].fname} ${result[0].lname}</h1>
                                <p>${result[0].addline1}</p>
                                <p>${result[0].addline2}</p>
                                <p class="dob">${result[0].dob}</p>
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