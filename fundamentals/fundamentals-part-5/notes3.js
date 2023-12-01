// https://javascript.info/array-methods

// Array Methods

// Add/Remove items

// arr.push(...items) - adds item to the end
// arr.pop() - extracts an item from the end
// arr.shift() - extracts an item from the beginning
// arr.unshift(...items) - adds items to the beginning

// SPLICE
// How to delete an item from an array
// The arrays are objects, so we can try to use delete:

let arr = ["I", "go", "home"];
delete arr[1]; // remove go
alert( arr[1] ); // undefined

// now arr = ["I",  , "home"]
alert( arr.length ); // 3 still

// the element was removed but the array still has 3 elements. That's natural because delete 
// obj. key removes a value by the key. That's all it does. Fine for objects. But for
// arrays we usually want the rest of the elements to shift and occupy the freed space.
// We expect to have a shorter array now.

// So special methods should be used

// the arr.splice method is a swiss army knife for arrays. It can insert, remove and replace items

// the syntax is:
// arr.splice(start[, deleteCount, elem1, ..., elemN])

// deletion example
let boo = ["I", "study", "JavaScript"];

boo.splice(1,1); // from index 1 remove 1 element
alert(boo); // ["I", "JavaScript"]

// Remove 3 elements and replace with other two
let foo = ["I", "study", "JavaScript", "right", "now"];

//remove 3 first elements and replace them with another
foo.splice(0, 3, "Let's", "dance");
alert(foo); // ["Let's", "dance", "right", "now"];

// splice returns the array of removed elements

// The splice method is also able to inset the elements without any removals. For that
// we need to set deleteCount to 0:

let grr = ["I", "study", "JavaScript"];

// from index 2, delete 0, then insert "complex" and "language"
grr.splice(2, 0, "complex", "language");

// *** Here and in other array methods, negative indexes are allowed. They specify the
// position from the end of the array, like here:

let hss = [1, 2, 5];

// from index -1 (one step from the end), delete 0 elements, then insert 3 and 4
hss.splice(-1, 0, 3, 4);
alert(hss); // 1,2,3,4,5


////// SLICE

// the slice method is much simpler than splice
// the syntax is:
// arr.slice*([start], [end])

// It returns a new array copying to it all items from index start to end (not including end)
// Both start and end can be negative, in that case position from array end is assumed

// similar to string method str.slice but instead of substrings it makes subarrays

// For instance:

let moo = ["t", "e", "s", "t"];

alert(moo.slice(1, 3)); // e,s (copy from 1 to 3)
alert(moo.slice(-2)); // s,t (from -2 til end)

// We can also call it without arguments. arr.slice() creates a copy of arr. That's often
// used to obtain a copy for further transformations that should not affect the original array

/////// CONCAT

// the method arr.concat creates a new array that includes values from other arrays abd
// additional items. The syntax is:
// arr.concat(arg1, arg2...)

// It accepts any number of arguments -- either arrays or values. The result is a new array
// containing items from arr, then arg1, arg2, etc
// If an argument argN is an array, then all its elements are copied. Otherwise, the
// argument itself is copied
// For instance:

let xyz = [1,2];
// create an array from: xyz and [3,4]
alert( xyz.concat([3,4])); // 1,2,3,4
alert ( xyz.concat([3,4], [5,6]) ); // 1,2,3,4,5,6

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays
// are added as a whole:

let goop = [1, 2];
let arrayLike = {
    0: "something",
    length: 1
};

alert ( goop.concat(arrayLike) ); // 1,2,[object Object]

// but if an array-like object has a special Symbol.isConcatSpreadable property, then it's
// treated as an array by concat: its elements are added instead

let poop = [1,2];

let arrayIsh = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert( poop.concat(arrayIsh) ); // 1, 2, something, else

///// Iterate: forEach

// the arr.forEach method allows us to run a function for every element of the array
// the syntax is:
// arr.forEach(function(item, index, array) {
    // ... do something with item
// });

// for instance, this shows each element of the array:

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// and this code is more elaborate about their positions in the target array:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});

// The result of the function if it returns any is thrown away

