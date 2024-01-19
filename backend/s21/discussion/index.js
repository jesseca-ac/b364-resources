// console.log("Hello World!");

// [SECTION] Arithmetic Operators

let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of multiplication operator: " + product);

let quotient = x / y;
console.log("Result of division operator: " + quotient);

let remainder = x % y;
console.log("Result of modulo operator: " + remainder);

// [SECTION] Assignment Operators

// Basic Assignment Operator (=)
// The assignment operator assigns the value of the right operand to a variable.
let assignmentNumber = 8;
// console.log(assignmentNumber);

// Addition Assignment Operator (+=)
// The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable
assignmentNumber = assignmentNumber + 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Shorthand for assignmentNumber = assignmentNumber + 2;
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Subtraction/Multiplication/Division Assignment Operator (-=, *=, /=)
assignmentNumber -= 2;
console.log("Result of subtraction assignment operator: " + assignmentNumber);

assignmentNumber *= 2;
console.log("Result of multiplication assignment operator: " + assignmentNumber);

assignmentNumber /= 2;
console.log("Result of division assignment operator: " + assignmentNumber);

// Multiple Operators and Parentheses
/*
 - When multiple operators are applied in a single statement, it follows the PEMDAS (Parenthesis, Exponents, Multiplication, Division, Addition and Subtraction) rule
 - The operations were done done in the following order:
 	1. 3 * 4 = 12
 	2. 12 / 5 = 2.4
 	3. 1 + 2 = 3
 	4. 3 - 2.4 = 0.6
*/
let mdas = 1 + 2 - 3 * 4 / 5;
console.log("Result of mdas operation: " + mdas);

// The order of operations can be changed by adding parentheses to the logic
/*
 - By adding parentheses "()", the order of operations are changed prioritizing operations inside the parentheses first the following the MDAS rule for remaining operations.
 - The operations were done in the following order:
 	1. 4 / 5 = 0.8
 	2. 2 - 3 = -1
 	3. -1 * 0.8 = -0.8
 	4. 1 + -0.8 = 0.2
*/
let pemdas = 1 + (2 - 3) * (4 / 5);
console.log("Result of pemdas oepration: " + pemdas);
/*
	1. 4 / 5 = 0.8
	2. 2 - 3 = -1
	3. 1 + -1 = 0
	4. 0 * 0.8 = 0
*/
pemdas = (1 + (2 - 3)) * (4 / 5);
console.log("Result of pemdas operation: " + pemdas);

// Increment and Decrement
// Operators that add or subtract values by 1 and reassigns the value of the variable where the increment/decerment was applied to
let z = 1;

// The value of "z" is added by value of one before returning the value and storing it in the variable "increment"
// pre-increment: increments the value first and then returns the new value
let increment = ++z;
console.log("Result of pre-increment: " + increment);
// The value of "z" was also increased even though we didn't implicitly specify any value reassignment
console.log("Result of pre-increment: " + z);

// The value of "z" is returned and stored in the variable "increment" then the value of "z" is increased by one
increment = z++;
// The value of "z" is at 2 before it was incremented
console.log("Result of post-increment: " + increment);
// The value of "z" was increased again reassigning the value to 3.
console.log("Result of post-increment: " + z);

// The value of "z" is decreased by one before returning the value and storing it in the variable "increment"
let decrement = --z;
// The value of "z" is at 3 before it was decremented.
console.log("Result of pre-decrement: " + decrement);
// The value of "z" was decreased reassigning the value to 2.
console.log("Result of pre-decrement: " + z);

decrement = z--;
// The value of "z" is at 2 before it was decremented
console.log("Result of post-decrement: " + decrement);
// The value of "z" was decreased reassigning the value to 1
console.log("Result of post-decrement: " + z);

// [SECTION] Type Coercion
/*
	- Type coercion is the automatic or implicit conversion of values from one data type to another
	- This happens when operations are performed on different data types that would normally not be possible and yield irregular results
	- Values are automatically converted from one data type to another in order to resolve operations
*/
let numA = '10';
let numB = 12;

/*
	- Adding/Concatenating a string and a number will in a string
	- This can be proven in the console by looking at the color of the text displayed
	- White text means that the output returned is a string data type
*/
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let numC = 16;
let numD = 14;
/*
	- the result is a number
	- this can be proven in the console by looking at the color of the text displayed
	- blue text means that the output returned is a number data type
*/
let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

/*
	- the result is a number
	- the boolean "true" is also associated with the value of 1
*/
let numE = true + 1;
console.log(numE);

/*
	- the result is number
	- the boolean "false" is also associated with the value of 0
*/
let numF = false + 1;
console.log(numF);

// [SECTION] Comparison Operators

// Equality Opereator (==)
/*
	- Checks whether the operands are equal/have the same content
	- Attempts to CONVERT AND COMPARE operands of different data types
	- Returns a boolean value
*/

let juan = 'juan';

console.log(1 == 1);
console.log(1 == 2);
console.log(1 == '1');
console.log(0 == false);
// compares two strings that are the same
console.log('juan' == 'juan');
console.log('juan' == juan);

// Inequality Operator
/*
	- Checks whether the operands are equal/have the same content
	- Attempts to CONVERT AND COMPARE operands of different data types
*/

console.log(1 != 1);
console.log(1 != 2);
console.log(1 != '1');
console.log(0 != false);
console.log('juan' != 'juan');
console.log('juan' != juan);

// Strict Equality Operator
