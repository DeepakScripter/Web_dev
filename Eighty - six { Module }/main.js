// main.js
import { a, greet } from './mymodule.js';

console.log(a); // Output: 1
console.log(greet('World')); // Output: Hello, World
// main.js
const { a, greet } = require('./mymodule.js');

console.log(a); // Output: 1
console.log(greet('World')); // Output: Hello, World