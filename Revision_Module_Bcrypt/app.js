const express = require('express');
const app = express();
const router = require('./route/router');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/',router);

app.get('/',(req,res)=>{
    res.send(`<body bgcolor="gold">
        <h1 style="color:red;text-align:center;margin-top:300px;">Welcome to Home</h1>
        <button style="margin-left:650px;height:35px;width:80px;border-radius:20px;outline:none;pointer:cursor;border:none;"><a href='/api/login' style="text-decoration:none;">Login</a></button>
        <button style="margin-left:60px;height:35px;width:80px;border-radius:20px;outline:none;pointer:cursor;border:none;"><a href='/api/register' style="text-decoration:none;">Singup</a></button>
        </body>`);
})
app.listen(3000,()=>console.log(`Connection established on http://localhost:3000`))