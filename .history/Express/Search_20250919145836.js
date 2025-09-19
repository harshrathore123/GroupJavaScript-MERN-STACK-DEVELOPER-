const express = require('express');
const app = express();

const Port = 3003;
app.use(express.json());
let obj = [
    {
        id:1,name:"Pinku",age:23,city:"Indore"
    },
    {
        id:2,name:"Rahul",age:34,city:"Bhopal"
    },

    {
        id:3,name:"Pinku",age:33,city:"Yoshita's Residence"
    }
]

app.get('/search',(req,res)=>{
console.log('Hi Searching..........');
const{master}=req.query;
if(!master) res.status(202).json({message:"Hi this data is not found"});

const changed = obj.filter((u)=>u.name.toLowerCase().includes(master.toLowerCase()));

res.json({
    query:master,
    result:changed
})
})

app.listen(Port,()=>{
    console.log(`Established connection on http://localhost:${Port}`);
})