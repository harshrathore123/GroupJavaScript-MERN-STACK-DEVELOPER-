const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const bcrypt = require('bcrypt');
// We will use this because we will take the input from html file
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/image',express.static(path.join(__dirname,'IMAGE')));

app.get('/',(req,res)=>{
    //Render Home page
    res.sendFile(path.join(__dirname,'public','Home.html'));
});

app.get('/signup',(req,res)=>{
    //Render SignUp page
    res.sendFile(path.join(__dirname,'public','SignUp.html'));
})

app.post('/signup',(req,res)=>{
    try{
        const {fullname,email,mobile,password} = req.body;

        if(!fullname || !email || !mobile || !password){
            res.send(`All field is mendatory`);
        }

        // Making hashing password
        const salt = 11;
        bcrypt.hash(password,salt,(err,hashpass)=>{
            if(err){
                res.send(`Password is not hashing`);
                return;
            }
            else{
                const insertdata = [fullname,email,mobile,hashpass];
                const query = `insert into users (fullname,email,phone_number,password) values(?,?,?,?)`;

                db.query(query,insertdata,(err,result)=>{
                    if(err){
                        res.send(`Not Found`);
                        return;
                    }
                    else{
                        res.redirect('/login');
                    }
                })
            }
        })
    }
    catch(error){
        res.send(`Error: ${err}`);
    }
})

// app.post('/signup',(req,res)=>{
//     //Data inserted into database
//     // Destructuing data from html file
//     const {fullname,email,mobile,password} = req.body;

//     // Validation
//     if(!fullname && !email && !mobile && !password){
//         res.send(`All field is required`);
//     }

//     // Hashing Password
//     const salted = 10;
//     bcrypt.hash(password,salted,(err,hash)=>{

//         if(err){
//             res.send(`Error occur not hashing the password: ${err}`);
//         }

//     // res.send(`Fullname: ${fullname}, Email: ${email}, Mobile: ${mobile}, Password: ${password}`);
//     const insert_arr = [fullname,email,mobile,hash];
//     const insert_query = 'insert into users (fullname,email,phone_number,password) values(?,?,?,?)';

//     // DB QUERY
//     db.query(insert_query,insert_arr,(err,result)=>{
//         if(err){
//             console.log(`Error: ${err}`);
//             return;
//         }
        
//         else{
//             console.log(`Data is Stored ${result.insertId}`);
//             // use redirect to redirect the page after successfully sign up to login page
//             res.redirect('/login');            
//         }
//     })
//     })    
// })

app.get('/login',(req,res)=>{
    //Render Login page
    res.sendFile(path.join(__dirname,'public','Login.html'));
});

app.post('/login',(req,res)=>{
    
    try{
        const{email_login,password_login} = req.body;
        
        if(!email_login || !password_login){
            res.send(`Username and Password are Mendatory`);
        }

        const data = [email_login];
        const query = `select email,password from users where email=?`
        
        db.query(query,data,(err,result)=>{
            if(err){
                res.send(`Not found`);
                return;
            }
            else{
                console.log(result);
                const user = result[0];
                const hasingdata = user.password;

                bcrypt.compare(password_login,hasingdata,(err,check)=>{
                    if(err){
                        res.end(`Something went wrong`);
                    }
                    if(!check){
                        res.end(`Not matched`);
                    }
                    else{
                        res.redirect('/');
                    }
                })
            }
        })
    }
    catch(err){
        res.send(`Error: ${err}`);
    }
})

// app.post('/login',(req,res)=>{
//     //Data Checked with database
//     const { email_login, password_login } = req.body;

//     // Validate input first
//     if (!email_login || !password_login) {
//         return res.status(400).send("All fields are required");
//     }

//     const login_query = `SELECT * FROM users WHERE email = ? AND password = ?`;
//     db.query(login_query, [email_login, password_login], (err, result) => {
//         if (err) {
//             console.error("DB error:", err);
//             return res.status(500).send("Internal Server Error");
//         }

//         // email and password checking
//         // here 0 is working as a boolean if username password match then 1 and
//         // if any one doest not match then 0
        
//         if (result.length === 0) {
//             return res.status(401).send("Invalid Email or Password");
//         }

//         //HASHING CHECKING

//         const user = result[0]; // user row from DB
//         const storedHash = user.password; // column should store bcrypt hash

//         // ✅ 3. Compare entered password with stored bcrypt hash
//         bcrypt.compare(password_login, storedHash, (err, isMatch) => {
//             if (err) {
//                 console.error("Bcrypt error:", err);
//                 return res.status(500).send("Internal Server Error");
//             }

//             if (!isMatch) {
//                 return res.status(401).send("Invalid Email or Password");
//             }

//         console.log("Credential Matched Successfully");
//         return res.redirect('/home');
//         });
//     });
// });

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','AfterLoginHome.html'));
})

app.listen(3000,()=>{
    console.log(`Connection established on http://localhost:3000`);
})