// const express = require('express');
// const path = require('path');

// const app = express();
// app.use(express.json());
// app.use(express.static(path.join(__dirname,'public')))
// app.use('/image',express.static(path.join(__dirname,'IMAGE')))

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','Home.html'));
// })
// app.get('/Home',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','Header.html'));
// })
// app.get('/About',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','About.html'));
// })
// app.get('/Delight',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','Delight.html'));
// })
// app.get('/Amazing',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','Amazing.html'));
// })
// app.get('/MobileApp',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','MobileAPP.html'));
// })
// app.get('/Footer',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','Footer.html'));
// })

// app.listen(3001,()=>{
//     console.log(`Established Connection on http://localhost:3001`);
// })

const express = require('express');
const path = require('path');
const app = express();

// Serve everything inside "public" folder
app.use(express.static('public'));
app.use('/images',express.static('IMAGE'));
// Example route

app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

app.get('/Home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));