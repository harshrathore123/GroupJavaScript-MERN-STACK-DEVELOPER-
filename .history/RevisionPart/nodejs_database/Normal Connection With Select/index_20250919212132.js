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
        res.end(`I am in / url`);
        res.end('I am harsh');
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