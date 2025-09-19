const express = require('express');
const app = express();

app.use(express.json());

let data = [
    {id:1,name:"harsh",city:"indore"},
    {id:1,name:"Piyush",city:"indore"},
    {id:2,name:"Bhumi",city:"Raisen"},
    {id:3,name:"Yoshita",city:"Indore"}
];

//get
app.get('/',(req,res)=>{
    res.json(data);
})

//searching
app.get('/:identity',(req,res)=>{
    const userId = parseInt(req.params.identity); //1
    const user = data.find((userid)=>{
        return userid.id === userId;
    })

    // if(user != userId)
    if(!user){
        res.status(404);
        res.json({message:"No data is Found"});
    }

    res.json(user);

})

// 3️⃣ POST - Create new user
app.post('/', (req, res) => {
  const newData = { id: data.length + 1, name: req.body.name, city: req.body.city };
  const newInsertData = data.push(newData);
  console.log(newInsertData);
  res.status(201).json(newData); // 201 = Created
});

// 4️⃣ PUT - Update user by ID
app.put('/:id',(req,res)=>{
    const user_id = (req.params.id);
    console.log(typeof(user_id));

    const user = data.find((data)=> data.id == user_id);

    if(!user){
        res.status(404);
        res.json({message:"Not Found"});
    }

    //if our id is matched
    user.name = req.body.name;
    user.city = req.body.city;

    //display
    res.json(user);
})

// 5️⃣ DELETE - Remove user by ID
app.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  data = data.filter(u => u.id !== userId);

  res.json({ message: `User with id ${userId} deleted` });
});

app.listen(3003,()=>{
    console.log(`Connection Running on http://localhost:3003`);
})
