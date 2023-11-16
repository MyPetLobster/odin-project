// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions

// Defining functions

function square(number) {
    return number * number;
}

// When you pass an object as a parameter, if the function
// changes tje obj's properties, that change is visible outside the
// func as in the following example

function myFunc(theObject) {
    theObject.make = "Toyota"
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(mycar.make);
myFunc(mycar);
console.log(mycar.make);


// same thing happens with arrays

function myFunc(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]);
myFunc(arr);
console.log(arr[0]);

// FUNCTION EXPRESSIONS

// the func square above could also be written with anon func as follows

const square = function (number) {
    return number * number;
};

console.log(square(4));

// a name CAN be provided with a function expression. This allows the func
// to refer to itself and makes it easier to identify func when debugging

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n-1);
};

console.log(factorial(3));

// Function expressions are convenient when passing a func as an arg
// to another func.

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

// in the following code, the function receives a function defined by a 
// function expression and executes it for every element of the array
// received as a second argument:

// declare function called map that takes two parameters 'f' (a function)
// and 'a' (an array)
function map(f,a) {
// initialize an empty array named result with the same length as
// the input array 'a'. This array will be used to store the 
// results of applying the function 'f' to each element of 'a'
    const result = new Array(a.length);
// Loop through the array and apply the functions
// loops through each element of 'a' and applies the function 'f'
// and stores the result in the corresponding position in the 
// 'result' array
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
// returns the result array
    return result;
}

// function expression for cube. This defines a function named 'cube'
// that takes a parameter 'x' and returns the cube of 'x'
const cube = function (x) {
    return x * x * x;
};

// array named 'numbers' is declared
const numbers = [0, 1, 2, 5, 10];


console.log(map(cube, numbers));


// In JavaScript, a function can be defined based on a condition.
// For example, the following function definition defines myFunc 
// only if num equals 0

// initialize variable myFunc
let myFunc;

num = prompt("Enter a number");

// if num equals 0, create a func called myFunc
if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = "Toyota";
    };
}


// Calling Functions

// Functions must be in scope when they are called, but the function
// declaration can be hoisted

// The arguments of a function are not limited to strings and numbers
// You can pass whole objects to a function. 

// A function can call itself. For example, here is a function 
// that computes factorials recursively:

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// There are other ways to call functions, There are often cases where
// a function needs to be called dynamically, or the number of 
// arguments to a function vary, or in which the context of the function
// call needs to be set to a specific object determined at runtime.

// It turns out functions are themselves objects -- and in turn,
// these objects have methods. The call() and apply() methods
// can be used to achieve this goal

// consider the example below

console.log(square(5));

function square(n) {
    return n * n
}

// This code runs fine because the JS interpreter hoists the entire
// function declaration to the top of the current scope

// hoisting only works with function declarations and not with
// function expressions. The following code will NOT work

console.log(square(5));

const square = function (n) { 
    return n * n;
};


// SCOPE

// The following variables are defined in the global scope

const num1 = 20;
const num2 = 3;
const name = "Cory";

// this func is defined in the global scope

function multiply() {
    return num1 * num2;
}

console.log(multiply()); // 60

// a nested function example

function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return `${name} scored ${num1 + num2}`;
    }

    return add()
}

console.log(getScore()); // "Cory scored 5"

// Scope and the function stack

// Recursion

const foo = function bar() {
    // statements go here
}

// within the function body, the following are all equivalent:

// 1. bar()
// 2. arguments.callee()
// 3. foo()

// a function that calls itself is called a recursive function.
// in some ways, recursion is analogous to a loop. Both execute
// the same code multiple times, and both require a condition
// to avoid infinite loop/infinite recursion

// consider the following loop:

let x = 0
while (x < 10) {
    // do stuff
    x++;
}

// can be converted into a recursive function declaration
// followed by a call to that function.

function loop(x) {
    if (x >= 10) {
        return;
    }
    // do stuff
    loop(x+1);
}
loop(0);


// However some algorithms cannot be simple iterative loops. For
// example getting all the nodes of a tree structure (such as the DOM)
// is easier via recursion:

function walkTree(node) {
    if (node === null) {
        return;
    }
    // do something with the node
    for (let i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}

// Here's an example with nested functions 

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b)
}

console.log(addSquares(2,3)); // 13


// since the inner function forms a closure, you can call the outer function
// and specify arguments for both the outer and inner function:

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3) // think of it like: give me a function 
// that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

// The magic here lies in the fact that when you call 'outside(3), it
// returns the 'inside' function with the value of 'x' "captured" or
// "closed over" in the closure. The returned function ('inside') 
// remembers the environment in which it was created, so even when 
// called later, it still has access to the 'x' value from its 
// original scope


// SCOPE CHAINING

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // logs 6 (which is 1 + 2 + 3)

// this works bc B forms a closure including A
// C forms a closure including B
// Because C's closure includes B and B's closure includes A, then
// C's closure also includes A. This means C can access both
// B and A's arguments and variables. In other words, C chains
// the scopes of B and A, in that order

// with name conflicts the innermost scope takes precedence, This is the scope chain

// for example:

function outside() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

console.log(outside()(10)); // 20 (instead of 10)


// The outer function defines a variable called "name"
const pet = function (name) {
    const getName = function () {
        // The inner function has access to the "name" variable of the outer function
        return name;
    };
    return getName; // Return the inner function, thereby exposing it to the outer scopes
};

const myPet = pet("Vivie");
console.log(myPet()); // "Vivie"



/// Multiple Arguments

// consider a function that concatenates strings. The only formal argument for the func
// is a string that specifies the characters that separate the items to concatenate
// the function is defined as follows:

function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through objects
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

console.log(myConcat(",", "red", "orange", "blue")); // "red, orange, blue, "
console.log(myConcat("|", "elephant", "dog", "rhino")); // "elephant | dog | rhino | "


// Function parameters 

// there are two special kinds of parameter syntax: default parameters and rest parameters

// Default parameters

// in javascript, parameters of functions default to undefined. However, in some situations
// it might be useful to set a different default value.
// This is exactly what default parameters do.

// instead of:
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}

console.log(multiply(5)); // 5

// we can put 1 as the default value for b in the function head:

function mutliply(a, b=1) {
    return a * b;
}

console.log(multiply(5)); // 5


// REST PARAMETERS

// the rest parameter syntax allows us to represent an indefinite number of arguments
// as an array

// in the following example, the function multiply uses rest parameters to collect 
// arguments from the second one to the end. The function then multiplies these by the 
// first argument

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


// ARROW FUNCTIONS

// An arrow function expression (also called a fat arrow from hypothetical -> in
// future JavaScript syntax) has a shorter syntax compared to function expressions and 
// does not have its own "this", "arguments", "super", or "new.target". Arrow functions
// are always anonymous

// Two factors influenced the introduction of arrow functions: shorter functions and
// non-binding of "this"

// SHORTER FUNCTIONS

// in some functional patterns, shorter functions are welcome. Compare:

const a = ["Hydrogen", "Helium", "Lithium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log(a2); // [8, 6, 7]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7]


// NO SEPARATE "THIS"

// Until arrow func, every new function defined its own "this" value ( a new object in the
// case of a constructor, undefined in struct mode function calls, the base object if the 
// function is called as an "object method", etc). This proved less that ideal with an 
// object-oriented style of programming