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
app.get('/',(req,res)=>{
    for(let i=0;i<data.length;i++){
        res.write(`Data of ${i} is: ${JSON.stringify(data[i])}\n\n`);
    }
    res.end();
})

// Read Single data using integer value
/*
app.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const userid = data.find((u)=>u.id === id);    
    res.json(userid);
})
*/

// Read Single data using string value
app.get('/:city',(req,res)=>{
    const city = req.params.city;
    const usercity = data.find((u)=>u.city.toLowerCase() === city.toLowerCase());
    res.json(usercity);
})

// create data
app.post('/',(req,res)=>{
    const createnewdata = {id:data.length+1,name:req.body.name,age:req.body.age,city:req.body.city};
    data.push(createnewdata);
    res.json(data);
})

// update data
app.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const userid = data.find((u)=>u.id===id);

    userid.name=req.body.name;
    userid.age=req.body.age;
    userid.city=req.body.city;

    res.json(userid);
})

app.listen(3000,()=>{
    console.log(`Established Connection on http://localhost:3000`);
})