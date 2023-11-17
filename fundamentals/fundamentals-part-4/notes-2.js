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
