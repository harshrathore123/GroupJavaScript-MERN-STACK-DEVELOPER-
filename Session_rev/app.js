const express = require('express');
const app = express();
const path = require('path');
const route = require('./route/auth_router')
const session = require('express-session');

app.use(session({
    secret:"mysecret",
    resave:false,
    saveUninitialized:true
}))

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use('/api/',route);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Home.html'))
})

app.listen(3000,()=>console.log(`Connected on http://localhost:3000`))