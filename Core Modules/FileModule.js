
// require-> is used to import particular module
// require('module');
const file = require('fs');

// ✅ Write a file
file.writeFileSync("index.txt","Hello Node, This is my first file module");

// ✅ Read a file
const data = file.readFileSync("index.txt", "utf-8");
console.log("File Content:", data);

// ✅ Append data to a file
file.appendFileSync("index.txt", "\nThis is appended text!");

// Read append data also
const dataappend = file.readFileSync("index.txt","utf-8");
console.log("File Append Content:",dataappend);

// ✅ Delete a file
// fs.unlinkSync("example.txt");
