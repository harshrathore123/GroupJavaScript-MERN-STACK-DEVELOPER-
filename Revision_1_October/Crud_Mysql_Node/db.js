const mysql = require('mysql2');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'harsh@aA1234',
    database:'wdr1365'
});

db.connect((err)=>{
    if(err) return console.log(`Something went wrong`);
    console.log(`Connected Mysql Successfully`);
})

module.exports = db;