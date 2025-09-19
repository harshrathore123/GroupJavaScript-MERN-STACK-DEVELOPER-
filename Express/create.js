const express = require('express');
const app = express();

const PORT = 3004;
app.use(express.json());

const data = [
    {id:1,name:"harsh",age:32},
    {id:2,name:"akash",age:21},
    {id:3,name:"rahul",age:12}
];

app.get('/',(req,res)=>{
    res.json(data);
});

app.post('/',(req,res)=>{
    const self_data = {id:data.length+1,name:req.body.name,age:req.body.age};
    const push_data = data.push(self_data);
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`Connection Established on http://localhost:${PORT}`);
})
