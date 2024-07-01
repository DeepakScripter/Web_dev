const fs = require("fs");
// console.log(fs)
console.log("Starting");
// fs.writeFileSync("harry.txt", "Deepak is a good boy")
fs.writeFile("harry.txt", "Deepak is a good boy", ()=>{console.log("Done")});
console.log("ending");