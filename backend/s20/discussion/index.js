// alert("Hello Again");
// [SECTION] Syntax, Statements and Comments

// Statements:

// Statements in programming are instructions that we tell the computer to perform
// JS statements usually end with semicolon (;)
// Semicolons are not required in JS, but we will use it to help us train to locate where a statement ends
// A syntax in programming, it is the set of rules that describe how statements must be constructed.

/*
Where to place JavaScript
	- Inline you can place JavaScript right into the HTML page using script tags. This is good for very small sites and testing only. The inline approach does not scale well, leads to poor organization and code duplication.
	- External file a better approach is to place JavaScript into separate files and link to them from the HTML page. This way a single script can be include across thousands of HTML pages, and you only have one place to edit your JavaScript code. This approach is also much easier to maintain, write and debug.

Where should I place the Script Tags?
	The script tags can go anywhere on the page, but as a best practice, many developers will place it just BEFORE the closing body tag on the HTML page. This provides faster speed load times for your web page.
*/

// We used devtools not just to manipulate css but also allowing you to DEBUG, view messages and run JavaScript code in the console tab.

// Whitespace (basically, spaces and line breaks) can impact functionality in many computer languages-but not in JavaScript. In JavaScript, whitespace is only used for readability and has no functional impact.

// This is a statement:
console.log("Hello, B364!");
// This code will do the exact same thing:
console. log ( "Hello World " ) ;
// And so will this:
console.
log
(
	"Hello Again"
);

// Comments:

// Comments are parts of the code that gets ignored by the language
// Comments are meant to describe the written code

/*
There are two types of comments:
	1. Single-line comment denoted by two forward slashes
	2. Multi-line comment denoted by a slash and asterisk
*/

// [SECTION] Variables

// It is used to contain data.
// Any information that is used by an application is stored in what we call a "memory"
// When we create variables, certain portions of a device's memory is given a "name" that we call "variables"
// This makes it easier for us to associate information stored in our devices to actual "names" about information

// Declaring variables:

// Declaring variables - tells our devices that a variable name is created and is ready to store data
// Declaring variable without giving it a value will automatically assign it with the value of "undefined", it only means the that variable's value was "not defined".

// Syntax:
	// let/const variableName;

// let is a keyword that is usually used in declaring a variable
let myVariable;
// console.log() is useful for printing values of variables or certain results of code into the Google Chrome Browser's console
// Constant use of this throughout developing an application will save us time and builds good habit in always checking for the output of our code
console.log(myVariable);

// Trying to print out a value of a variable that has not ben declared will return an error of "not defined"
// The "not defined" error in console refers to the variable not being created/defined, whereas in the previous example, the code refers to the "value" of the variable as "not defined"
let hello;
console.log(hello);

// Variables must be declared first before they are used
// Using variables before they're declared will return an error
// let hello;

// Declaring and initializing variables
// Initializing variables - the instance when a variable is given it's initial/starting value
// Syntax 
	// let/const variableName = value;
let productName = 'desktop computer';
console.log(productName);

let productPrice = 18999;
console.log(productPrice);

// In the context of certain applications, some variables/information are constant and should not be changed.
// In this example, the interest rate for a lon, savings account or a mortgage must no be changed due to real world concerns.
// This is the best way to prevent applications from suddenly breaking or performing in ways that are not intended
const interest = 3.539;

// let's expound the used of let and const
// let and const are the keywords that we used to declare a variables.

// let - we usully used let if we want to reassign the values in our variable

// Reassigning variable values
// Reassiging a variable means changing it's initial or previous value with another value
// Syntax
	// variableName = newValue;

// In this example, we already initialized a value with the used of let in productName variable. We re-assigned its value to 'Laptop'.
productName = 'Laptop';
console.log(productName);

// let variable cannot re-declared within its scope. So while this will work:
let friend = 'Kate';
friend = 'Jane';   
console.log(friend);

// this will return an error:
// let friend = 'Kate';
// let friend = 'Jane';
// console.log(friend);

// while const cannot be updated or re-declared
// values of constants cannot be changed and will simply return an error

// So if we declare a variable within const, we can neiter update nnor the variable identifier cannot be reassigned.

/*
When to use JavaScript const?
	- As a general rule, always declare a variable with const unless you know that the value will change.

	Use const when you declare:

		- A new Array
		- A new Object
		- A new Function
*/

// Reassigning variables vs Initializing variables
// Declares a variable first
let supplier;
// Initialization is done after the variable has been declared
// This is considered as initialization because it is the first time that value has been assigned to a variable
supplier = "John Smith Tradings";
console.log(supplier);
// This is considered as reassignment because it's initial value was already declared
supplier = "Zuitt Store";
console.log(supplier);

// Can you declare a const variable without initialization?
// No. It will occur an error
/*
Example:
	const pi;
	pi = 3.1416;
	console.log(pi);
*/

// Multiple variable declarations
// Multiple variables may be declared in one line
// Though it is quicker to do without having to retype the 'let' keyword, it is still best practice to use multiple "let"/"const" keywords when declaring variables
// Using multiple keywords makes code easier to read and determine what kind of variable has been created

