const express = require('express');
const app = express();

const PORT = 3004;

app.use(express.json());

const data = [
    {id:1,name:"harsh",age:23},
    {id:2,name:"Gulprit",age:32}
];

app.get('/:id',(req,res)=>{
    const un_id = parseInt(req.params.id);

    const check_id = data.filter((data)=> data.id === un_id)

    if(!check_id){
        res.status(404);
        console.log({message:"Not Found"});
    };

    res.json(check_id);


})

app.listen(PORT,()=>{
    console.log(`Connection Established on http://localhost:${PORT}`);
})