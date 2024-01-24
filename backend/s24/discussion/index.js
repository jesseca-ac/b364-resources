console.log("Hello B364!");

// [SECTION] if, else if and else statement

let numG = -1;

// if Statement
// Executes a statement if a specified condition is true.
if(numG < 0) {
	console.log("Hello");
}

if(numG > 0) {
	console.log("Hello");
}

let numH = 1;

// Else if clause
/*
	- Executes a statement if previous conditions are falseand if the specified condition is true

	- The "else if" clause is optional and can be added to capture additional conditions to change the flow of a program

*/
if(numG > 0) {
	console.log('Hello');
} else if (numH > 0) {
	console.log('World');
}

// Else statement
/*
	- Executes a statement if all other conditions are false
	- The "else" statement is optional and can be added to capture any other resul to change the flow of a program
*/

if(numG > 0) {
	console.log('Hello');
} else if (numH = 0) {
	console.log('World');
} else {
	console.log('Again');
}


let message = 'No message.';
console.log(message);

function determineTyphoonIntensity(windSpeed) {
	if (windSpeed <= 30) {
		return 'Not a typhoon yet.';
	}
	else if (windSpeed <= 61) {
		return 'Tropical depression detected.';
	}
	else if (windSpeed >= 62 && windSpeed <= 88) {
		return	'Tropical storm detected.'
	}
	else if (windSpeed >= 89 || windSpeed <= 117) {
		return 'Severe tropical storm detected.';
	}
	else {
		return 'Typhoon detected.'
	}
}

message = determineTyphoonIntensity(80);
console.log(message);

if (message == 'Tropical storm detected.') {
	console.warn(message);
}
 
// equality operator coercion - it would compare the values of x and y after performing type coercion so even though 'x' is a number and 'y' is a string, they are considered equal because javascript converts it into a string before making a comparison.

// [SECTION] Truthy and Falsy
/*
	- In Javascript a "truthy" value is a value that is considered true when encountered in a boolean context.
	- Values are considered true unless defined otherwise
	Falsy values/exceptions for truthy:
		1. false
		2. 0 
		3. -0
		4. ""
		5. null
		6. undefined
		7.NaN
*/

// Truty Examples
/*
	- If the result of an expression in a condition to at truth value, the condition returns true and the corresponding statements are executed
	- Exprssions are any unit of code that can be evaluated to a value.
*/
// Truthy Examples
if (true) {
	console.log('Truthy');
}

if (1) {
	console.log('Truthy');
}

if ([]) {
	console.log('Truthy');
}

// Falsy Examples
if (false) {
	console.log('Falsy');
}

if (0) {
	console.log('Falsy');
}

if (undefined) {
	console.log('Falsy');
}

// [SECTION] Conditional (Ternary) Operator
// -Syntax 
		// (expression) ? true : false;
/*
	- Ternary operators have an implicit "return" statement meaning that without the "return" keyword, the resulting expressions can be stored in a variable.

	- It is commonly used for single statement execution where the result consists of only one line of code.

	- for multiple lines, a function may be defined then used in a ternary operator.


*/

// Single statement execution
let ternaryResult = (1 > 18) ? true : false;
console.log("Result of Ternary Operator: " + ternaryResult);

// let age = 20;

// let response = (age < 18) ? "You are an adult" : "You are a minor";

// console.log(response);


// Multiple statement Execution

let name; 

function isOfLegalAge() {
	name = 'John';
	return 'You are of the legal age limit';
}

function isUnderAge() {
	name = 'Jane';
	return 'You are under the age limit';
}

// let age = parseInt(prompt("What is your age?"));
// console.log(age);
// let legalAge = (age > 18) ? isOfLegalAge() : isUnderAge();
// console.log("Result of Ternary Operator in functions: " + legalAge + ', ' + name);

/* 
    - The "prompt" function creates a pop-up message in the browser that can be used to gather user input
    - Input received from the prompt function is returned as a string data type
    - The "parseInt" function converts the input received into a number data type
    - Pressing on the "cancel" button on a prompt will return a value of "null"
    - Converting null to an integer/number will result to a NaN (Not a Number) value
    - This can be useful for instances where a frontend application has not yet been created and can be used to test varying data
*/


// [SECTION] Switch Statement

/* 
    -The switch statement evaluates an expression and matches the expression's value to a case clause. The switch will then execute the statements associated with that case, as well as statements in cases that follow the matching case.
    - Can be used as an alternative to an if, "else if and else" statement where the data to be used in the condition is of an expected input
    - The ".toLowerCase()" function/method will change the input received from the prompt into all lowercase letters ensuring a match with the switch case conditions if the user inputs capitalized or uppercased letters
    - The "expression" is the information used to match the "value" provided in the switch cases
    - Variables are commonly used as expressions to allow varying user input to be used when comparing with switch case values
    - Switch cases are considered as "loops" meaning it will compare the "expression" with each of the case "values" until a match is found
    - The "break" statement is used to terminate the current loop once a match has been found
    - Removing the "break" statement will have the switch statement compare the expression with the values of succeeding cases even if a match was found
    - Syntax
        switch (expression) {
            case value:
                statement;
                break;
            default:
                statement;
                break;
        }
*/

let day = prompt("What day of the week is it today?").toLowerCase();
console.log(day);

switch (day) {
	case 'monday':
		console.log("The color of the day is red");
		break
	case 'tuesday':
		console.log("The color of the is orange");
		break;
	case 'wednesday':
		console.log("The color of the day is yellow");
		break;
	case 'thursday': 
		console.log("The color of the day is green");
		break
	case 'friday':
		console.log("The color of the day is blue");
		break;
	case 'saturday': 
		console.log("The color of the day is indigo");
		break;
	case 'sunday':
		console.log("The color of the day is violet");
		break;
	default:
		console.log("Please input a valid day");
		break;
}


// [SECTION] Try-Catch-Finally Statement
/*
    - "try catch" statements are commonly used for error handling
    - There are instances when the application returns an error/warning that is not necessarily an error in the context of our code
    - These errors are a result of an attempt of the programming language to help developers in creating efficient code
    - They are used to specify a response whenever an exception/error is received
    - It is also useful for debugging code because of the "error" object that can be "caught" when using the try catch statement
    - In most programming languages, an "error" object is used to provide detailed information about an error and which also provides access to functions that can be used to handle/resolve errors to create "exceptions" within our code
    - The "finally" block is used to specify a response/action that is used to handle/resolve errors
*/

function showIntensityAlert(windSpeed) {
	try {
		alerat(determineTyphoonIntensity(windSpeed));
	
	//error/err are commonly used variable names by developers for strong errors 
	} catch (error) {
		
		// The "typeof" operator is used to check the data type of a value/expression and returns a string value of what the data type is
		console.log (typeof error);
		// Catch errors within "try" statement
		// In this case the error is an unknown function 'alerat' which does not exist in Javascript

		// "error.meesage" is used to access the information relating to an error object. 
		console.warn(error.message)
	} finally {
		// Continue execution of code regardless of success and failure of code execution in the 'try' block to handle/resolve errors
		alert('Intensity updates will show new alert.')
	}
}

showIntensityAlert(56);