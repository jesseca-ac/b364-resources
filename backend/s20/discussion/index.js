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
console.log(hello);

// Variables must be declared first before they are used
// Using variables before they're declared will return an error
// let hello;