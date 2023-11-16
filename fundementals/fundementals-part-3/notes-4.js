// https://javascript.info/function-expressions

// function expressions

// Function Declaration looks like:

function sayHi() {
    alert("Hi");
}

// allow us to create a new function in the middle of any expression

let sayHi = function() {
    alert("Hi");
};

// no matter how a function is created, a function IS a value
// both examples above store the function in the sayHi variable

// CALLBACK FUNCTIONS

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed");
}

function showCancel() {
    alert("You canceled the execution");
}

// usage: functions showOk, showCancel are passed as args to ask()
ask("Do you agree?", showOk, showCancel)


// We can use function expressions to write equivalent, shorter func

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() {alert("You agreed")}; 
    function() {alert("You canceled the execution"); }
);



// Function declarations are only visible inside the code block in
// which it resides

let age = 16;

if (age < 18) {
    welcome();    // RUNS

    function welcome() {
        alert("Hello!");
    }

    welcome();    // RUNS
} else {

    function welcome() {
        alert("Greetings!");
    }
}

// Here we are out of the curly braces so cannot see 
// func declarations made inside of them
welcome(); // Error: welcome is not defined

// To fix this we can use a function expression and assign welcome
// to the variable that is declared outside of if and has proper visibility

let age = prompt("What is your age", 18)

let welcome;

if (age < 18) {
    let welcome = function() {
        alert("Hello");
    };
} else {
    welcome = function() {
        alert("Greetings!");
    };
}

welcome(); // ok now


// Or we could simplify it even further using a question mark operator

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function() { alert("Hello!") } :
    function() { alert("Greetings!") };

welcome(); // ok now




/// ARROW FUNCTIONS

// another alternative to function definitions and func expressions

let func = (arg1, arg2, ..., argN) => expression;

// This creates function func that accepts arguments arg1...argN,
// then evaluates the expression on the right side with their use 
// and returns its results

// It's a shorter version of:

let func = function(arg1, arg2, ..., argN) {
    return expression;
};


// concrete example

let sum = (a, b) => a + b;

// that is a shorter form of

let sum = function(a,b) {
    return a + b;
};

// with only one arg, the parentheses around parameters can be omitted

let double = n => n * 2;

// if there are no args, parentheses are empty but must be present

let sayHI = () => alert("Hello!");


// Arrow functions can be used the same way as Function Expressions
// For instance to dynamically create a function

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? 
    () => alert("Hello");
    () => alert("Greetings!");

welcome();


// MULTILINE ARROW FUNCTIONS

let sum = (a,b) => {
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit return
};

alert ( sum(1,2) ); // 3



// TASKS

// rewrite with arrow functions

let ask = (question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.");\
);