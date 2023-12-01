// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

// Object Basics

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

// When the object's members are functions there's a simpler syntax
// Instead of bio: function() we can write bio() like this:

const person2 = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

// An object like this is referred to as an object literal -- we've 
// literally written out the object contents as we've come to create
// it. This is different compared to objects from classes.

// It is very common to create an object using an object literal when
// you want to transfer a series of structured, related data items
// in some manner, for example sending a request to be put into a 
// database. Sending a single object is much more efficient than
// sending several items individually

// DOT NOTATION

// the object name (person in above example) acts as the namespace --
// it must be entered first to access anything inside the object.
// Next you write a dot, then the item you want to access -- this can
// be the name of a simple property, an item of an array property,
// or a call to one of the object's methods, for example:

person.age;
person.bio();

// OBJECTS AS OBJECT PROPERTIES

// An object property itself can be an object
// eg

const personTwo = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    // ...
};

// to access these items with dot notation, you just need to chain the
// extra step onto the ends with another dot:

personTwo.name.first;
personTwo.name.last;

// name[0] from earlier examples becomes name.first now


// BRACKET NOTATION

person.age;
person.name.first;
// becomes
person["age"];
person["name"]["first"];

// objects are sometimes called associative arrays

// dot notation is generally preferred over bracket notation because
// it is more succinct and easier to read. However there are some 
// cases where you have to use bracket notation. For example, if an
// object property name is held in a variable, then you can't use dot
// notation to access the value, but you can access the value using
// bracket notation

// in the example below, the logProperty() function can use 
// person[propertyName] to retrieve the value of the property named
// in propertyName

const personThree = {
    name: ["Bob", "Smith"],
    age: 32,
};

function logProperty(propertyName) {
    console.log(person[propertyName]);
}

// SETTING OBJECT MEMBERS

// so far we've looked at retrieving (or getting) object members -- 
// you can also set (update) the value of object members by declaring
// the member you want to set (using dot or bracket notation) like this:

person.age = 45;
person["name"]["last"] = "Suzuki";


//

const myDataName = "height";
const myDataValue = "5'10\"";
person[myDataName] = myDataValue;

person.height; // 5'10"


// the above is not possible with dot notation, which can only
// accept a literal member name, not a variable value pointing to
// a name


//// WHAT IS "this"?

// the "this" keyword refers to the current object the code is being
// written inside. 

// If you only have to create a single object literal, it's not so useful
// But if you create more than one, this enables you to use the same
// method definition for every object you create.

const person1 = {
    name: "Chris",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};


///// INTRODUCING CONSTRUCTORS

// Using object literals is fine when you only need to create one
// object, but if you hae to create more than one, they're seriously
// inadequate. We have to write out the same code for every object we
// create and if we want to change some properties of the object,
// like adding a height property, then we have to remember to update
// every object

// We would like a way to define the "shape" of an object -- the set
// methods and properties it can have -- and then create as many
// objects as we like just updating the values for the properties
// that are different

// the first version of this is just a function

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

// This function creates and returns a new object each time we call it
// to use this:

const cory = createPerson("Cory");
cory.name;
cory.introduceSelf();

// this works fine but is a little long winded: we have to create an 
// empty object, initialize it, and return it. A better way is to
// use a constructor. A constructor is just a function called using
// the "new" keyword. When you call a constructor it will:
//      - create a new object
//      - bind "this" to the new object, so you can refer to "this"
//        in your constructor code.
//      - run the code in the constructor
//      - return the new object

// Constructors, by convention, start with a capital letter and are 
// named for the type of object they create. So we could rewrite our
// example like this:

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

// To call Person() as a constructor we use new:

const nick = new Person("Nick");
nick.name;


// TASK - Object basics 2

const band = {
    name: "Broken Social Scene",
    nationality: "Canadian",
    genre: "Indie Rock",
    members: [
        "Kevin Drew",
        "Leslie Feist",
        "Charles Spearin",
        "Brendan Canning",
        "Emily Haines",
        "Andrew Whiteman",
        "Evan Cranley",
        "Jason Collett",
        "Lisa Lobsinger",
    ],
    formed: 1999,
    split: false,
    albums: {
        "Feel Good Lost": 2001,
        "You Forgot it in People": 2002,
        "Broken Social Scene": 2005,
        "Forgiveness Rock Record": 2010,
        "Hug of Thunder": 2017,
    },
};

const bandInfo = `${band.name} was formed in ${band.formed} and have released ${Object.keys(band.albums).length} albums.`;