// // https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
// // DESTRUCTURING

// // simplified method of extracting multiple properties from an array
// // by taking the structure and deconstructing it down to its own
// // constituent parts

// // it creates a pattern that describes the kind of value you are
// // expecting and makes the assignment. Array destructuring uses position

// // const [first, second, third] = ['Laide', 'Gabriel', 'Jets'];

// // syntax with destructuring

// // const first = "Laide",
// //       second = "Gabriel",
// //       third = "Jets";


// // cannot use numbers for destructuring

// // Makes extracting data from an array very simple and readable.

// const householdItems = ["Table", "Chair", "Fan"];
// const [a, b, c] = householdItems;

// console.log(a); // Output: Table
// console.log(b); // Output: Chair
// console.log(c); // OutputL Fan

// // declaration and assignment can be done separately in destructuring

// let first, second;
// [first, second] = ["Male", "Female"];

// // if the number of variables passed to the destructuring array literals
// // are more than the elements in the array, then the variables which
// // aren't mapped to any element in the array return undefined

// const sportItems = ["Basketball", "Tennis Racquet", "Sneakers", "Baseball Bat"];
// const [a, b, c, d, e] = sportItems;

// console.log(c); // Output: Sneakers
// console.log(d); // Output: Baseball Bat
// console.log(e); // Output: undefined

// // if the number of variables passed to the destructuring array literals
// // are lesser than the elements in the array, the elements without
// // variables to be mapped are just left. There are no errors


// //// DESTRUCTURING RETURNED ARRAYS

// function runners() {
//     return ["Sandra", "Ola", "Chi"];
// }

// const [a, b, c] = runners();

// // DEFAULT VALUE

// // destructuring allows a default value to be assigned to a variable
// // if no value or undefined is passed, it is like providing a fallback
// // when nothing is found

// let a, b;
// [a = 40, b = 4] = [];

// console.log(a); // Output: 40
// console.log(b); // Output: 4

// [a = 40, b = 4] = [1, 23];

// console.log(a); // Output: 1
// console.log(b); // Output: 23

// // default values can also refer to other variables including the one 
// // in the same array literal

// const [first = "Cotlin", second = first] = [];
// // both will log output Cotlin

// const [first = "Cotlin", second = first] = ["Kotu"];
// // both will be Kotu

// const [first = "Cotlin", second = first] = ["Kuku", "Lydia"];
// // first = Koku
// // second = Lydia


// //// IGNORING SOME VALUES

// // Destructuring lets you map a variable to the elements you are 
// // interested in. You can ignore or skip the other elements in the
// // array by using trailing commas

// let a, b;
// [a, , b] = ["Lordy", "Crown", "Roses"];

// console.log(a); // Output: Lordy
// console.log(b); // Output: Roses


// //// The rest parameter and spread syntax

// // The new (...) operator that was added in ES6 can be used in 
// // destructuring. If the (...) operator appears on the left-hand
// // side in destructuring than it is a REST PARAMETER. A rest parameter
// // is used to map all the remaining elements in the array that have
// // not been mapped to the rest variable itself.

// // It's like gathering what's left behind. The rest variable must
// // always be the last otherwise SyntaxError is thrown

// const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// const [first, , third, ...others] = planets;

// console.log(first); // Output: Mercury
// console.log(third); // Output: Earth
// console.log(others); // Output: ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

// // If the (...) operator appears on the right-hand side in destructuring
// // then it is a SPREAD SYNTAX. It takes all the other elements in the
// // array which have no variable mapped to them and maps it to the 
// // rest variable

// const otherPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// const [first, second, ...rest] = ["Mercury", "Venus", ...otherPlanets];

// console.log(first); // Output: Mercury
// console.log(second); // Output: Venus
// console.log(rest); // Output: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

// // When you have more variables on the left-hand side, it maps the 
// // single elements in the array equally to the variables



// // One destructuring expression can be used in swapping the values of 
// // two variables

// let a, b;
// [a, b] = ["Male", "Female"];
// [a, b] = [b, a];

// console.log(a); // Output: Female
// console.log(b); // Output: Male


// // Nested array destructuring

// // You can also do nested destructuring with arrays. The corresponding
// // item must be an array in order to use a nested destructuring array
// // literal to assign items in it to local variables

// const numbers = [8, [1, 2, 3], 10, 12];
// const [a, [d, e, f]] = numbers;

// console.log(a); // Output: 8
// console.log(d); // Output: 1


// // Multiple array destructuring
// // You can do it more than once in the same code snippet

// const places = ["first", "second", "third", "fourth"];
// const [a, b, , d] = [f, ...rest] = places;

// console.log(a); // Output: first
// console.log(d); // Output: fourth
// console.log(f); // Output: first
// console.log(rest); // Output: ["second", "third", "fourth"]