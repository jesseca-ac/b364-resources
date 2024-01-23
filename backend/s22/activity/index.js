/*
	1. Create a function named getUserInfo which is able to return an object. 

		The object returned should have the following properties:
		
		- key - data type

		- name - String
		- age -  Number
		- address - String
		- isMarried - Boolean
		- petName - String

		Note: Property names given is required and should not be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.

*/
function getUserInfo() {
	return {
		name: "John Doe",
		age: 25,
		address: "123 Street, Quezon City",
		isMarried: false,
		petName: "dannys"
	}
}

let userInfo = getUserInfo();
console.log(userInfo);
// getUserInfo();


/*
	2. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
		
		- Note: the array returned should have at least 5 elements as strings.
			    function name given is required and cannot be changed.


		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
	
*/

function getArtistsArray() {
	return ["Ben & Ben", "Arthur Nery", "Linkin Park", "Paramore", "Taylor Swift"];
}

let bandsArray = getArtistsArray();
console.log(bandsArray);


/*
	3. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/
function getSongsArray() {
	return ["Kathang Isip", "Binhi", "In the End", "Brick by Boring Brick", "Love Story"]
	console.log("Hi mag rereturn sha")
}

let songsArray = getSongsArray();
console.log(songsArray);

/*
	4. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		Note: This is optional.
*/




/*
	5. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

			- Note: the array returned should have numbers only.
			        function name given is required and cannot be changed.

			To check, create a variable to save the value returned by the function.
			Then log the variable in the console.

			Note: This is optional.
			
*/




//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		getUserInfo: typeof getUserInfo !== 'undefined' ? getUserInfo : null,
		getArtistsArray: typeof getArtistsArray !== 'undefined' ? getArtistsArray : null,
		getSongsArray: typeof getSongsArray !== 'undefined' ? getSongsArray : null,
		getMoviesArray: typeof getMoviesArray !== 'undefined' ? getMoviesArray : null,
		getPrimeNumberArray: typeof getPrimeNumberArray !== 'undefined' ? getPrimeNumberArray : null,

	}
} catch(err){


}