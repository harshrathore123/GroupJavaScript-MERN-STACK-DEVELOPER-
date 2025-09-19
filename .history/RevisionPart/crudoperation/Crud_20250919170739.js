//crud operation for express create,read,update and delete

const express = require('express');
const app = express();

app.use(express.json());

const data = [
    {id:1,name:"A",age:23,city:"Indore"},
    {id:2,name:"B",age:24,city:"Bhopal"},
    {id:3,name:"C",age:24,city:"Gorakpur"},
    {id:4,name:"D",age:24,city:"Burhanpur"},
    {id:5,name:"E",age:24,city:"Goa"},
    {id:1,name:"F",age:24,city:"Singapore"},
    {id:7,name:"G",age:24,city:"Dubai"},
    {id:8,name:"H",age:24,city:"Gwalior"},
    {id:9,name:"I",age:24,city:"Nasik"},
    {id:10,name:"A",age:24,city:"Surat"},
]

// Read all data
if('/',(req,res)=>{
    for(let i=0;i<data.length;i++){
        res.end(`Data of ${i} is: ${data[i]}`);
    }
})


app.listen(3000,()=>{
    console.log(`Established Connection on http://localhost:3000`);
})