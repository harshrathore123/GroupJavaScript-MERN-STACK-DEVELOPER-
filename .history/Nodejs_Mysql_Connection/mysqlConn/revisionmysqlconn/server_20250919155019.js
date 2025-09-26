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
  <title>Stylish Card</title>
  <style>
    /* Background Animation */
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(-45deg, #ff4d4d, #4d79ff, #00ffcc, #ffcc00);
      background-size: 400% 400%;
      animation: gradientBG 12s ease infinite;
      font-family: 'Poppins', sans-serif;
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Card Styling */
    .card {
      width: 420px;
      padding: 25px;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(15px);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6),
                  0 0 30px rgba(255,255,255,0.1);
      text-align: center;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(from 180deg, #ff4d4d, #00ffcc, #ffd700, #4d79ff, #ff4d4d);
      animation: rotateBorder 6s linear infinite;
      z-index: -1;
    }

    @keyframes rotateBorder {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .card h1 {
      font-size: 28px;
      color: #ff4d4d;
      margin-bottom: 15px;
      text-shadow: 0 0 10px red, 0 0 25px rgba(255, 0, 0, 0.8);
      animation: glowPulse 2s infinite alternate;
    }

    @keyframes glowPulse {
      from { text-shadow: 0 0 10px red, 0 0 25px rgba(255, 0, 0, 0.8); }
      to { text-shadow: 0 0 20px #ff8080, 0 0 40px rgba(255, 0, 0, 1); }
    }

    .card p {
      font-size: 18px;
      margin: 10px 0;
      color: #00ff99;
      text-shadow: 0 0 10px #00ff99, 0 0 25px rgba(0,255,153,0.7);
      transition: 0.3s;
    }

    .card p:hover {
      transform: scale(1.1);
      color: #66ffcc;
    }

    .card .dob {
      font-size: 20px;
      color: gold;
      text-shadow: 0 0 12px gold, 0 0 30px rgba(255,215,0,0.8);
      animation: flicker 2.5s infinite;
    }

    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: 1;
      }
      20%, 24%, 55% {
        opacity: 0.4;
      }
    }

    .card:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 15px 50px rgba(0,0,0,0.8),
                  0 0 40px rgba(255,255,255,0.2);
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