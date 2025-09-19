const http = require('http');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"wdr1365"
});

const data = db.connect(error,()=>{
if(error){
    console.error('Database not connnected');
    return;
}
console.log('Database Connected');

})