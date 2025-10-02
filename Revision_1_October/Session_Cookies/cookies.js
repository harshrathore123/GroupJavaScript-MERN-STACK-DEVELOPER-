const express = require('express');
const cookies = require('cookie-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/setcookies',(req,res)=>{
    res.cookie('username','harsh');
    res.end(`cookies is set`);
})

app.get('/getcookies',(req,res)=>{
    const user = req.cookies.username || `No username`;
    res.end(`Username: ${user}`);
})

app.listen(3000,()=>console.log(`Connection is on http://localhost:3000`))