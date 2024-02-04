// Declare an array 'arr'
let arr = [1, 2, 4, 5, 7];
// Index: 0, 1, 2, 3, 4

// Update the value at index 0
arr[0] = 5666;


// Log the array, its type, and its length
// console.log(arr, typeof arr);
// console.log(arr.length)

// Access and log specific elements of the array
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// Convert the array to a string and log
console.log(arr.toString());
console.log(arr.join(" and "));

// Array manipulation using splice method
let numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 2)
numbers.splice(1, 3)
// numbers.splice(1, 3, 222, 333)
// (4) [1, 222, 333, 5]

// Iterate over array elements using a for loop
let a = [1, 93, 5, 6, 88];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// Iterate using forEach method
// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// Iterate using for...in loop (for objects)
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
//     }
// }

// Iterate using for...of loop
for (const value of a) {
  console.log(value);
}

// Declare another array 'arr2'
let arr2 = [1, 2, 3, 4, 5, 6];

// Define a function 'red' for use in reduce method
const red = (a, b) => {
  return a + b;
};

// Use reduce method to accumulate values
console.log(arr2.reduce(red));

// Declare an array 'arr' for mapping
// let arr = [1, 13, 5, 7, 11];

// Use map method to create a new array with squared elements
let newArr = arr.map((e, index, array) => {
  return e ** 2;
});

console.log(newArr);

// Define a function 'greaterThanSeven'
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};

// Use filter method to get elements greater than seven
console.log(arr.filter(greaterThanSeven));
