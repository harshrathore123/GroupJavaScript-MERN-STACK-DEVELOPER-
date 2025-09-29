const Harsh_Express_Mongo = require('./mongo');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/',async(req,res)=>{
    const data = await new Harsh_Express_Mongo(req.body);
    await data.save();
    res.json(JSON.stringify(data));
});

app.get('/findall',async(req,res)=>{
    const finddata = await Harsh_Express_Mongo.find();
    res.send(`Find Data ${JSON.stringify(finddata)}`);
})

app.get('/findone',async(req,res)=>{
    const finddata = await Harsh_Express_Mongo.findOne({name:req.body.name});
    res.send(`Find Separate Data ${JSON.stringify(finddata)}`);
})



app.listen(3000,()=>{
    console.log(`Connection is established on http://localhost:3000`);
})