const http = require('http');
const mysql = require('mysql2');
const port = 3003;

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"wdr1365"
});

db.connect((err)=>{
    if(err){
        console.error(`Error: ${err}`);
        return;
    }
    else{
        console.log(`Connected Successfully`);
    }
})

const server = http.createServer((req,res)=>{
    //Select (read)
    if(req.url==='/'){
    let select = "select eid,fname,lname,salary,dob from emp";
    db.query(select,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            res.json(result);
        }
    })
    }

    //Select (where)
    if(req.url==='/select'){
    let name = 'harsh';
    let selectspecific = "select eid,fname,lname,salary,dob from emp where fname=?";
    db.query(selectspecific,name,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            res.json(result);
        }
    })
    }

    //Insert value
    if(req.url==='/insert'){
            let arrayinsertdata = ['Harish','Patil','Sudhama Nagar','2002-12-12','2025-02-01','harish@gmail.com','harish@harsh'];
    let Insertdata = "insert into emp (fname,lname,addline1,dob,doj,email,pwd) values(?,?,?,?,?,?,?)";
    db.query(Insertdata,arrayinsertdata,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            // res.json(result);
            let select = "select * from emp";
            db.query(select,(err,result)=>{
                if(err){
                    res.json({message:"Not Found"});
                    return;
                }
                else{
                    res.json(result);
                }
            })
        }
    })
    }
})

// Insert Value
app.get('/insert',(req,res)=>{

})

// Update Value
app.get('/update',(req,res)=>{
    let updatedValue = ['Harish','Patil','Sudhama Nagar','2002-12-12','2025-02-01','harish@gmail.com','harish@harsh'];
    let UpdateData = "update emp set fname=?,lname=?,addline1=?,dob=?,doj=?,email=?,pwd=? where eid = 1";
    db.query(UpdateData,updatedValue,(err,result)=>{
        if(err){
            res.json({message:`Error: ${err}`});
            return;
        }
        else{
            // res.json(result);
            let select = "select * from emp";
            db.query(select,(err,result)=>{
                if(err){
                    res.json({message:"Not Found"});
                    return;
                }
                else{
                    res.json(result);
                }
            })
        }
    })
})

// Deleted Value
app.get('/deleted',(req,res)=>{
    let deletecond = 'Harish';
    let deletequery = 'Delete from emp where fname=?';

    db.query(deletequery,deletecond,(err,result)=>{
        if(err){
            res.json({message:"Delete Id not found"});
            return;
        }
        else{
            db.query("select * from emp",(err,reslt)=>{
                if(err){
                    res.json({message:"Deleted Id not found"});
                    return;
                }
                else{
                    res.json(reslt);
                }
            })           

        }
    })
})



app.listen(port,()=>{
    console.log(`Established Connection on http://localhost:${port}`);
})