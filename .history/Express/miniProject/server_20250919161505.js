const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Header.html'));
})

app.listen(3001,()=>{
    console.log(`Established Connection on http://localhost:3001`);
})