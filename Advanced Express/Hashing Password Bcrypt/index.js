const express = require('express');
// bcrypt is the function of password hashing based on Blowfish Cipher
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

//salt is used to number taking before password
const salt = 11;

//plain password
const password = 'harh@aA1234';

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

app.get('/revhas',(req,res)=>{
    bcrypt.hash(password,salt,(err,haspass)=>{
        if(err) return res.end(`Error Occured`);
        else{
            bcrypt.compare(password,haspass,(err,ans)=>{
                if(err) return res.end(`Error not comparing`);
                else{
                    res.send(`Comparision of ${password} is true with ${ans}`);
                }
            })
        }
    })
})


app.listen(8080,()=>{
    console.log(`Connection established on http://localhost:8080`);
})