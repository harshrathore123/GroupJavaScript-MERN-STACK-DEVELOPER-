const db = require('../db.js')
const bcrypt = require('bcrypt');
const path = require('path');

const GetLogin = (req,res) =>{
    res.sendFile(path.join(__dirname,'../public/login.html'))
}

const PostLogin = (req,res)=>{
    const {email,password} = req.body;

    if(!email||!password){
        return res.send(`Mendatory all field`);
    }
    const data = [email];
    const select = `select * from user where email=?`
    db.query(select,data,(err,result)=>{
        if(err) return res.end(`Error: ${err}`);
        else{
            const user = result[0];
            const pass = user.password;

            bcrypt.compare(password,pass,(err,correct_pass)=>{
                if(err) return res.end(`Error: ${err}`);
                else{
                    if(!correct_pass){
                        return res.send(`Not matched password`);
                    }

                    req.session.email = email;
                    console.log(`Credential Matched`);
                    res.redirect('/api/dashboard');
                }
            })
        }
    })
}

const GetSingup = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/signup.html'))
}

const PostSingup = (req,res)=>{
    const {fullname,email,password,confirm_password} = req.body;

    if(!fullname||!email||!password||!confirm_password){
        return res.send(`Mendatory all field`);
    }

    if(password!==confirm_password){
        return res.send(`Not matched password and confirm password`)
    }

    bcrypt.hash(password,10,(err,hash)=>{
        if(err) return res.send(`Error: ${err}`);
        else{
            const data = [fullname,email,hash];
            const insert = `insert into user (fullname,email,password) values(?,?,?)`;
            db.query(insert,data,(err,result)=>{
                if(err) return res.send(`Error: ${err}`);
                else{
                    res.send(`Result Id: ${result.insertId}`)
                }
            })
        }
    })
}

const Home = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/Home.html'))
}

const Dashboard = (req,res)=>{
    if(!req.session.email){
        return res.redirect('/api/home');
    }
    res.set('Cache-Control','no-store');
    res.sendFile(path.join(__dirname,'../public/Dashboard.html'))
}

const Logout = (req,res)=>{
    req.session.destroy((err)=>{
        if(err) return res.send(`Error: ${err}`);
        res.redirect('/api/login');
    })
}


module.exports = {GetLogin,GetSingup,PostLogin,PostSingup,Home,Dashboard,Logout}