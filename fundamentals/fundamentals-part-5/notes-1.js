// https://javascript.info/object

// Creating object with object literal

let user = {
    name: "John",
    age: 30,
};

// get the property values of the object

alert( user.name ); // John
alert( user.age ); // 30

// value can be any type
// to add a boolean value

user.isAdmin = true;

// to remove a property use the delete operator

delete user.age

// We can also use multi-word property names but then they must be quoted:

let userTwo = {
    name: "John",
    age: 30,
    "likes birds": true,
};

// Adding a comma after last property in a list is called a "trailing"
// or "hanging" comma. Makes it easier to add/remove/move around
// properties because all line become alike.

// for multi word properties, the dot access doesn't work

// There's an alternative "square bracket notation" that works with
// any string

let userThree = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];

// Square brackets also provide a way to obtain the property name as
// the result of any expression -- as opposed to a literal string
// like from a variable as follows:

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// here the variable key may be calculated at run-time or depend on 
// the user input. And we use it to access the property. That gives us 
// great deal of flexibility.

// For instance:

let user = {
    name: "John",
    age: 30,
};

let keyTwo = prompt("What do you want to know about the user?", "name");

// COMPUTED PROPERTIES 
// We can use square brackets in an object literal when creating an object
// That's called computed properties

let tool = prompt("Which tool to buy?", "hammer");

let shoppingBag = {
    [tool]: 5, // name of property is taken from the variable
};

alert(shoppingBag.hammer); // 5 if tool="hammer"

// The meaning of a computed property is simple: [fruit] means that
// the property name should be taken from fruit.
// so if a visitor enters "apple", bag will become {apple: 5}
// essentially that works the same as:

let fruitTwo = prompt("Which fruit to buy?", "apple");
let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;


// we can use more complex expressions inside square brackets:

let fruitFour = "apple";
let bagThree = {
    [book + 'Computers']: 5 // bagThree.appleComputers = 5
};



// PROPERTY VALUE SHORTHAND

// In real code, we often use existing variables as values 
// property names.

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user = makeUser("John", 30);

// in the above example, properties have the same names as variables
// The use-case of making a property from a variable is so common
// that there's a special property value shorthand to make it shorter

// instead of name:name we can just write name, like this

function makeUserTwo(name, age) {
    return {
        name,
        age,
    };
}

// We can use normal properties and shorthands in the same object

// PROPERTY NAME LIMITATIONS
// as we already know, a variable cannot have a name equal to one
// of the language-reserved words like "for", "let", "return", etc

// But for an object property, there's no such restriction

// Other types are automatically converted to strings

// there's an exception to that rule with the special property 
// named __proto__. We can't set it to a non-object value


// PROPERTY EXISTENCE TEST, 'in' operator

// A notable feature of objects in JS is that it's possible to
// access any property. There will be no error if the property doesn't
// exist

// reading a non-existing property just returns undefined. So we 
// can actually test whether the property exists:

let test = {};

alert( test.noSuchProperty === undefined); // true means no such property exists

// There's also a special "in" operator for that

// The syntax is:
// "key" in object

let user = { name: "John", age: 30 };

alert("age" in user); // true, user.age exits


// FOR IN LOOP

// To walk over all of the keys of an object, there exists a special form
// of the loop, for...in. This is completely different from the for(;;)

for (key in object) {
    // executes the body for each key among the object properties
}

// To output all properties of user:

let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    // keys
    alert( key ); // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}


// SUMMARY

// Objects are associative arrays with several special features
// They store properties (key-value pairs), where:
//      - property keys must be strings or symbols (usually strings)
//      - Values can be of any type
// To access properties we can use
//      - The dot notation: obj.property
//      - Square brackets notation obj["property"]. Square brackets
//        allow taking the key from a variable, like obj[varWithKey].
// Additional operators:
//      - To delete a property: delete obj.prop
//      - To check if a property with the given key exists:
//              "key" in obj
//      - To iterate over an object: for (let key in obj) loop.

// What we've studied in this chapter is called a "plain object", or just "Object"
// There are many other kinds of objects in JavaScript:
// Array to store ordered data collections
// Date to store the info about the date and time
// Error to store info about an error
// etc.

// Tasks

let user = {};

user.name = "John";
// or 
user["name"] = "John";

user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


////

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};


function sumAll(obj) {
    let total = 0;
    for (let prop in obj) {
        total += obj[prop];
    }
    return total;
}

//// Multiply numeric property values by 2

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof(obj[prop]) === "number") {
            obj[prop] *= 2;
        }
        
    }
}

