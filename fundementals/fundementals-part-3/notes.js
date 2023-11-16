// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

// Review concepts

// draw function
// function draw() {
//     ctx.clearRect(0, 0, WIDTH, HEIGHT);
//     for (let i = 0; i < 100; i++) {
//         ctx.beginPath();
//         ctx.fillStyle = = "rgba(255,0,0,0.5)";
//         ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 *
// Math.PI);
//     }
// }

// Generate random number
// const myNumber = Math.random();
// console.log(myNumber);

// manipulate array
// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);

// manipulate text string
// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);




// Anonymous Functions
// also called function expression. 
// Unlike function definition, expressions are not hoisted


textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
});

// If I pass anon func like below, there's an alt form i can use
// Called ARROW FUNCTIONS. Instead of function(event), i can write
// (event) =>

textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed "${event.key}".`);
});

// instead of below, I can do above with anon func

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);


// If the function only takes one parameter, you can omit the parentheses
// around the param

textBox.addEventListener("keydown", event => {
    console.log(`Youd pressed "${event.key}"`);
});

// Finally if func contains only one line that's a return statement,
// you can also omit the braces and the return keyword.
// the map() method takes each item in the array in turn passing it 
// into the given function. It then takes the value returned by that function 
// and adds it to a new array

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); 

// So in the above example, item => item * 2 is the arrow function 
// equivalent of --

function doubleItem(item) {
    return item * 2;
}



// RETURN VALUES

const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString);

// in cases where func don't return any value, the ref
// pages list the return values as void or undefined


// To return a value in my own function, I need to use
// the return keyword

function random(number) {
    return Math.floor(Math.random() * number);
}

// above could be written as follows

function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
}



// in the following code, the function receives a function
// defined by a function expression and executes it for 
// every element of the array received as a second arg.

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function (x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers));

// in JavaScript, a func can be defined based on a condition

let myFunc;
if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = "Toyota";
    };
}

