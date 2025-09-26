const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

let data = [
    {id:1,name:"Harsh",age:23},
    {id:2,name:"Akash",age:42}
]

app.get('/',(req,res)=>{
    res.json(data);
})

app.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = data.find((u)=>u.id===id);

    if(!user){
        res.status(404);
        res.json({message:"Not Found"});
    }

    res.json(user);
})

app.post('/:id',(req,res)=>{
    const newData = {id:data.length+1,name:req.body.name,age:req.body.age};
    data = data.push(newData);
    res.json(newData);
})

app.listen(port,()=>{
    console.log(`Connection Established on http://localhost:${port}`);
})