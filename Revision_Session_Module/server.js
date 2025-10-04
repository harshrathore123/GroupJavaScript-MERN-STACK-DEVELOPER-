const express = require('express');
const app = express();
const path = require('path');
const router = require('./route/auth')
const session = require('express-session');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// session config
app.use(session({
    secret:"mysecret",
    resave:false,
    saveUninitialized:true
}));

app.use('/session/api',router);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Home.html'));
})
app.listen(3000,()=>console.log(`Connection on http://localhost:3000`))