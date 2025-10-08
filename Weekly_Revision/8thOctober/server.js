const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const route = require('./route/authRoute');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"myprotectsecret",
    resave:false,
    saveUninitialized:true,
    // cookie:{
    //     maxAge:30000
    // } 
}));

app.use('/api/',route);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Home.html'))
})

app.listen(3000,()=>console.log(`Connected on http://localhost:3000`));