/////// SEARCHING IN ARRAY

/////// indexOF // lastIndexOf // includes

// The methods of arr.indexOf and arr.includes have similar syntax and do essentially
// the same thing as their string counterparts, but operate on items instead of characters
// arr.indexOf(item, from) -- looks for item starting from index from, and returns the index
//                            where it was found, otherwise -1
// arr.includes(item, from) -- looks for item starting from index from, returns true if found

// Usually these methods are used with only one argument: the item to search. By default,
// the search is from the beginning. For instance:

let jar = [1, 0, false];

alert ( jar.indexOf(0) ); // 1
alert ( jar.indexOf(false) ); // 2
alert ( jar.indexOf(null) ); // -1

alert ( jar.includes(1) ); // true

// indexOf uses the strict equality === for comparison. So if we look for false,
// it finds exactly false and not the zero

// The method arr.lastIndexOf is the same as indexOf but it looks from right to left

// ** the includes method handles NaN correctly, unlike indexOf

const tar = [NaN];
alert ( tar.indexOf(NaN) ); // -1 (wrong it should be 0)
alert ( tar.includes(NaN) ); // true (correct)
// this is bc includes was added to JS much later and uses the more up to date comparison
// algorithm internally



///// FIND and findIndex/findLastIndex

// imagine we have an array of objects. How do we find an object with the specific
// condition? Here the arr.find(fn) method comes in handy.

let result = arr.find(function(item, index, array) {
    // if true is returned the item is returned and iteration is stopped
    // for falsy scenario, returns undefined
});

// the function is called for elements of the array, one after another
//      - item is the element
//      - index is its index
//      - array is the array itself

// if it returns true, the search is stopped, the item is returned. if nothing found,
// undefined is returned. For example we have an array of users each with the fields
// "id" and "name". Let's find the one with "id" == 1;

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// The arr.findIndex method has the same syntax but returns the index where the element was
// found instead of the element itself. Value of -1 returned if nothing is found
// The arr.findLastIndex method

// ***** use indexOf when you want to find the index of a specific element, and use 
// findIndex when you want to find the index based on a condition


///// FILTER

// the find method looks for a single (first) element that makes the function return true
// if there may be many, we can use arr.filter(fn)
// The syntax is similar to find, but filter returns an array of all matching elements

let boogers = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
});

// for instance:

let frogs = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

// returns array of the first two users
let someFrogs = frogs.filter(item => item.id < 3);
alert(someFrogs.length); // 2


////// TRANSFORM AN ARRAY

// Let's move on to methods that transform and reorder an array

///// MAP

// the arr.map method is one of the most useful and often used
// It calls the function for each element of the array and returns the array of results
// The syntax is:

let birds = arr.map(function(item, index, array) {
    // returns the new value instead of item
});

// For instance, here we transform each element into its length

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5, 7, 6

///// sort(fn)

// The call to arr.sort() sorts the array in place, changing its element order
// It also returns the sorted array, but the returned value is usually ignored, as arr
// itself is modified
// For instance:

let yarr = [ 1, 2, 15 ];
// the method reorders the content of yarr
yarr.sort();

alert(yarr); // 1, 15, 2

// The items are sorted as strings by default. Literally all elements are converted to 
// strings for comparisons. For strings, lexicographic ordering is applied and indeed
// "2" > "15"
// To use our own sorting order we need to supply a function as the argument of arr.sort()
// The function should compare two arbitrary values and return:

function compare(a, b) {
    if (a > b) return 1; // if the 1st value is greater than the 2nd
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if 1st val is less than the 2nd
}

// for instance, to sort as numbers

function compareNumeric(a,b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let testArr = [ 1, 2, 15 ];

testArr.sort(compareNumeric);
alert(testArr); // 1, 2, 15

// Now it works as intended

// To see which elements are compared I can use something like this:

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert( a + " <> " + b );
    return a - b;
});

// *** Comparison function may return any number
// A comp func is only required to return a positive number to say "greater" and a 
// negative number to say "less"
// Allows us to write shorter functions

let garr = [1, 2, 15];
garr.sort(function(a,b) { return a-b;});
alert(garr) // 1,2,15

