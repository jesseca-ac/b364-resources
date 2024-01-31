// console.log("Hello World");


function numberLooper(number){
			
	//Create a message variable that will contain the messages after the loop has finished.
	let message;

	// Creates a loop that will use the number provided by the user and count down to 0
	for (let count = number; count >= 0; count--) {

		// If the value provided is less than or equal to 50, terminate the loop
		if (count <= 50) {

			message = "The current value is at " + count + ". Terminating the loop.";
			console.log(message);

			break;

		// If the value is divisible by 10, skip printing the number
		} else if (count % 10 === 0) {

			console.log("The number is divisible by 10. Skipping the number.");
			continue;

		// If the value is divisible by 5, print the number
		} else if (count % 5 === 0) { 

			console.log(count);

		}

	}

	return message;

}



let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';

// Creates a loop that will iterate through the whole string
for (let i=0; i < string.length; i++) {

	// Check what is the starting value of the loop
	// console.log(string[i]);
	
	// If the current letter being evaluated is a vowel
	if (
		string[i].toLowerCase() == 'a' ||
		string[i].toLowerCase() == 'e' ||
		string[i].toLowerCase() == 'i' ||
		string[i].toLowerCase() == 'o' ||
		string[i].toLowerCase() == 'u'
	) {

		// Continue the loop to the next letter/character in the sequence
		continue;

	// If the current letter being evaluated is not a vowel
	} else {

		// Add the letter to a different variable
		filteredString += string[i];

	}

}

// After the loop is complete, print the filtered string without the vowels
console.log(filteredString);


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        filteredString: typeof filteredString !== 'undefined' ? filteredString : null,
        numberLooper: typeof numberLooper !== 'undefined' ? numberLooper : null
    }
} catch(err){

}