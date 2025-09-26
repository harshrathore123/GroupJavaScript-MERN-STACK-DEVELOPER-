const http = require('http');
const mysql = require('mysql2');

// Create Mysql Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "wdr1365"
});

// Connect the connection
db.connect((err) => {
    if (err) {
        console.error(`Error connecting to MySQL: ${err}`);
        return;
    }
    console.log("Connected to MySQL database");
});

const Server = http.createServer((req, res) => {
    if (req.url === '/') {
        db.query('SELECT * FROM employee', (err, result) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Database Error");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`
                <html>
                <head>
                    <title>Employee Data</title>
                    <style>
                        table { border-collapse: collapse; width: 80%; margin: 20px auto; }
                        th, td { border: 1px solid black; padding: 8px; text-align: center; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <h2 style="text-align:center;">Employee Records</h2>
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Salary</th>
                            <th>DOB</th>
                        </tr>
            `);

            for (let i = 0; i < result.length; i++) {
                res.write(`
                    <tr>
                        <td>${result[i].fname}</td>
                        <td>${result[i].lname}</td>
                        <td>${result[i].addline1}</td>
                        <td>${result[i].salary}</td>
                        <td>${result[i].dob}</td>
                    </tr>
                `);
            }

            res.write(`
                    </table>
                </body>
                </html>
            `);
            res.end(); // ✅ End response
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

Server.listen(3000, () => {
    console.log("Established connection on http://localhost:3000");
});
