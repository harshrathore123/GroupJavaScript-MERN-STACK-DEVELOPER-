const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/',(req,res)=>{
    res.send(`Hi our server is running`);
})

app.get('/menu',(req,res)=>{
    res.sendFile(path.join(__dirname,'cart.html'))
})

app.post('/menu',(req,res)=>{
    const{imageurl,productName,price} = req.body;
    res.json({
        itemimage:imageurl,
        itemname:productName,
        itemprice:price
    });
})
app.listen(3000,()=>console.log(`Established on http://localhost:3000`))