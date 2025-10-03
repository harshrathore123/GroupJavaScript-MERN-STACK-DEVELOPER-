const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const password = 'harsh';
const salt = 10;

bcrypt.hash(password,salt,(err,result)=>{
    if(err) return console.log(`Error`);
    console.log(`Actual Password is: ${password} and hashing password is: ${result}`)
    
})
