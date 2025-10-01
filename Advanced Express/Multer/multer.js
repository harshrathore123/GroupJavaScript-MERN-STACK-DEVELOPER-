const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

//Require multer
const multer = require('multer');
app.use('/multer',express.static(path.join(__dirname,'Multer')));

//Multer storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'multer/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

//Extra part filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true); // accept file
  } else {
    cb(new Error('Only JPG, PNG, PDF files are allowed!'));
  }
};

//Multer uploader
const upload = multer({storage,fileFilter});


const port = process.env.PORT || 5000; // fallback if .env is missing
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`We will see the multer middleware`);
});

app.post('/upload',upload.single('myfile'),(req,res)=>{
    if(!req.file){
        res.end(`No file uploaded`);
    }
    else{
        res.json({
            message:'File Uploaded Successfully',
            filename:req.file.filename,
            fileUrl:`http://localhost:3000/uploads/${req.file.filename}`
        })
    }
})

app.listen(port, () => {
    console.log(`Connection established on http://localhost:${port}`);
});
