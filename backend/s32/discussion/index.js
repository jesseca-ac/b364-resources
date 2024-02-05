console.log("Hello B364!");

// [SECTION] JSON Objects
/*
	-JSON stands JavaScript Object Notation
	-JSON is also used in other programming languages hence the name JavaScript Object Notation
	- Core JavaScript has built in JSON object that contains methods for parsing JSON objects and converting strings into Javascript objects
	- Javascript objects are not to be confused with JSON
	-JSON is used for serializing different data tyoes into bytes
	-Serialization is the process of converting data into a series of bytes for easier transmission/transfer of information
	- A byte is a unit of data that is eight binary digits (1 and 0) that is used to represent a character.
	- Bytes are information that a computer processes to perform different taks.

	- Syntax
	{
		"propertyA": "valueA",
		"propertyB": "valueB",
	}
*/

// JSON Objects
// {
// 	"city": "Quezon City",
// 	"province": "Metro Manila",
// 	"country": "Philippines"
// }

// JSON Arrays

// "cities": [
// 	{"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
// 	{"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
// 	{"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"}
// ]

// [SECTION] JSON Methods
// - The JSON object contains methods for parsing and converting data into stringified JSON

// [SECTION] Converting Data Into Stringified JSON
/*
	- Stringified JSON is a Javascript object converted into a string to be used in other functions of a JavaScript application
	- They are commonly used in HTTP requests where information is required to be send and received in a stringified JSON format.
	-Requests are an important part of programming where an application communicates with a backend application to perform different tasks such as getting/creating a data in a database.
	- A frontend application is an application that is used to interact with the users to perform different visual tasks and display information. While backend, are used for all business logic and data processing.
	-Commonly stored data in databases are user information, transaction records and produc information.
	- A database normally stores information/data that can be used in most applications.
	- Node JS is a Java Runtime Environment (JRE) software that is made to execute other software
	- Express is a NodeJS framework that provides features for easily creating web and mobile applcations.
	-An example of where JSON is also used is on package.json files which an express JS application uses to keep track of information regarding a project.
*/

let batchesArr = [{ batchName: 'Batch X'}, {batchName: 'Batch Y'}];

console.log(batchesArr);
// The "stringify" method is used to convert JavaScript objects into a string.
console.log('Results from stringify method:');
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
	name: 'John',
	age: 31,
	address: {
		city: 'Manila',
		country: 'Philippines'
	}
})

console.log(data);

// [SECTION] Using Stringify Method with Variables
/*
	- When information is stored in a variable and is not hard coded into an object that is being stringified, we can supply the value with a variablr.
	- The "property" name and "value" would have the same name which can be confusing for beginners
	-This is done on purpose for code readability meaning when an information is stored in a variable and w hen the object created to be stringified is created, we supply the variablr name instead of a hard coded value.
	- Syntax
		JSON.stringify({
			propertyA: variableA,
			propertyB: variableB
		});
*/

// User Details
// let firstName = prompt('What is your first name?');
// let lastName = prompt('What is your last name?');
// let age = prompt('What is your age?');
// let address = {
// 	city: prompt('Which city do you live in?'),
// 	country: prompt('Which country does your city address belong to?')
// }

// let otherData = JSON.stringify({
// 	firstName: firstName,
// 	lastName: lastName,
// 	age: age, 
// 	address: address
// })

// console.log(otherData);

// [SECTION] Converting stringified JSON into JavaScript Objects
/*
	-Objects are common data  types used in applications because of the complex data structures that can be created out of them.
	- Information is commonly sent to applications in stringified JSON and then converted back into objects
	-This happens both for sending information to baxkend application and sending information to a frontend application.
*/
let batchesJSON = `[{ "batchName": "Batch X" }, { "batchName": "Batch Y" }]`;

console.log('Result from parse method:');
console.log(JSON.parse(batchesJSON));

let stringifiedObject = `{ "name": "John", "age": "31", "address": { "city": "Manila", "country": "Philippines" } }`

console.log(JSON.parse(stringifiedObject));