// Object example
// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// Prototypal Inheritance example
// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// Class definition for Animal
class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }

  // Method for eating
  eats() {
    console.log("Kha raha hoon");
  }

  // Method for jumping
  jumps() {
    console.log("Kood raha hoon");
  }
}

// Class definition for Lion, extending Animal
class Lion extends Animal {
  constructor(name) {
    // Call the constructor of the parent class (Animal)
    super(name);
    console.log("Object is created and he is a lion...");
  }

  // Override the eats method for Lion
  eats() {
    // Call the eats method of the parent class (Animal)
    super.eats();
    console.log("Kha raha hoon roar");
  }
}

// Create an instance of Animal
let a = new Animal("Bunny");
console.log(a);

// Create an instance of Lion
let l = new Lion("Shera");
console.log(l);
