const path = require("path");

console.log("File Name:", path.basename(__filename));
console.log("Directory Name:", path.dirname(__filename));
console.log("File Extension:", path.extname(__filename));

const joinedPath = path.join(__dirname, "folder", "file.txt");
console.log("Joined Path:", joinedPath);
