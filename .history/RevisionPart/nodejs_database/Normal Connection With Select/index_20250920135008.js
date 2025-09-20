//Node js
const http = require('http'); //require http for createServer
const mysql = require('mysql2'); //require mysql2 for connecting the mysql with nodejs

const db = mysql.createConnection({
    //host,user,password and database
    //becouse it is object that's why it take the value in the form of key pair
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"wdr1365"
});

//connect connection
db.connect((err)=>{
    if(err){
        console.log('No Database Connected');
        return;
    }
    else{
        console.log('Database Connected Successfully');
    }
})

// create server
const server = http.createServer((req,res)=>{
    //first we make header file
    if(req.url === '/'){
        //create query for database
        let alldata = 'select * from emp';
        let insert ='INSERT INTO emp (fname, mname, lname, addline1, addline2, dob, salary, doj, email, pwd, did, dol) values ("Raja", "MiddleName", "Jain", "Vijay Nagar", "Patnipura", "2000-12-25", 50000, "2025-09-19", "raja23gmail@example.com", "password123", 2, "2025-10-12")';
        let deleted = 'delete from emp where eid=1';

        db.query(deleted,(err,result)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end('Not found Data');
                return;
            }
            else{
                // res.writeHead(200,{"content-type":"application/json"});
                // res.end(JSON.stringify({result:`This id is deleted`}));
                let query = 'select * from emp where eid=1';
                db.query(query,(err,result)=>{
                   if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end('Not found Data');
                return;
                } 
                else{
                   res.writeHead(200,{"content-type":"application/json"});
                res.end(JSON.stringify(result)); 
                }
                })
            }
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end(`Not Found Url`);
    }
});

// server listen
server.listen(5000,()=>{
    console.log('Established Connection on http://localhost:5000');
})