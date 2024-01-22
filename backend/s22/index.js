console.log("Hello B364!");

// [SECTION] Functions
// Functions in javascript are lines/blocks of codes that tell our device/application to perform a certain task when called/invoked


// Function Declaration
	// (function statement) defines a function with the specified parameters.
/* Syntax: 
	function functionName(){
		code block (statement)
	}*/

// function keyword - used to defined a javascript function
// functionName - the function name, are the names of those functions declared for it to be able to use later in our programs or code
// function block ({}) - the statements which comprise the body of the function. This is where the code to be executed.

// printName();

function printName() {
	console.log("My name is  John");
};

printName();

// Function Invocation
	// The code block and statements in side a function is not immediately executed when the function is defined. The code block and statements inside a function is executed when the function is invoked or called.

	// declaredFunction(); - results in ann error, much like vaariables, we ccannot invoke a function we have yet to define
printName();
printName();
printName();

// SECTION Function declarations vs expressions

	// Function Declarations
		// A function can be created through function declaration by usingg the function  keyword and adding a function.

		// Declared functionsn are not executed immediately. "They are saved for later use", and will be executed later when they are invoked. 

		// declaredFunction(); // declared function can be hoiseted. as long as the function has been defined.

		// Note: Hoisting is javascript's behavior for certain variables and function to run or use them before their declaration.

function declaredFunction() {
	console.log("Hello World from declaredFunction()")
}

declaredFunction();

// printName();

// Function Expression
	// A function expression can also be stored in a variable. This is called a function expression.

	// A function expression an anonymous function assigned to a variableFunction

let variableFunction = function() {

	console.log("Hello Again!")

}

variableFunction();


let funcExpression = function funcName() {

	console.log("Hello From The Other Side")
}

funcExpression();


// You can reassign declared function and function expressions to new anonymous functions.

declaredFunction = function(){
	console.log("updated declaredFunction")
}

declaredFunction();

funcExpression = function (){
	console.log("updated funcExpression");
}

funcExpression();

// Reassigning values with const
const constantFunc = function(){
	console.log("Initialized with const!")
}

constantFunc();


// Function Expressions declared with the const keyword, couldn't be re-assigned.
// constantFunc = function(){
// 	console.log("Cannot be re-assigned!")
// }

// constantFunc();

// [SECTION] Function Scoping
/*
	Scope - is the accesibility (visibility) of variables

	JavaScript Variables has 3 types of scope:
	1. local/block scope
	2. global scope
	3. function scope
		JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are notn accesible(visible) from outisde the function.
*/

// local variable
{
	let localVar = "Armando Perez";
}

// global variable
let globalVar = "Mr.Worldwide"

console.log(globalVar);
// console.log(localVar);

function showNames() {
	var functionVar = "Joe";
	const functionConst = "John";
	let functionLet = "Jane";

	console.log(functionVar);
	console.log(functionConst);
	console.log(functionLet);
}

showNames();
console.log(functionVar);
console.log(functionConst);
console.log(functionLet);
