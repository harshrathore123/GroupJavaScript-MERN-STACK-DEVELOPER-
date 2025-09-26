const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"Template"
});

db.connect((err)=>{
    if(err){
        console.log(`Connection is not connected`);
    }
    else{
        console.log(`Connection is Connected Successfully`);
    }
})

// We will use this because we will take the input from html file
app.use(express.urlencoded({extended:true}));

// No need yet but convert the data into json format
app.use(express.json());

// Static file public now under the folder public we can access from anywhere
app.use(express.static(path.join(__dirname,'public')));

// Default route show the signup page
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','SignUp.html'));
})

// After this /signup route is working to collect the data from user body
app.post('/signup',(req,res)=>{

    // Destructuing data from html file
    const {fullname,email,mobile,password} = req.body;

    // res.send(`Fullname: ${fullname}, Email: ${email}, Mobile: ${mobile}, Password: ${password}`);
    const insert_arr = [fullname,email,mobile,password];
    const insert_query = 'insert into users (fullname,email,phone_number,password) values(?,?,?,?)';

    // DB QUERY
    db.query(insert_query,insert_arr,(err,result)=>{
        if(err){
            console.log(`Error: ${err}`);
            return;
        }
        else{
            console.log(`Data is Stored ${result.insertId}`);

            // use redirect to redirect the page after successfully sign up to login page
            res.redirect('/login');
        }
    })
});   

// For login page route show login pages
app.get('/login',(req,res)=>{
            res.sendFile(path.join(__dirname,'public','Login.html'));

})

app.listen(3003,()=>{
    console.log(`Connection Established on http://localhost:3003`);
})