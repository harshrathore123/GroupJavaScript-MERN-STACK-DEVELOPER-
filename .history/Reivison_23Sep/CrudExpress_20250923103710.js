const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

let data = [
    {id:1,name:"Harsh",age:23},
    {id:2,name:"Akash",age:42}
]

// Data Render
app.get('/',(req,res)=>{
    res.json(data);
})

// Data Specific Render
app.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = data.find((u)=>u.id===id);

    if(!user){
        res.status(404);
        res.json({message:"Not Found"});
    }

    res.json(user);
})

// Data Create
app.post('/',(req,res)=>{
    const newData = {id:data.length+1,name:req.body.name,age:req.body.age};
    const insertdata = data.push(newData);
    res.json(insertdata);
})

// Data Modified
app.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = data.find((u)=>u.id===id);

    if(!user){
        res.status(404);
        res.json({message:"Data modified id not found"});
    }

    user.name = req.body.name;
    user.age = req.body.age;
    res.json(data);
})

// Data Deleted
app.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    data = data.filter(u=>u.id!==id);

    res.json({message:`Successfully Deleted ${id}`});
})

// Data Searched
app.get('/search',(req,res)=>{
    const{q} = req.query;
    if(!q){
        res.status(500);
        res.json({message:"Query is not available"});
    }
    const checkd = data.filter(u=>u.id===q);
    res.json({
        query:q,
        result:checkd
    });

})

app.listen(port,()=>{
    console.log(`Connection Established on http://localhost:${port}`);
})