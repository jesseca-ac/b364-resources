// [SECTION] Dependencies and Modules
// The "User" variable is defined using a capitalized letter to indicate that what we are using is the "User" model for code readability

const User = require("../models/User");
const bcrypt = require('bcrypt');
const auth = require("../auth");

/*[SECTION] Check if the email already exists
	Steps: 
		1. Use mongoose "find" method to find duplicate emails
		2. Use the "then" method to send a response back to the client application based on the result of the "find" method
*/

module.exports.checkEmailExists = (reqBody) => {
	// The result is sent back to the client via the "then" method found in the route file.
								
	return User.find({ email : reqBody.email })
	.then(result => {
		// The "find" method returns a record if a match is found
		if (result.length > 0) {

			return true;
		// No duplicate email found
		// The user is not yet registered in the database
		} else {

			return false;
		};
	})
	.catch(err => err)
};


// [SECTION] User registration
/*
	Steps: 
		1. Create a new User object using the mongoose model and the information from the request body
		2. Make sure that the password is encrypted
		3. Save the new User to the database
*/
module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		firstName : reqBody.firstName,
		lastName : reqBody.lastName,
		email : reqBody.email,
		mobileNo : reqBody.mobileNo,
		password : bcrypt.hashSync(reqBody.password, 10)
	})

	return newUser.save()
	.then((result) => result)
	.catch(err => err)
};

// [SECTION] User authentication
/*
	Steps:
	1. Check the database if the user email exists
	2. Compare the password provided in the login form with the password stored in the database
	3. Generate/return a JSON web token if the user is succesffuly logged in and return false if not
*/

module.exports.loginUser = (reqBody) => {
	// The "findOne" method returns the first record in the collection that matches the search criteria
	// We use the "findOne" method instead of the "find" method which returns all records that match the search criteria
	return User.findOne({ email : reqBody.email })
	.then(result => {

		// User does not exist
		if(result == null){
			return false;

		// User exists
		} else {

			// Creates the variable "isPasswordCorrect" to return the result of comparing the login form password and the database password
			// The "compareSync" method is used to compare a non encrypted password from the login form to the encrypted password retrieved from the database and returns "true" or "false" value depending on the result
			// A good coding practice for boolean variable/constants is to use the word "is" or "are" at the beginning in the form of is+Noun
				//example. isSingle, isDone, isAdmin, areDone, etc..
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

			if (isPasswordCorrect){

				// Generate an access token
				// Uses the "createAccessToken" method defined in the "auth.js" file
				// Returning an object back to the client application is common practice to ensure information is properly labeled and real world examples normally return more complex information represented by objects
				return { access : auth.createAccessToken(result) }

			// Passwords do not match
			} else {

				return false;
			}
		}
	})
	.catch(err => err)
};

//[SECTION] Retrieve user details
/*
	Steps:
	1. Retrieve the user document using it's id
	2. Change the password to an empty string to hide the password
	3. Return the updated user record
*/
module.exports.getProfile = (reqBody) => {

	return User.findById(reqBody.id)
	.then(result => {
		result.password = "";
		return result;
	})
	.catch(err => err)
};