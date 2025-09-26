const express = require('express');
const Header = require('../Header.html')

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.end(`${Header.html}`);
})

app.listen(3001,()=>{
    console.log(`Established Connection on http://localhost:3001`);
})