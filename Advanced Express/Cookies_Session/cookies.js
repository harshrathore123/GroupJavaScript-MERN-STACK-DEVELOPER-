const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

//set a cookie
app.get('/setcookies',(req,res)=>{
    res.cookie('username','Harshr');
    res.send(`Cookie has been set`);
})

// get a cookie
app.get('/getcookie',(req,res)=>{
    const user = req.cookies.username||'hi the cookie is not set';
    res.send(`Username from cookie: ${user}`);
})

app.listen(3000,()=>{
    console.log(`Connection established on http://localhost:3000`);
})