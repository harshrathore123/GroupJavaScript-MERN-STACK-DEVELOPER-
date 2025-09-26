const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Mongodb Atlas Url 
const url = `mongodb+srv://rathoreharsh:harsh1234@cluster0.cdrdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log(`Connnection Connected Successfully`))
.catch((err)=>console.log(err));