// ***** ARROW FUNCTIONS FTW

garr.sort( (a,b) => a - b );
// this works exactly the same as example above

// ***** Use localeCompare for strings

// strings comp algo compares letters by their codes by default
// For many alphabets, it's better to use str.localeCompare method to correctly sort letters


///// REVERSE

// the method arr.reverse reverses the order of elements in arr

let zarr = [1, 2, 3, 4, 5];
zarr.reverse();
alert( zarr ); // 5, 4, 3, 2, 1

///// SPLIT AND JOIN

// here's the situation from real life. We are writing a messaging app, and the person
// enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of
// names would be much more comfortable than a single string. How to get it?

// the str.split(delim) method does exactly that. It splits the string into an array by the
// given delimiter, delim

let names = 'Bilbo, Gandalg, Nazgul';
let barr = names.split(', ');
for (let name of barr) {
    alert ( `A message to ${name}.`); 
}

// the split method has an additional second numeric argument -- a limit on the array length
// If it is provided then the extra elements are ignored. In practice it is rarely used

let qarr = 'Bilbo, Gandald, Nazgul, Saruman'.split(', ', 2);
alert(qarr); // Bilbo, Gandalf


// split will split string into array of letters

// The call arr.join(glue) does the reverse to split. It creates a string of arr items by
// glue between them

// for instance:

let warr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = warr.join(';'); // glue array into string using ";"
alert( str ); // Bilbo;Gandalf;Nazgul


/////  REDUCE // reduceRight

// When we need to iterate over an array -- we can use forEach, for, or for...of.
// When we need to iterate and return data for each element -- we can use map
// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit
// more intricate. They are used to calculate a single value based on the array

// The syntax is:
// let value = arr.reduce(function(accumulator, item, index, array) {
    //...
// }, [initial]);

// The function is applied to all array elements one after another and "carries on" its result
// to the next call

// Arguments:
//      - accumulator - is the result of the previous function call, equals initial the first
//                      time if initial is provided;
//      - item - is the current item of the array
//      - index - is its position
//      - array - is the array

// As function is applied, the result of the previous function call is passed to the next
// one as the first argument

// So, the first argument is essentially the accumulator that stores all the combined
// result of all previous executions. And at the end it becomes the result of reduce

// Here we get a sum of an array in one line:

let mArr = [1, 2, 3, 4, 5];
let mResult = mArr.reduce((sum, current) => sum + current, 0);
alert(mResult); // 15

// we can also omit the initial value

// if there is no initial, then reduce takes the first element of the array as the initial
// value and starts the iteration from the second element.

// be careful -- if the array is empty then reduce call without initial value gives an error


///// Array.isArray

// Arrays do not form a separate language type. They are based on objects
// So typeof does not help distinguish a plain object from an array

alert(typeof {}); // object
alert(typeof []); // object

// But arrays are used so often that there's a special method for that: Array.isArray(value)
// it returns true if the value is an array, false otherwise


///// Most methods support "thisArg"

// Almost all array methods that call functions, like find, filter, map, with notable
// exception of sort, accept an additional parameter thisArg.

// Here is the full syntax of these methods:
//      - arr.find(func, thisArg);
//      - arr.filter(func, thisArg);
//      - arr.map(func, thisArg);

// the value of thisArg parameter becomes "this" for func
// For example, here we use a method of army object as a filter and thisArg passes context

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let applicants = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// find users for army.canJoin returns true
let soldiers = applicants.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(solders[1].age); // 23

// If in the example above we used users.filter(army.canJoin), then army.canJoin would be
// called as a standalone function, with this=undefined, thus leading to an instant error

// A call to users.filter(army.canJoin, army) can be replaced with --
// users.filter(user => army.canJoin(user)), that does the same. Latter is used more often

///// SUMMARY CHEAT SHEET

// To add or remove elements
//      - push(...items) -- adds items to the end,
//      - pop() -- extracts an item from the end
//      - shift() -- extracts an item from the beginning
//      - unshift(...items) -- adds items to the beginning
//      - splice(pos, deleteCount, ...items) -- at index pos deletes deleteCount elements
//          and inserts items
//      - slice(start, end) -- creates a new array, copies elements from index start till 
//          end, not inclusive, into it
//      - concat(...items) -- returns a new array: copies all members of the current one
//          and adds items to it. If any if items is an array, then its elements are taken

