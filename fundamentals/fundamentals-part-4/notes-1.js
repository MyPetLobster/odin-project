// https://www.w3schools.com/js/js_arrays.asp

// Looping Array Elements

// using for loops
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text7 = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


// using Array.forEach()
const fruitsTwo = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruitsTwo.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";

}


// Adding array elements

// using push() function
const cars = ["Acura", "BMW", "Ford", "Toyota"];
cars.push("Honda");

// using length property
cars[cars.length] = "Honda";

// Adding elements with high indexes can create undefined "holes" in
// the array


// Associative Arrays
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes)
// JavaScript does NOT support arrays with named indexes
// In JS, arrays ALWAYS use NUMBERED INDEXES

// To find out if something is an array in JS, use the Array.isArray() method

// I can also use "instanceof" operator.
// instanceof operator returns true if an object is created by a given
// constructor. For example:

const bands = ["Radiohead", "Mogwai", "Broken Social Scene"];
bands instanceof Array;

// ARRAY METHODS
// https://www.w3schools.com/js/js_array_methods.asp

const fruits = ["Apple", "Banana", "Orange", "Mango"];
let size = fruits.length;

// Array to String toString()

document.getElementById("demo").innerHTML = fruits.toString();

// The join() method also joins all array elements into a string
// It behaves just like toString(), but in addition, you can 
// specify the separator

document.getElementById("demo").innerHTML = fruits.join(" * ");
// result: "Banana * Orange * Apple * Mango"

// Popping and Pushing

// pop() method removes the last elements from array

fruits.pop();
// The pop() method returns the value that was "popped out"
let lastFruit = fruit.pop();

// The push() method returns the new array length

let length = fruits.push("Kiwi");



// SHIFTING ELEMENTS
// shifting is equivalent to popping but working on the first element
// instead of the last

// JavaScript Array shift()
// shift() method removes the first array element and "shifts"
// all the other elements to a lower index

fruits.shift();
// the shift method returns the value that was "shifted" out

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning)
// and "unshifts" the older elements

fruits.unshift();
// returns the length of the new array


// Changing Elements
// elements are changed by accessing the index number

// you can also use the length method to add elements to the end of an array

fruits[fruits.length] = "Kiwi";


// Array elements can be deleted with the delete() method
// But using delete leaves undefined holes in the array
// Use pop or shift instead

// Merging (Concatenating) Arrays

// the concat() method creates a new array by merging existing arrays

const myGirls = ["Cecilie", "Laura", "Betty"];
const myBoys = ["Todd", "Marcus", "Henry"];

const myChildren = myGirls.concat(myBoys);

// the concat() method does not change existing arrays, It always
// returns a new array

// concat() method can take any number of array arguments

const newArray = arr1.concat(arr2, arr3);

// the concat() method can also take strings as arguments

const arr1 = ["Emil", "Tobias", "Linus"];
const myKids = arr1.concat("Peter");


// FLATTENING AN ARRAY
// Flattening is the process of reducing the dimensionality of an array

// The flat() method creates a new array with sub-array elements
// concatenated to a specified depth

const myArr = [[1,2], [3,4], [5,6]];
const newArr = myArr.flat();
// returns: [ 1, 2, 3, 4, 5, 6 ]



// Splicing and slicing 

// The splice() method can be used to add new items to an array
const fruits3 = ["Banana", "Apple", "Orange", "Mango"];
fruits3.splice(2, 2, "Lemon", "Kiwi");
// result = ["Banana", "Apple", "Lemon", "Kiwi"]

// first parameter (2) defines the position where the new elements should
// be added (spliced in)
// The 2nd parameter (2) defines how many elements should be removed
// The rest of the param define the new elements to be added

// The splice() method returns an array with the deleted items


// Using splice() to remove items
// with clever param setting you can use splice() to remove elements 
// without leaving "holes" in the array

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,1)
// removes first element of array



// JavaScript Array slice()

// The slice method slices out a piece of an array into a new array

const froots = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = froots.slice(1);

// slice() method creates a new array
// slice() method does not remove any elements from source array

// with two args, the method selects elements from start argument
// up to (BUT NOT INCLUDING) the end argument


// AUTOMATIC toString()

// JS automatically converts an array to a comma separated string
// when a primitive value is expected
// This is always the case when you try to output an array

// These two examples produce the same result:
// This:
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// And this:
document.getElementById("demo").innerHTML = fruits;


// ALL JS objects have a toString() method


// Finding Max and Min values in an Array
// There are no built in functions for finding the highest or lowest
// value in a javascript array



// https://www.w3schools.com/js/js_array_sort.asp
// Sorting Arrays

// the sort() method sorts an array alphabetically
fruits.sort();

// Reversing an Array
// The reverse() method reverses the elements in an array
// You can use it to sort an array in descending order
fruits.sort();
fruits.reverse();

// Numeric Sort
// by default the sort() function sorts values as strings
// Fix this by providing a COMPARE FUNCTION

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

// Same trick to sort in descending order

points.sort(function(a,b){return b - a});


// THE COMPARE FUNCTION

// The purpose of the compare function is to define an alternative
// sort order. 
// The compare function should return a negative, zero, or pos. val

// function (a, b){return a - b}

// When the sort() func compares two values, it sends the values
// to the compare function and sorts the values according to the 
// returned (neg, zero, pos) value.

// If the result is negative, a is sorted before b
// positive? b is sorted before a
// if result is 0, no changes are done with sort order of values


// Sorting an array in RANDOM ORDER

points.sort(function(){return 0.5 - Math.random()});

// the above method is not accurate, It will favor some numbers over
// others. 

// The most popular correct method is called 
// FISHER YATES shuffle, introduced as early as 1938!

// In JavaScript it can be translated to this:

const numbers = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}


// Finding the highest or lowest value in an array

points.sort(function(a,b){return a - b});
let lowestValue = points[0];

// b-a for descending and highest value or just take points.length - 1 

// sorting an array is very inefficient method if you only want
// highest or lowest value

// Using Math.max() on an Array

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3);

// Math.min() used the same


// The fastest solution is to use a "home made" method

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

// And to find the minimum

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}


// Sorting Object Arrays

const cars = [
    {type: "Volvo", year:2016},
    {type: "Saab", year:2001},
    {type: "BMW", year:2010}
];

// Even if objects have properties of different data types,
// the sort() method can be used to sort the array

// The solution is to write a compare function to compare property values:
cars.sort(function(a,b){return a.year - b.year});

// Comparing string properties is a little more complex:

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase()
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});



// Stable Array sort()

// ES2019 revised the Array sort() method
// before 2019, the specs allowed unstable sorting algos such as
// QuickSort

// After ES2019, browsers must use a stable sorting algo
// When sorting elements on a value, the elements must keep their
// relative position to other elements with the same value