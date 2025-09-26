const express = require('express');
const mongoose = require('mongoose');
const port = 3030;
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


//Schema (Table Structure jaisa)
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    Username:String,
    Password:String
});


//Model (Table create)
const user = mongoose.model("User",userSchema);
console.log(user);

// ----------------Mongodb Connection Over
// ----------------Express Continue

// CRUD OPERATION IN MONGODB

app.post('/user',async (req,res)=>{
    const user_data = new user(req.body);
    console.log(user_data);
    await user_data.save();
    res.json(user_data);
    console.log(user_data);
});

app.listen(port,()=>{
    console.log(`Connection Established on http://localhost:${port}`);
})