// let productCode = 'DC017', productBrand = 'Dell';
let productCode = 'DC017';
const productBrand = 'Dell';
console.log(productCode, productBrand);

// const let = "hello";
// console.log(let);

/*
Guides in writing variables:
1. Use the "let" keyword followed by the variable name of your choosing and use the assignment operator (=) to assign a value.
2. Variable names should start with a lowercase character, use camelCase for multiple words.
3. For constant variables, use the 'const' keyword.
4. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.

Best practices in naming variables:
1. When naming variables, it is important to create variables that are descriptive and indicative of the data it contains.

	let firstName = "Michael"; - good variable name
	let pokemon = 25000; - bad variable name

2. When naming variables, it is better to start with a lowercase letter. We usually avoid variable names that starts with capital letters. Because there are several keywords in JS that start in capital letter.

	let FirstName = "Michael"; - bad variable name
	let firstName = "Michael"; - good variable name

3. Do not add spaces to your variable name. Use camelCase for multiple words or underscores.

	let first name = "Mike"; - bad variable name

camelCase is when we have first word in small caps and the next word added without space but is capitalized:

	lastName emailAddress mobileNumber

Underscores sample:

	let product_description = "lorem ipsum";
	let product_id = "250000ea1000"
*/

// [SECTION] Data Types

// Strings
// Strings are a series of characters that create a word, a phrase, a sentence or anything related to creating text
// Strings in JavaScript can be written using either a single ('') or double ("") quote
// In other programming languages, only the double quotes can be used for creating strings
let country = 'Philippines';
let province = "Metro Manila";

// Concatenating strings
// Multiple string values can be combined to create a single string using the "+" symbol
let fullAddress = province + ', ' + country;
console.log(fullAddress);

let greeting = 'I live in the ' + country;
console.log(greeting);

// "\n" refers to creating a new line in between text
let mailAddress = 'Metro Manila\n\nPhilippines';
console.log(mailAddress);

// Using the double quotes along with the single quotes can allow us to easily include single quotes in texts without using the escape (\) character
let message = "John's employees went home early";
console.log(message);
message = "John\"s employees went home early";
console.log(message);

// Numbers
// Integers/Whole Numbers
let headcount = 26;
console.log(headcount);

// Decimal Numbers
let grade = 98.7;
console.log(grade);

// Exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);

// Combining number and strings
console.log("John's grade last quarter is " + grade);

// Boolean
// Boolean values are normally used to store values relating to the state of certain things
// This will be useful in further discussions about creating logic to make our application respond to certain scenarios
let isMarried = false;
let inGoodConduct = true;
console.log("isMarried: " + isMarried);
console.log("inGoodConduct: " + inGoodConduct);

// Arrays
// Arrays are a special kind of data type that's used to store multiple values
// Arrays can store different data types but is normally used to store similar data types

// Similar data types
// Syntax
	// let/const arrayName = [elementA, elementB, elementC, ...]

let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);

// Different data tpyes
// storing different data types inside an array is not recemmonded it will not make sense in the context of programming
let details = ["John", "Smith", 32, true];
console.log(details);

// Objects
// Objects are another special kind of data type that's used to mimic real world objects/items
// They're used to create complex data that contains pieces of information that are relevant to each other
// Every individual piece of information is called property of object
// Syntax
	/*
		let/const objectName = {
			propertyA: value,
			propertyB: value,
		}
	*/
let person = {
	fullName: 'Juan Dela Cruz',
	age: 35,
	isMarried: false,
	contact: ["+63917 123 4567", "8123 4567"],
	address: {
		houseNumber: '345',
		city: 'Manila'
	}
}

console.log(person);

// They're also useful for creating abstract objects
let myGrades = {
	firstGrading: 98.7,
	secondGrading: 92.1,
	thirdGrading: 90.2,
	fourtGrading: 94.6
}

console.log(myGrades);

// typeof operator is used to determine the type of data or the value of a variable. It outputs a string.
console.log(typeof myGrades);
console.log(typeof details);

// Null
// It is used to intentionally express the absence of a value in a variable declartion/initialization
// null simply means that a data type was assigned to a variable but it does not hold any value/amount or is nullified
let spouse = null;
console.log(spouse);
// Using null compared to a 0 value and an empty string is much better for readability purposes.
// null is also considered as a data type of it's own compared to 0 which is a data type of a number and single quotes which are a data type ofa string.
let myNumber = 0;
let myString = '';
console.log(myNumber);
console.log(myString);

// Undefined
// Represents the state of a variable that has been declared but without an assigned value.
let fullName;
console.log(fullName);

// Undefined vs Null
// One clear difference between undefined and null is that for undefined, a variable was created but was not provided a value
// Null means that a variable was created and assigned a value that does not hold any value/amount
// Certain processes in programming would often return a "null" value when certain tasks results to nothing

// For undefined, this is normally caused by a developers creating variables that have no value/data associated with them
// This is when the value of a variable is still unknow