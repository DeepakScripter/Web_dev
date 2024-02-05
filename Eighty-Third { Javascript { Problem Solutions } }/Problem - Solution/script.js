// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function assignHouses(studentNames) {
  let assignedHouses = [];

  for (const student of studentNames) {
    if (student.length < 6) {
      assignedHouses.push("Gryffindor");
    } else if (student.length < 8) {
      assignedHouses.push("Hufflepuff");
    } else if (student.length < 12) {
      assignedHouses.push("Ravenclaw");
    } else {
      assignedHouses.push("Slytherin");
    }
  }

  return assignedHouses;
}

let students = [
  "shubh",
  "anajali",
  "Shivani",
  "Shivangi",
  "Annapurna",
  "Shubham",
  "Krishnanendu",
  "Ravindranathan",
  "Shivesh",
  "kaif",
  "Emanuel",
];

let houses = assignHouses(students);
console.log(houses);
