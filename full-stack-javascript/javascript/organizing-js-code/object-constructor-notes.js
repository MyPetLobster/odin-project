// Searching algorithm
// importance: 5
// The task has two parts.

// Given the following objects:

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.




// Where does it write?
// importance: 5
// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Rabbit receives the full property because the eat() method is called on rabbit.



// Why are both hamsters full?
// importance: 5
// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple