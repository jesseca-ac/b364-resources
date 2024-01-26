// console.log('Hello World');

// [Section] Objects
/*
    - An object is a data type that is used to represent real world objects
    - It is a collection of related data and/or functionalities
    - In JavaScript, most core JavaScript features like strings and arrays are objects (Strings are a collection of characters and arrays are a collection of data)
    - Information stored in objects are represented in a "key:value" pair
    - A "key" is also mostly referred to as a "property" of an object
    - Different data types may be stored in an object's property creating complex data structures
*/

// Creating objects using object initializers/literal notation
/*
    - This creates/declares an object and also initializes/assigns it's properties upon creation
    - A cellphone is an example of a real world object
    - It has it's own properties such as name, color, weight, unit model and a lot of other things
    - Syntax
        let objectName = {
            keyA: valueA,
            keyB: valueB
        }
*/
let cellphone = {
    name: 'Nokia 3210',
    manufactureDate: 1999
};

console.log('Result from creating objects using initializers/literal notation:');
console.log(cellphone);
console.log(typeof cellphone);

// Creating objects using a constructor function
/*
    - Creates a reusable function to create several objects that have the same data structure
    - This is useful for creating multiple instances/copies of an object
    - An instance is a concrete occurence of any object which emphasizes on the distinct/unique identity of it
    - Syntax
        function ObjectName(keyA, keyB) {
            this.keyA = keyA;
            this.keyB = keyB;
        }
*/
// This is an object
// The "this" keyword allows to assign a new object's properties by associating them with values received from a constructor function's parameters
function Laptop(name, manufactureDate){
    this.name = name;
    this.manufactureDate = manufactureDate;
}

// This is a unique instance of the Laptop object
/*
    - The "new" operator creates an instance of an object
    - Objects and instances are often interchanged because object literals (let object = {}) and instances (let object = new object) are distinct/unique objects
*/
let laptop = new Laptop('Lenovo', 2008);
console.log('Result from creating objects using object constructors:');
console.log(laptop);

// This is another unique instance of the Laptop object
let myLaptop = new Laptop('MacBook Air', 2020);
console.log('Result from creating objects using object constructors:');
console.log(myLaptop);

let oldLaptop = Laptop('Portal R2E CCMC', 1980);
/*
    - The example above invokes/calls the "Laptop" function instead of creating a new object instance
    - Returns "undefined" without the "new" operator because the "Laptop" function does not have a return statement
*/
console.log('Result from creating objects without the new keyword:');
console.log(oldLaptop);

// Creating empty objects
let computer = {}
let myComputer = new Object();

// [Section] Accessing Object Properties

// Using the dot notation
console.log('Result from dot notation: ' + myLaptop.name);

// Using the square bracket notation
console.log('Result from square bracket notation: ' + myLaptop['name']);

// Accessing array objects
/*
    - Accessing array elements can be also be done using square brackets
    - Accessing object properties using the square bracket notation and array indexes can cause confusion
    - By using the dot notation, this easily helps us differentiate accessing elements from arrays and properties from objects
    - Object properties have names that makes it easier to associate pieces of information
*/

let array = [laptop, myLaptop];

// May be confused for accessing array indexes
console.log(array[0]['name']);
// Differentiation between accessing arrays and object properties
// This tells us that array[0] is an object by using the dot notation
console.log(array[0].name);

// [Section] Initializing/Adding/Deleting/Reassigning Object Properties
/*
    - Like any other variable in JavaScript, objects may have their properties initialized/added after the object was created/declared
    - This is useful for times when an object's properties are undetermined at the time of creating them
*/

let car = {};

// Initializing/adding object properties using dot notation
car.name = 'Honda Civic';
console.log('Result from adding properties using dot notation:');
console.log(car);

// Initializing/adding object properties using bracket notation
/*
    - While using the square bracket will allow access to spaces when assigning property names to make it easier to read, this also makes it so that object properties can only be accesssed using the square bracket notation
    - This also makes names of object properties to not follow commonly used naming conventions for them
*/
car['manufacture date'] = 2019;
console.log(car['manufacture date']);
console.log(car['Manufacture Date']);
console.log(car.manufactureDate);
console.log('Result from adding properties using square bracket notation:');
console.log(car);

// Deleting object properties
delete car['manufacture date'];
console.log('Result from deleting properties:');
console.log(car);

// Reassigning object properties
car.name = 'Dodge Charger R/T';
console.log('Result from reassigning properties:');
console.log(car);

// [Section] Object Methods
/*
    - A method is a function which is a property of an object
    - They are also functions and one of the key differences they have is that methods are functions related to a specific object
    - Methods are useful for creating object specific functions which are used to perform tasks on them
    - Similar to functions/features of real world objects, methods are defined based on what an object is capable of doing and how it should work
*/

let person = {
    name: 'John',
    talk: function() {
        console.log('Hello my name is ' + this.name);
    }
}

console.log(person);
console.log('Result from object methods:');
person.talk();

// Adding methods to objects
person.walk = function() { 
    console.log(this.name + ' walked 25 steps forward.');
};
person.walk();

// Methods are useful for creating reusable functions that perform tasks related to objects
let friend = {
    firstName: 'Joe',
    lastName: 'Smith',
    address: {
        city: 'Austin',
        country: 'Texas'
    },
    emails: ['joe@mail.com', 'joesmith@email.xyz'],
    introduce: function() {
        console.log('Hello my name is ' + this.firstName + ' ' + this.lastName);
    }
};
friend.introduce();

// [Section] Real World Application Of Objects
/*
    - Scenario
        1. We would like to create a game that would have several pokemon interact with each other
        2. Every pokemon would have the same set of stats, properties and functions
*/

// Using object literals to create multiple kinds of pokemon would be time consuming
let myPokemon = {
    name: "Pikachu",
    level: 3,
    health: 100,
    attack: 50,
    tackle: function(){
        console.log( "This Pokemon tackled targetPokemon");
        console.log( "targetPokemon's health is now reduced to _targetPokemonhealth_");
    },
    faint : function() {
     console.log("Pokemon fainted");
    }
}

console.log(myPokemon);

// Creating an object constructor instead will help with this process
function Pokemon(name, level) {

    // Properties
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;

    //Methods
    this.tackle = function(target) {
        console.log(this.name + ' tackled ' + target.name);
        console.log("targetPokemon's health is now reduced to _targetPokemonHealth_");
        };
    this.faint = function(){
        console.log(this.name + 'fainted.');
    }

}

// Creates new instances of the "Pokemon" object each with their unique properties
let pikachu = new Pokemon("Pikachu", 16);
let rattata = new Pokemon('Rattata', 8);

// Providing the "rattata" object as an argument to the "pikachu" tackle method will create interaction between the two objects
pikachu.tackle(rattata);
