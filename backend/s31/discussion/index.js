console.log("Hello B364!");

// [SECTION] Exponent Operator

const firstNum = 8 ** 2;
console.log(firstNum);

const secondNum = Math.pow(8, 2);
console.log(secondNum);

// [SECTION] Template Literals
/*
	- Allows to write sstrings without using concatenation operator (+)
	- Greatly helps with code readability
*/

let name = "John";
// Pre-template Literal String
// Uses single quotes ('')
let message = 'Hello ' + name + '! Welcome to programming!';
console.log("Message without template literals:" + message)

// Strings Using Template Literal
// Uses backtickss (``)
message = `Hello ${name}! Welcome to programming!`;
console.log(`Message with template literals: ${message}`)

// Multi-line Using Template Literals
const anotherMessage =`
${name} attended a math competition.
He won it by solving the problem 8 ** 2 with the solution of ${firstNum}.
`
console.log(anotherMessage);

/*
	- Template literals allow us to write strings with embedded JavaScript expressions
	- expressions are any valid unit of code that resolves to a value
	- "${}" are used to include JavaScript expressions in strings using template literals.
*/

const interestRate = .1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);

// [SECTION] Array Destructuring
/*
	- Allows us to unpack elements in arrays into distinct variables
	- Allows to name array elements with variables instead of using index numbers
	- Helps with code readability
	- Syntax
		let/const [variableName, variableName, variableName] = array;
*/
const fullName = ["Juan", "Dela", "Cruz"]
// Pre-Array Destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`)

const [firstName, middleName, lastName] = fullName;

console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);

// [SECTION] Object Destructuring
/*
	- Allows us to unpack properties of objects into distinct variables
	- Shortens the syntax for accesing properties from objects.
	- Syntax 
		let/const {propertyName, propertyName, propertyName} = object;
*/
const person = {
	givenName: "Jane",
	maidenName: "Dela",
	familyName: "Cruz"
};

console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

console.log(`Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's good to see you again.`);

const { givenName, maidenName, familyName } = person;

console.log(givenName);
console.log(maidenName);
console.log(familyName)

console.log(`Hello ${ givenName } ${ maidenName } ${ familyName }`);

function getFullName ({ givenName, maidenName, familyName}) {
	console.log(`${ givenName } ${ maidenName } ${ familyName }`);
}

getFullName(person);

// [SECTION] Arrow Functions
/*
	- Compact alternative syntax to traditional functions
	- Useful for code snippets where creating functions will not be reused in any other portion of the code.
	- Adheres to the "DRY" (Don't Repeat Yourself) principle where there's no longer need to create a function and think of a name for functions that will only be used in ceratin code snippets.

- Syntax
 	const variableName = () => {
		console.log()
 	}
*/

// const hello = () => {
// 	console.log("Hello world!");
// }

// hello();

// Pre-Arrow Function and Template Literals
/*
	- Syntax
		funcntion functionName(parameterA, parameterB, parameterC) {
			console.log();
		}

*/

// function printFullName (firstName, middleInitial, lastName) {
// 	console.log(firstName + ' ' + middleInitial	 + '. ' + lastName);
// }

// printFullName("John", "D", "Smith");

const printFullName = (firstName, middleInitial, lastName) => {
	console.log(`${firstName} ${middleInitial}. ${lastName}`);
}

printFullName("John", "D", "Smith");

const students = ["John", "Jane", "Judy"];

// Arrow Functions with loops
// Pre-Arrow Function
// students.forEach(function(student) {
// 	console.log(`${student} is a student.`);
// })

// Arrow Function
// The function is only used in the "forEach" method to print out a text with student's namems
students.forEach((student) => {
	console.log(`${student} is a student.`)
})

// [SECTION] Implicit Return Statement
/*
	- There are instancecs when you can omit the "return" statement
	- This works because even without the "return" statement in JavaScript implicitly adds it for the result of the function
*/
//Arrow Function without implicit return
// const add = (x, y) => {
// 	return x + y
// }

// let total = add(1,2);
// console.log(total);

const add = (x, y)  => x + y;

let total = add(1,2);
console.log(total);

// [SECTION] Default Function Argument Value
// Provides a default argument value if none is provided when the function is invoked.

const greet = (name = 'User') => {
	return `Good morning, ${ name }!`;
}

console.log(greet());
console.log(greet("John"));


// [SECTION] Class-Based Object Blueprints
/*
	- Allows creation/instantiation of objects using classses as blueprints
*/

// Creating a class
/*
	- The constructor is a special method of a class for creataing/Initializing an object for that class.
	- The "this" keyword refers to the properties of an object created/initialized from the class
	- By using 'this' keyword and aaccessing an objet's property, this allolws us to reaassign it's values
	- Syntax
		class className {
			constructor(objectPropertyA, objectPropertyB) {
				this.objectPropertyA = objectPropertyA;
				this.objectProperyB  = objectPropertyB;
			}
		}
*/

class Car {
	constructor(brand, name, year) {
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}
// Instantiating an object
/*	
	- The "new" operator creates/intanntiates a new object with the given arguments as the values of it's properties
	- No arguments provided will create an object without any values assigned to it's properties
	-  let/const variableName = new ClassName();
*/
/*
	- Creating a constant with the "const" keyword and assigning it a value of an object makes it so we can't re-assign it with another data  type.
	- It does not mean that it's properties cannot be changed/immutable
*/
const myCar = new Car();

console.log(myCar);
// Values of properties may be assigned after creation/instantiation of an object
myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;

console.log(myCar);

const myNewCar = new Car("Toyota", "Vios", 2021);

console.log(myNewCar);