console.log("Hello B364!");

// Return Statement vs console.log

// Differences between return and console.log

/*
1. Purpose
		Return - It is used to send a value back from a function to the calling code, allowing the result to be stored in a variable or used in further computations.

		Console Log - Used for debugging and printing information to the console during development, but it doesn't pass a value back to the calling code.

2. Usage 
		Return - Typically used within functions to convey a specific result or outcome.

		Console Log - Primarily employed for temporary debugging or logging purposes, helping devs understand the flow and values in their code.

3. Effect on Program Flow

		Return - Influences the program flow by providing a value that can be processed or utilized by the calling code.

		Console log - Primarily a tool for developers, and it doesn't alter a program flow and is often removed or commented out in production code.
*/

/*Sample 1 for return statement*/
function getGreeting() {
	return "Hello, World!";
}

let greeting = getGreeting();
console.log(greeting);

// Sample 2 for return statement
function addNumbers() {
	var num1 = 5;
	var num2 = 3;
	var result = num1 + num2;
	return result
}

var sumResult = addNumbers();

console.log("The sum is: " + sumResult);

// [SECTION] Function Arguments

// Prompt sample
// function printInput() {
// 	let nickname = prompt("Enter your nickname:");
// 	console.log("Hi, " + nickname);
// }

// printInput();

// Prompt may not be ideal for other cases, since functions can also process data directly passed into it instead of relying only global variables and prompt().

// Parameter acts as a named variable/container that exists only inside of the function

// Parameter is used to store information that is provided to a function when it is called/invoked. 
function printName(name) {
	console.log("My name is " + name);
};

// ARGUMENTS

/* "Juana" the information/data provided directly into the function, is called an argument. 

- Values passed when invoking a function are called "arguments" These arguments are then stored as the parameters within the function.
*/
printName("Juana");
// printName("John");

// In the following examples "Juana" and "John" are both arguments since both of them are supplied as information that will be used to print out the full message.

// When the "printName()" function is first called, it stores the value of "Juana" in the parameter "name" then uses it to print a message.

// When the "printName()" is called again, it stores the value "John" in the parameter "name" then uses it to print a message.

// Variables can also be passed as an argument

let sampleVariable = "Yui"
printName(sampleVariable);

// Function arguments cannot be used by a function if there are no parameters provided in the function.

function checkDivisibilityBy8(num){
	let remainder = num % 8;
	console.log("The remainder of " + num + " divided by 8 is " + remainder);
	let isDivisibleBy8 = remainder === 0;
	console.log("Is " + num + " divisible by 8?");
	console.log(isDivisibleBy8);
}

checkDivisibilityBy8(64);
checkDivisibilityBy8(28);

// 0 = remainder

// Function as Arguments

/*
	- Function parameters can also accept other functions as arguments
	- Some complex functions use other functions as arguments to perform more complicated results.
	- This will be further discussed during our sessions for array methods.

*/
function argumentFunction(){
	console.log("This function was passed as an argument before the message was printed.")
}

function invokeFunction(argumentFunction){
	argumentFunction();
}

invokeFunction(argumentFunction);

console.log(argumentFunction);


// Multiple Parameters

function createFullName(firstName, middleName, lastName) {
	console.log(firstName + ' ' + middleName + ' ' + lastName);
}

createFullName('Juan', 'Dela', 'Cruz', 'Hello');
createFullName('Juan', 'Dela');

// Providing more/less arguments that the expected parameters will not return an error.

// It would just be automatically as an undefined value to the parameter.

// In other programming languages, this will return an error stating that "the expected number of arguments do not match the number of parameters"

// Using variables as arguments
let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";

createFullName(firstName, middleName, lastName);

// Parameter names are just names to refer to the argument. Even if we change the name of the parameters the arguments will be received in the same order it was passed.

// The order of the argument is the same to the order of parameters.

