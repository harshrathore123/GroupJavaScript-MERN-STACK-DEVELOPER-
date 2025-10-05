const db = require('../db');
const bcrypt = require('bcrypt');
const path = require('path');

const Home = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/Home.html'))
}
const GetLogin = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/login.html'));
}

const GetSingup = (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/signup.html'))
}

const PostSingup = (req,res)=>{
    try{
        const{fullname,email,password,confirm_password} = req.body;
        
        if(!fullname||!email||!password||!confirm_password){
            res.send(`All field is mendatory`);
        }

        if(password!==confirm_password){
            res.send(`Password and Confirm Password does not matched`)
        }
    
        bcrypt.hash(password,10,(err,hash)=>{
            if(err) return res.end(`Not hashing password`);
            else{
                const data = [fullname,email,hash];
                const query = 'insert into user(fullname,email,password) values(?,?,?)';
                
                db.query(query,data,(err,result)=>{
                    if(err) return res.end(`Something went wrong`)
                    else{
                        res.end(`Inserted Data : ${result.insertId}`)
                    }
                })
            }

        })

    }   
    catch(err){
        return res.end(`Error: ${err}`);
    }
}

const PostLogin = (req,res)=>{
    try{
        const{email,password} = req.body;
        
        if(!email||!password){
            return res.end(`Both should be filled`)
        }

        const query = 'select * from user where email=?';
        db.query(query,[email],(err,result)=>{
            if(err) return res.end(`Something went wrong : ${err}`);
            else{
                const user = result[0];
                const hash = user.password;

                bcrypt.compare(password,hash,(err,comparedata)=>{
                    if(err) return res.end(`Something went wrong: ${err}`);

                    if(!comparedata){
                        res.send(`Does not matched data`);
                    }

                    else{
                        console.log(`Credential matched`);
                        req.session.email = email;
                        res.redirect('/api/dashboard');
                    }
                })
            }
        })
    }
    catch(err){
        res.send(`Error: ${err}`);
    }
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
        if(err) return res.end(`Error: ${err}`);
        else{
            res.redirect('/api/home');
        }
    })
}


module.exports = {Home,GetLogin,GetSingup,PostSingup,PostLogin,Dashboard,Logout};
