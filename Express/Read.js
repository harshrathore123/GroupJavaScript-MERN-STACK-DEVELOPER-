const express = require('express');
const app = express();

const PORT = 3003;

app.use(express.json());

const data = [
    {id:1,name:"harsh",age:23},
    {id:2,name:"Gulprit",age:32}
];

app.get('/',(req,res)=>{
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`Connection Established on http://localhost:${PORT}`);
})