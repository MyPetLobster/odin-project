// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

// While loops

// initializer 
// while (condition) {
//     // code to run

//     final-expression
// }


const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;
while (i < cats.length) {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }
    i++;
}



// do...while loops

// initializer
// do {
//     // code to run

//     final-expression
// } while (condition)

// main difference between while and do...while loops is that the code
// inside a do...while loop is always executed at least once. BC
// the condition comes after the code inside the loop

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// let i = 0;
// do {
//     if (i === cats.length - 1) {
//         myFavoriteCats += `and ${cats[i]}.`;
//     } else {
//         myFavoriteCats += `${cats[i]}, `;
//     }
//     i++;
// } while (i < cats.length);


// Using labels and continue (or break)

// eg

let x = 0;
let n = 0;
while (x < 5) {
    x++;
    if (x === 3) {
        continue;
    }
    n += x;
    console.log(n);
}

// Logs:
// 1 3 7 12


// label example

let b = 0;
let j = 10;
checkbandj: while (i < 4) {
    console.log(i);
    i += 4;
    checkj: while (j < 4) {
        console.log(j);
        j -= 1;
        if (j % 2 === 0) {
            continue checkj;
        }
        console.log(j, "is odd.");
    }
    console.log("b =", b);
    console.log("j =", j)
}



// for...in statement

// for (variable in object)
//     statement

// The following function takes as its argument an object and the object's
// name. then iterates over the object's properties and returns a string
// that lists the property names and their values

function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>";
    return result;
}

// For an object car with properties make and model, result would be:
// car.make = Ford
// car.model = Mustang



/// DIFFERENCE BETWEEN for...of AND for...in

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
    console.log(i);
}

// "0" "1" "2" "foo"

for (const i of arr) {
    console.log(i);
}

// 3 5 7


// The for...of and for...in statements can also be used with 
// destructuring. For example, you can simultaneously loop over
// the keys and values of an object using Object.entries().

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
}