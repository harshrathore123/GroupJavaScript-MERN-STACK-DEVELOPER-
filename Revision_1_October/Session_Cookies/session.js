const express = require('express');
const session = require('express-session');
const app = express();
app.use(express.urlencoded({extended:true}));
const path = require('path');

app.use(express.static(path.join(__dirname,'Session_Cookies')))
app.use(session({
    secret:"mysecret",
    resave:false,
    saveUninitialized:true
}));

app.get('/',(req,res)=>{
    res.end(`Server Connected`);
})

/** Login Component
 * Dashboard Component
 * Logout Component
 * 
 */

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"));
})

app.post('/login',(req,res)=>{
    const{fullname,password} = req.body;
    if(fullname==='harsh' && password==='harsh'){
    req.session.fullname = fullname;
    res.redirect('/dashboard');
    }
})

app.get('/dashboard',(req,res)=>{
    if(!req.session.fullname){
        return res.redirect('/login');
    }
    res.set('Cache-Control','no-store');
    res.sendFile(path.join(__dirname,'dashboard.html'));

})

app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.end('error');
        res.redirect('/')
    })
})

app.listen(3000,()=>console.log(`Connected in http://localhost:3000`))