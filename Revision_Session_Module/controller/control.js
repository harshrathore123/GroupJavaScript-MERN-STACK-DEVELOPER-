const db = require('../db');
const path = require('path');
const bcrypt = require('bcrypt');
const getLogin = (req,res) =>{
    res.sendFile(path.join(__dirname,'../public/login.html'));
}

const getSignup = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/signup.html'));
}

const postSingup = (req, res) => {
    const { fullname, email, password, confirm_password } = req.body;

    if (!fullname || !email || !password || !confirm_password) {
        return res.send("All fields are mandatory");
    }

    if (password !== confirm_password) {
        return res.send("Password and Confirm Password do not match");
    }

    bcrypt.hash(password, 10, (err, hash_pass) => {
        if (err) return res.send("Something went wrong with password");

        const data = [fullname, email, hash_pass];
        const query = 'INSERT INTO user(fullname,email,password) VALUES(?,?,?)';

        db.query(query, data, (err, result) => {
            if (err) return res.send("Invalid Query related with data");
            console.log(`Data saved successfully with user_id: ${result.insertId}`);
            res.redirect('/session/api/login');
        });
    });
};

const postLogin = (req,res)=>{
    const{email,password} = req.body;

    try{
        if(!email||!password){
            res.send(`Username and Password required`);
        }
        const data = [email];
        const query = `select * from user where email=?`;
        db.query(query,[email],(err,result)=>{
            if(err) return res.send(`Query is not valid`);

            const res_data = result[0];
            const haspass = res_data.password;
            
            bcrypt.compare(password,haspass,(err,chk)=>{
                if(err) return res.send(`Not Found`);

                if(!chk){
                    res.send(`Not matched`);
                }
            // req.session.res_data
                req.session.email = email;
                res.redirect('/session/api/dashboard');
            })

        })
    }
    catch(err){
        console.log(`Error :${err}`);
    }
}

const Dashboard = (req,res)=>{
    if(!req.session.email){
        return res.redirect('/session/api/home');
    }
    res.set('Cache-Control','no-store');
    res.sendFile(path.join(__dirname,'../public/Dashboard.html'));
}

const Logout = (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
        return res.end(`Something went wrong`);
        }
        res.redirect('/session/api/home');
    })
}

const Home = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/Home.html'));
}

module.exports = {getLogin,getSignup,postLogin,postSingup,Dashboard,Logout,Home};