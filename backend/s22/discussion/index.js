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

		// Declared functions are not executed immediately. "They are saved for later use", and will be executed later when they are invoked. 

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

// Fuction expression sample 1 (with anonymous function)
let variableFunction = function() {

	console.log("Hello Again!")

}

variableFunction();

// Function expression sample 2	(with a function name)
let funcExpression = function funcName() {

	console.log("Hello From The Other Side")
}

funcExpression();


// You can reassign declared function and function expressions to new anonymous functions.

// 1. Reassignment of a declared function
declaredFunction = function(){
	console.log("updated declaredFunction")
}

declaredFunction();

// 2. Reassignment of a function expression
funcExpression = function (){
	console.log("updated funcExpression");
}

funcExpression();

// 3. Reassignment of function expressions with const values
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


// function-scoped variable
function showNames() {
	var functionVar = "Joe";
	const functionConst = "John";
	let functionLet = "Jane";

	console.log(functionVar);
	console.log(functionConst);
	console.log(functionLet);
}

// showNames();
// console.log(functionVar);
// console.log(functionConst);
// console.log(functionLet);

// The variables, functionVar, functionConst, and functionLet, are function scoped and cannot be accessed outside of the function they were declared in.


// Nested Functions

	// You can create another function inside a function. This is a called a nested function. 

function myNewFunction(){
	let name ="Jane";

	function nestedFunction(){
		let nestedName = "John"
		console.log(name);
	}

	nestedFunction();
	// console.log(nestedName);
	// nestedName variable, being decalred in the nestedFunction cannot be accessed outside of the function it was declared in.
}

myNewFunction();
// nestedFunction();

// Moreover, since this function is declared inside myNewFunction, it too cannot be invoked outside of the function it was declared in.


// Function and Global Scoped Variables

// Global Scoped Variable
let globalName = "Alexandro";

function myNewFunction2(){
	let nameInside = "Renz"
	// Variables declared Globally (outside any function) have global scope.
	// Global variables can be accessed from anywhere in a JavaScript program including from inside a function.
	console.log(globalName);
}

myNewFunction2();

// console.log(nameInside);


// [SECTION] Using alert()

	// alert() allows us to show a small window at the top of our browser page to show information to our users.

	// alert("Hello World!");
	// This will run immediately when the page loads.

	function showSampleAlert(){
		alert("Hello, User!")
	}

	showSampleAlert();

	console.log("I will only log in the console when the alert is dismissed.")

	// Notes on the use of alert ()
		// Show only an alert() for shor dialogs/messsages to the user
		// Do not overuse alert() because the program/js has to wait for it to be dismmissed before continuing.

// [SECTION] Using prompt ()
	
	//prompt() allows us to show a small window at the of the browser to gather user input. IT, much like alert(), will have the page wait until the user completes or enters their input. The input from the prompt() will be returned as a string once the user dismisses the window.

	// let samplePrompt = prompt("Enter your Name.");

	// console.log("Hello, " + samplePrompt);

/*
	Syntax: 

		prompt("<dialogInString>");
*/ 

	// let sampleNullPrompt = prompt("Don't enter anything.")

	// console.log(sampleNullPrompt);


function printWelcomeMessage(){
	let firstName = prompt("Enter Your First Name");
	let lastName = prompt("Enter Your Last Name")

	console.log("Hello, " + firstName + " " + lastName + "!");
	console.log("Welcome to my page!");
}

printWelcomeMessage();

// [SECTION] Function Naming Conventions

	// Functions should be definitive of the task it will perform. It usually contains a verb. 

	function getCourses() {
		let courses = ["Science 101", "Math 101", "English 101"];

		console.log(courses);
	};

	getCourses()

// What function names we should avoid (Generic)
	function get(){
		let name = "Jamie"
		console.log(name);
	}

	get();

//  Avoid pointless and inappropriate function names. 

	function foo(){
		console.log(25%5)
	}

	foo();

// Name your functions in small caps. Follow camelCase when naming variables and functions

	function displayCarInfo() {
		console.log("Brand: Toyota")
		console.log("Type: Sedan")
		console.log("Price: 1,500,000")
	}

	displayCarInfo();