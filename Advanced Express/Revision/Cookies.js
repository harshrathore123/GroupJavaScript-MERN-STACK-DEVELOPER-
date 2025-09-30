const express = require('express');
const app = express();
const cookies = require('cookie-parser');

app.use(cookies());

app.get('/setcookie',(req,res)=>{
    res.cookie('username','harshr');
    res.send(`Cookie set successfully`);
})

app.get('/getcookie',(req,res)=>{
    const user = req.cookies.username;
    res.send(`When get the cookie then user is : ${user}`);
})

app.listen(3000,()=>{
    console.log(`Connection established on http://localhost:3000`);
})