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
            res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Animated Card</title>
  <style>
    /* Body Background with smooth animation */
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb);
      background-size: 300% 300%;
      animation: bgMove 10s ease infinite;
      font-family: Arial, sans-serif;
    }

    @keyframes bgMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Card */
    .card {
      width: 350px;
      padding: 20px;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      text-align: center;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 35px rgba(0,0,0,0.3);
    }

    .card h1 {
      font-size: 24px;
      color: #ff4d4d;
      margin-bottom: 15px;
      animation: fadeIn 2s ease-in-out;
    }

    .card p {
      font-size: 16px;
      color: #333;
      margin: 8px 0;
      opacity: 0;
      animation: slideUp 1s ease forwards;
    }

    .card p:nth-child(2) { animation-delay: 0.5s; }
    .card p:nth-child(3) { animation-delay: 1s; }
    .card p:nth-child(4) { animation-delay: 1.5s; }

    .card .dob {
      color: goldenrod;
      font-weight: bold;
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>

  <div class="card">
    <h1>${result[0].fname} ${result[0].lname}</h1>
    <p>${result[0].addline1}</p>
    <p>${result[0].addline2}</p>
    <p class="dob">${result[0].dob}</p>
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