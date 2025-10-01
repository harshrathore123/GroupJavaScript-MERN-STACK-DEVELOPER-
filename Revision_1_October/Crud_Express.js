const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'Revision_1_October')));

let data = [
    {id:1,named:'harsh',age:24,city:'indore'},
    {id:2,named:'akash',age:21,city:'indore'},
    {id:3,named:'karan',age:30,city:'indore'},
    {id:4,named:'charu',age:27,city:'indore'},
    {id:5,named:'sheela',age:55,city:'indore'},
]

//get all data
app.get('/',(req,res)=>{
    res.send(`${JSON.stringify(data)}`);
})

// Last Searching data

app.get('/search', (req, res) => {
    const { searching } = req.query; // use req.query, not req.body

    if (!searching) {
        return res.sendFile(path.join(__dirname, 'search.html'));
    }

    const results = data.filter(u => 
        u.named.toLowerCase().includes(searching.toLowerCase()) // use correct key
    );

    if (results.length === 0) {
        return res.end('No data matched your search');
    }

    res.json(results); // better than res.end(JSON.stringify(...))
});


//get only data if id,age and all int
app.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const userid = data.find((u)=>u.id===id);
    if(!userid) return res.end(`Not Matched ${id} and ${userid}`);
    res.end(JSON.stringify(userid));
})

//get only data if name,city and all string
app.get('/user/:name',(req,res)=>{
    const name = req.params.named;
    const username = data.find((u)=>u.named.toLowerCase().includes(name.toLowerCase()));
    if(!username) return res.end(`Not matched ${name}`)
    res.json(username);
})

// Post dataa
app.get('/user/create/data',(req,res)=>{
    res.sendFile(path.join(__dirname,'create.html'))
})

app.post('/user/create/data',(req,res)=>{
    const{named,age,city} = req.body;
    const newdata = {id:data.length+1,named,age,city};
    data.push(newdata);
    res.redirect('/');
})

//Update Data
app.get('/user/update/data/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'update.html'))
})

app.post('/user/update/data/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const updateid = data.find((u)=>u.id===id);
    if(!updateid) return res.end(`Not matched ${id} and ${updateid}`);
    const{named,age,city} = req.body;
    updateid.named = named;
    updateid.age = age;
    updateid.city = city;
    res.redirect('/');
})

//Delete Data on postman
app.delete('/delete/data/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    data = data.filter((u)=>u.id!==id);
    res.redirect('/');
})


app.listen(3000,()=>console.log(`Connection established on http://localhost:3000`))