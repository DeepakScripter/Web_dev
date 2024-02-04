// Declare and initialize variable 'a'
let a = 1;

// Uncommented console.log statements for clarity
// console.log(a)
// console.log(a + 1)
// console.log(a + 2)

// Simple for loop to iterate from 0 to 99 and log 'a + i'
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

// Uncommented code for iterating over keys of an object and logging them
let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
for (const key in obj) {
    console.log(key)
}

// Uncommented code for iterating over characters in a string and logging them
// for (const c of "Harry") {
//     console.log(c)
// }

// Uncommented code for a while loop that runs until i reaches 60000
// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

// Do-while loop that logs 'i' and increments it until i is less than 6
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 6);
