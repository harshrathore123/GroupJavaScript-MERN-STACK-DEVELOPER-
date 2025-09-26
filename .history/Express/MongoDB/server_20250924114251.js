const express = require('express');
const mongoose = require('mongoose');
const port = 3030;
const app = express();
app.use(express.json());

// Mongodb Atlas Url 
const url = `mongodb+srv://rathoreharsh:harsh1234@cluster0.cdrdx.mongodb.net/NodeJSDatabase?retryWrites=true&w=majority&appName=Cluster0`;

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
},{collection:"Users"});


//Model (Table create)
const Users = mongoose.model("Users",userSchema);
console.log(Users);

// ----------------Mongodb Connection Over
// ----------------Express Continue

// CRUD OPERATION IN MONGODB

app.post('/user',async (req,res)=>{
    const user_data = new Users(req.body);
    await user_data.save();
    res.json(JSON.stringify(user_data));
});

app.listen(port,()=>{
    console.log(`Connection Established on http://localhost:${port}`);
})