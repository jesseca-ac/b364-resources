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



*/

// Single statement execution
let ternaryResult = (1 > 18) ? true : false;
console.log("Result of Ternary Operator: " + ternaryResult);