const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"Template"
});

db.connect((err)=>{
    if(err){
        console.log(`Database not connected`);
        return;
    }
    console.log(`Database connected successfully`);
})

module.exports = db;
