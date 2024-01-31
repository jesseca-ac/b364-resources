console.log("Hello B364");
// [SECTION] While Loop
/*
	- A while loop takes in an expression/condition
	- Expressions are any unit of code that can be evaluated to a value
	- If the condition evaluates to true, the statements inside the code block will be exceuted
	- A statement is a command that the programmer gives to the computer
	- Syntax
		while(expression/condition) {
				statement
		}


*/
let count = 5;

while(count !== 0) {
	console.log ("While:" + count);

	count--;
}

// [Section] Do While Loop
/*
    - A do-while loop works a lot like the while loop. But unlike while loops, do-while loops guarantee that the code will be executed at least once.
    - Syntax
        do {
            statement
        } while (expression/condition)
*/

/*
    - The "Number" function works similarly to the "parseInt" function
    - Both differ significantly in terms of the processes they undertake in converting information into a number data type and other features that help with manipulating data
    - The "prompt" function creates a pop-up message in the browser that can be used to gather user input
    - How the Do While Loop works:
        1. The statements in the "do" block executes once
        2. The message "Do While: " + number will be printed out in the console
        3. After executing once, the while statement will evaluate whether to run the next iteration of the loop based on given expression/condition (e.g. number less than 10)
        4. If the expression/condition is not true, another iteration of the loop will be executed and will be repeated until the condition is met
        5. If the expression/condition is true, the loop will stop
*/


// let number = Number(prompt("Give me a number"));

// do {
// 	console.log("Do While: " + number);

// 	// number = number + 1
// 	number +=1;

// } while (number < 10);

// [Section] For Loop
/*
    - A for loop is more flexible than while and do-while loops. It consists of three parts:
        1. The "initialization" value that will track the progression of the loop.
        2.  The "expression/condition" that will be evaluated which will determine whether the loop will run one more time.
        3. The "finalExpression" indicates how to advance the loop.
    - Syntax
        for (initialization; expression/condition; finalExpression) {
            statement
        }
*/

/*
    - Will create a loop that will start from 0 and end at 20
    - Every iteration of the loop, the value of count will be checked if it is equal or less than 20
    - If the value of count is less than or equal to 20 the statement inside of the loop will execute
    - The value of count will be incremented by one for each iteration
*/

for (let count = 0; count <= 20; count++) {
	console.log(count);
}

let myString = "alex";

// Characters in strings may be counted using the .length property
// Strings are special compared to other data types in that it has access to functions and other pieces of information another primitive data type might not have
console.log(myString.length);

// Accessing elements of a string
// Individual characters of a string may be accessed using it's index number
// The first character in a string corresponds to the number 0, the next is 1 up to the nth number
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);

// Will create a loop that will print out the individual letters of the myString variable	
for(let x = 0; x < myString.length; x++){
	console.log(myString[x])
}
		   // 0123
let myName = "AlEx";

/*
    - Creates a loop that will print out the letters of the name individually and print out the number 3 instead when the letter to be printed out is a vowel
    - How this For Loop works:
        1. The loop will start at 0 for the the value of "i"
        2. It will check if "i" is less than the length of myName (e.g. 0)
        3. The if statement will check if the value of myName[i] converted to a lowercase letter is equivalent to any of the vowels (e.g. myName[0] = a, myName[0] = e, myName[0] = i, myName[0] = o, myName[0] = u)
        4. If the expression/condition is true the console will print the number 3.
        5. If the letter is not a vowel the console will print the letter
        6. The value of "i" will be incremented by 1 (e.g. i = 1)
        7. Then the loop will repeat steps 2 to 6 until the expression/condition of the loop is false
*/
for (let i=0; i < myName.length; i++){
	console.log(myName[i].toLowerCase());
	
	// If the character of your name is a vowel letter, instead of displaying the character, display number "3"
	// The ".toLowerCase()" function/method will change the current letter being evaluated in a loop to a lowercase letter ensuring that the letters provided in the expressions below will match

	if (
		myName[i].toLowerCase() == "a" ||
	 	myName[i].toLowerCase() == "i" ||
	 	myName[i].toLowerCase() == "u" ||
	 	myName[i].toLowerCase() == "e" ||
	 	myName[i].toLowerCase() == "o" 
	){	
		// If the letter in the name is a vowel, it will print the number 3
		console.log(3);
	 } else {
	 	// Print in the console all non-vowel characters in the name
	 	console.log(myName[i])
	 } 
   }

// [SECTION] Continue and Break Statements

  // [Section] Continue and Break statements
  /*
      - The "continue" statement allows the code to go to the next iteration of the loop without finishing the execution of all statements in a code block
      - The "break" statement is used to terminate the current loop once a match has been found
  */
   			 		     
   /*
       - Creates a loop that if the count value is divided by 2 and the remainder is 0, it will print the number and continue to the next iteration of the loop
       - How this For Loop works:
           1. The loop will start at 0 for the the value of "count".
           2. It will check if "count" is less than the or equal to 20.
           3. The "if" statement will check if the remainder of the value of "count" divided by 2 is equal to 0 (e.g 0/2).
           4. If the expression/condition of the "if" statement is "true" the loop will continue to the next iteration.
           5. If the value of count is not equal to 0, the console will print the value of "count".
           6. The second if statement will check if the value of "count" is greater than 10. (e.g. 0)
           7. If the expression/condition of the second "if" statement is false the loop will proceed to the next iteration.
           8. The value of "count" will be incremented by 1 (e.g. count = 1)
           9. Then the loop will repeat steps 2 to 8 until the expression/condition of the loop is "false" or the condition of the second "if" statement (e.g. name[0] > 10) is true, the loop will stop due to the "break" statement
   */

   for (let count = 0; count <= 20; count++){
   	if (count % 2 === 0) {
   		// Tells the code to continue to the next iteration of the loop
   		// This ignores all steaments located after the continute statement;
   		continue;
	}

   	// The current value of number is printed out if the remainder is not equal to 0
   	console.log("Continute and Break: " + count);

   	// If the current value of the count is greater than 10
   	if (count > 10){

   		// Tells the code to terminate/stop the loop even if the expression/condition of the loop defines that it should execute so long as the value of count is less than or equal to 20
   		// number values after 10 will no longer be printed
   		break;
   	}
   }

let name = "alexandro";


/*
    - Creates a loop that will iterate based on the length of the string
    - How this For Loop works:
        1. The loop will start at 0 for the the value of "i"
        2. It will check if "i" is less than the length of name (e.g. 0)
        3. The if statement will check if the value of name[i] converted to a lowercase letter a (e.g. name[0] = a)
        4. If the expression/condition of the if statement is true the loop will continue to the next iteration.
        5. If the value of name[i] is not equal to a, the second if statement will be evaluated
        6. The second if statement will check if the value of name[i] converted to a lowercase letter d (e.g. name[0] = d)
        7. If the expression/condition of the second "if" statement is false the loop will proceed to the next iteration.
        8. The value of "i" will be incremented by 1 (e.g. i = 1)
        9. Then the loop will repeat steps 2 to 8 until the expression/condition of the loop is "false" or the condition of the second "if" statement (e.g. name[0] = d) is true, the loop will stop due to the "break" statement
*/
for (let i = 0; i < name.length; i++){

	// The current letter is printed out based on it's index
	console.log(name[i]);
	// If the vowel is equal to a, continue to the next iteration of the loop
	if (name[i].toLowerCase() === "a") {
		console.log("Continue to the next iteration");
		continue;
	}

	// If the current letter is equal to d, stop the loop
	if (name[i] == "d"){
		break;
	}
}


