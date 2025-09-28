const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

//salt is used to number taking before password
const salt = 11;

//plain password
const password = 'harsh@aA1234';

app.get('/',(req,res)=>{
    bcrypt.hash(password,salt,(err,hashpass)=>{
        if(err){
            res.end(`Error Occur ${err}`);
            return;
        }
        else{
            res.send(`<p>Hashing Password is: ${hashpass}</p><p> Original Password is: ${password}</p>`);
        }
    })
})

app.listen(8080,()=>{
    console.log(`Connection established on http://localhost:8080`);
})