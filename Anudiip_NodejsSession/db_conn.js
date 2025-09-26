var mysql2 = require('mysql2');

let conn = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"wdr1365"
});

conn.connect(function(err){
    if(err)
        throw err;
    console.log("database connected");
});

module.exports = conn;