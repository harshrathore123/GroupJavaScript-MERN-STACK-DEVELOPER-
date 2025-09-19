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

app.get('/',(req,res)=>{
    res.json(data);
})

app.get('/search',(req,res)=>{
    const{q} = req.query;
    if(!q) res.status(202).json({message:"Not found data"});
    // const filterdata = data.filter(u=>u.name.toLowerCase().includes(q.toLowerCase()));
    const filterdata = data.filter((u)=>u.id.toString().includes(q.toString()));

    res.json({
        query:q,
        result:filterdata
    })
})

app.listen(2300,()=>{
    console.log(`Established Connection on http://localhost:2300`);
})