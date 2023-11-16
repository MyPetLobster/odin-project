// https://javascript.info/function-basics

// If the same-named variable is declared inside the function then it
// shadows the outer one. For instance, in the code below the function
// uses the local userName. The outer one is ignored

let userName = 'John';

function showMessage() {
    let userName = 'Bob';

    let message = 'Hello, ' + userName;
    alert(message);
}

// the function will create and use its own 'userName'
showMessage(); // 'Hello, Bob'
alert( userName ); // 'Hello, John'

// Alternative default parameters

// Sometimes it makes sense to assign default values for parameters
// at a later stage after the function declaration

// We can check if the parameter is passed during the function
// execution, by comparing it with undefined

function showMessage(text) {
    // ...
    if (text === undefined) {
        text = 'empty message'
    }
    alert(text);
}

showMessage(); // empty message

// or we could use the || operator

function showMessage(text) {
    text = text || 'empty';
}

// modern JavaScript engines support the nullish coalescing 
// operator '??', it's better when most falsy values such as 0
// should be considered "normal"

function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// The common use case for ?? is to provide a default value
// For example, here we show 'user' if its value isn't null/undefined
// otherwise, 'Anonymous'

let user;

alert(user ?? "Anonymous"); // Anonymous

let user = 'John';

alert(user ?? "Anonymous"); // John

// can also use a sequence of ??

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// Tests

// rewrite the function using '?' or '||'

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


// Write a function min(a,b) which returns the least of two numbers

function min(a,b) {
    return a < b ? a : b;
}

// write a function pow(x,n) that returns x in power n.

function pow(x, n) {
    return Math.pow(x, n);
}

function pow(x, n) {

    let result = x;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}