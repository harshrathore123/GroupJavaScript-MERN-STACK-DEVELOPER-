const express = require('express');
const app = express();
const multer = require('multer');
app.use(express.json());
const path =  require('path');

app.use('/multer',express.static(path.join(__dirname,'Multer')));

app.get('/',(req,res)=>{
    res.send(`<html>
        <head><title>Goto Upload</title></head>
        <body>
        <h1>Go to Upload Page</h1>
        <a href='/dashboard'>DashBoard Page</a>
        </body>
        </html>`);
})

app.get('/dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname,'upload.html'));
})

const mul = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'multer/');
    },

    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage:mul});

app.post('/upload',upload.single('myfile'),(req,res)=>{
    if(!req.file){
        return res.send(`File not found`);
    }
    else{
        res.json({
            message:"File Success Upload",
            filename:req.file .filename,
            path:'http://localhost:3000/upload'
        })
    }
})


app.listen(3000,()=>{
    console.log(`Established connection on http://localhost:3000`);
})