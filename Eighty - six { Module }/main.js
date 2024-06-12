// // const { createServer } = require('node:http');
// // const fs = require("fs")
// // import http from "http"
// import a from "./mymodule"
// console.log(a)

// // const hostname = '127.0.0.1';
// // const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// main.js
import { a, greet } from './mymodule.js';

console.log(a); // Output: 1
console.log(greet('World')); // Output: Hello, World
// main.js
import { a, greet } from './mymodule.js';

console.log(a); // Output: 1
console.log(greet('World')); // Output: Hello, World

