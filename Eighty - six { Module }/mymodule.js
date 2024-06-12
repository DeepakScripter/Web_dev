// mymodule.js
export const a = 1;

export function greet(name) {
  return `Hello, ${name}`;
}
// mymodule.js
const a = 1;

function greet(name) {
  return `Hello, ${name}`;
}

module.exports = { a, greet };