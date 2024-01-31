// console.log("Hello World");

/*
	1. Create the following variables to store to the following user details:
	Variable Name - Value Data Type:
	-firstName - String
	-lastName - String
	-age - Number
	-hobbies - Array
	-workAddress - Object

		-The hobbies array should contain at least 3 hobbies as Strings.
		-The work address object should contain the following key-value pairs:

			houseNumber: <value>
			street: <value>
			city: <value>
			state: <value>

	Log the values of each variable to follow/mimic the output.
*/

	//Add your variables and console.log for objective 1 here:

	let firstName = 'John';
	console.log("First Name: " + firstName);

	let lastName = 'Smith';
	console.log("Last Name: " + lastName);

	let age = 30;
	console.log("Age: " + age);

	let hobbies = ["Biking", "Mountain Climbing", "Swimming"];
	console.log("Hobbies:");
	console.log(hobbies);

	let workAddress = {
		houseNumber: "32",
		street: "Washington",
		city: "Lincoln",
		state: "Nebraska"
	}
	console.log("Work Address:");
	console.log(workAddress);

/*			
	2. Debugging Practice - Identify and implement the best practices of creating and using variables 
	   by avoiding errors and debugging the following codes:
			
		Note:
		Log the values of each variable to follow/mimic the output.
*/	

	let fullName = "Steve Rogers";
	console.log("My full name is: " + fullName);

	let currentAge = 40;
	console.log("My current age is: " + currentAge);
	
	let friends = ["Tony","Bruce","Thor","Natasha","Clint","Nick"];
	console.log("My Friends are: ")
	console.log(friends);

	let profile = {

		username: "captain_america",
		fullName: "Steve Rogers",
		age: 40,
		isActive: false,

	}
	console.log("My Full Profile: ")
	console.log(profile);

	let fullName2 = "Bucky Barnes";
	console.log("My bestfriend is: " + fullName2);

	const lastLocation = "Arctic Ocean";
	//lastLocation = "Atlantic Ocean";
	console.log("I was found frozen in: " + lastLocation);

	//Do not modify
	//For exporting to test.js
	try{
		module.exports = {
			firstName, lastName, age, hobbies, workAddress,
			fullName, currentAge, friends, profile, fullName2, lastLocation
		}
	} catch(err){
	}