const db = require('./db');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Server Running`);
})



app.listen(3000,()=>console.log(`Established Connected on http://localhost:3000`));
