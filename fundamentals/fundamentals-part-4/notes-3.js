// https://javascript.info/while-for

// Quick Loop Review

///  while loops

let i = 0;
while (i < 3) {
    alert( i );
    i++;
}

// 

let a = 3;
while (i) {
    alert( a );
    a--;
}

// Curly braces are not required for single-line body

let b = 3;
while (b) alert(i--);



/// do...while loops

// condition check can be moved below the loop body with do...while syntax

let c = 0;
do {
    alert(c);
    c++;
} while (c < 3);


/// The for loop

// for (begin; condition; step) {
    // ... loop body ...
// }

for (let d = 0; d < 3; d++) {
    alert(i)
}

// Skipping parts... any part of a for loop can be skipped

// we can omit begin if do don't need to do anything at the loop start

let e = 0;

for (; e < 3; i++) {
    alert(e);
}

// same as

for (; f < 3;) {
    alert(f);
}


// can force exit any time using the special break directive

let sum = 0;
while (true) {
    let value = +prompt("Enter a number", '');

    if (!value) break;

    sum += value;

}
alert( 'Sum: ' + sum )

// continue directive

for (let i = 0; i < 10; i++) {
    // if true skip remaining part of the body
    if (i % 2 === 0) continue;

    console.log(i); //1, then 3, 5, 7, 9
}

// This is functionally the same as the above. Above is better because 
// it has less nesting. easier to read

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        alert();
    }
}

// NOTE syntax constructs that are not expressions cannot be used with
// ternary operator ?. In particular, directives such as break/continue
// aren't allowed there.

// eg..if we take this code:

// if (i > 5) {
//     alert(i);
// } else {
//     continue;
// }

// and rewrite it with a question mark:

// (i > 5) ? alert(i) : continue; // CONTINUE ISNT ALLOWED HERE


// LABELS FOR break/continue

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j}`, '');

        // what if we want to exit from here to Done (below)?
    }
}
alert('Done!');

// We need a way to stop the process if the user cancels the input
// the ordinary break after input would only break the inner loop
// that's not sufficient -- labels come to the rescue!

// a label is an identifier with a colon before a loop:
// the break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; 

        // do something with the value
    }
}

alert('Done!');

// can also move the label to a separate line

outer:
for (let i = 0; i < 3; i++) {}

// the continue directive can also be used with a label



// let i = 0
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


let isValid = false;

while (!isValid) {
    num = prompt("Enter a number greater than 100: ");
    if (num > 100) {
        isValid = true;
    }
}


// output prime numbers

// let n = prompt("Enter a number: ");

let n = 10;

for (let i = 3; i <= n; i++) {
    for (let j = 2; j <= (n/2); j++) {
        if (i % j === 0) {
            break;
        } 
        if (j == n/2) {
            console.log(i);
        } 
    }
}