// To search among elements
//      - indexOf/lastIndexOf(item, pos) -- look for item starting from position pos, return
//          the index or -1 if not found
//      - includes(value) -- returns true if the array has value otherwise false
//      - find/filter(func) -- filter elements through the function, return first/all values
//          that make it return true
//      - findIndex is like find but returns the index instead of a value

// To iterate over elements
//      - forEach(func) -- calls func for every element, does not return anything

// To transform the array:
//      - map(func) -- creates a new array from results of calling func for every element
//      - sort(func) -- sorts the array in-place, then returns it
//      - reverse() -- reverses the array in-place, then returns it
//      - split/join -- convert a string to array and back
//      - reduce/reduceRight(func, initial) -- calculate a single value over the array by calling
//          func for each element and passing an intermediate result between the calls

// Additionally:
//      - Array.isArray(value) checks value for being an array, if so returns true otherwise false

// * Please note that the methods sort, reverse, and splice modify the array itself
// these methods are the most used ones, covering 99% of use cases, but there are a few more:

// arr.some(fn)/arr.every(fn) check the array
// The function, fn, is called on each element of the array similar to map. If any/all 
// results are true, returns true, otherwise false
// These methods behave sort of like || and && operators: if "fn" returns a truthy value,
// arr.some() immediately returns false and stops iterating over the rest of items as well

// We can use "every" to compare arrays:

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1,2], [1,2]) ); // true



// arr.fill(value, start, end) -- fills the array with repeating value from index start to end
// arr.copyWithin(target, start, end) -- copies its elements from pos start till pos end
//      into itself, at position target (overwrites existing)
// arr.flat(depth)/arr.flatMap(fn) -- create a new flat array from multidimensional array



// TASKS

// Translate border-left-width to borderLeftWidth

// My Solution:
// function camelize(str) {
//     words = str.split("-");
//     camelCase = words[0];
//     for (let i = 1; i < words.length; i++) {
//         camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return camelCase;
// }

// Staff Solution:

function camelizeTwo(str) {
    return str
        .split("-")
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}

// Filter Range

function filterRange(arr, a, b) {
    return arr.filter(item => (item > a && item < b));
}


// Filter Range in Place

let test = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
        } 
    }
}


// sort in decreasing order

let numList = [5, 2, 1, -10, 8];

numList.sort((a,b) => b- a);



// Copy and Sort Array

function copySorted(arr) {
    return arr.slice().sort();
}



// create an extendable calculator

function Calculator() {
    this.methods = {
        "-": (a,b) => a-b,
        "+": (a,b) => a+b
    };

    this.calculate = function(str) {
        let split = str.split(' ');
            a = +split[0];
            op = split[1];
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b) ) {
            return NaN;
        } 

        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}


// Map to Names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let zUsers = [ john, pete, mary ];

let zNames = zUsers.map(user => user.name);

alert( zNames ); // John, Pete, Mary


//////////

// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map(user => (
    { fullName: `${user.name} ${user.surname}`, id: user.id}
));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.


////////

// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

let todd = { name: "Todd", age: 25 };
let joe = { name: "Joe", age: 30 };
let lucy = { name: "Lucy", age: 28 };

let nameList = [ todd, joe, lucy ];

function sortByAge(arr) {
    arr.sort((a,b) => a.age - b.age);
}

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


// GET AVERAGE AGE

// function getAverageAge(users) {
//     let n = users.length;
//     let total = 0;
//     for (let i = 0; i < n; i++) {
//         total += users[i].age;
//     }
//     return total / n;
// }

// using reduce

function getAverageAge2(users) {
    return Math.round(users.reduce((prev, user) => prev + user.age, 0) / users.length);
}



////////


// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  return arr.filter((element, index, array) => arr.indexOf(element) === index)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// Staff Solution below

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if(!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}



/////////

// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

function groupById(arr) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let people = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(people);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.