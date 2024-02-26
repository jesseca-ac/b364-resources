// [SECTION] Dependencies and Modules
// The "User" variable is defined using a capitalized letter to indicate that what we are using is the "User" model for code readability

const User = require("../models/User");
const Enrollment = require("../models/Enrollment")
const bcrypt = require('bcrypt');
const auth = require("../auth");

/*[SECTION] Check if the email already exists
	Steps: 
		1. Use mongoose "find" method to find duplicate emails
		2. Use the "then" method to send a response back to the client application based on the result of the "find" method
*/

module.exports.checkEmailExists = (req,res) => {
	// The result is sent back to the client via the "then" method found in the route file.
								
	return User.find({ email : req.body.email })
	.then(result => {
		// The "find" method returns a record if a match is found
		if (result.length > 0) {

			return res.send(true);
		// No duplicate email found
		// The user is not yet registered in the database
		} else {

			return res.send(false);
		};
	})
	.catch(err => res.send(err));
};


// [SECTION] User registration
/*
	Steps: 
		1. Create a new User object using the mongoose model and the information from the request body
		2. Make sure that the password is encrypted
		3. Save the new User to the database
*/
module.exports.registerUser = (req,res) => {
	let newUser = new User({
		firstName : req.body.firstName,
		lastName : req.body.lastName,
		email : req.body.email,
		mobileNo : req.body.mobileNo,
		password : bcrypt.hashSync(req.body.password, 10)
	})

	return newUser.save()
	.then((result) => res.status(201).send(result))
	.catch(err => res.status(500).send(err));
};
/*
	IMPORTANT NOTE: 
		-201 is used instead of 200 since a new record is created in the database in registering a new account.
		-200 would be valid as well, but for more clarity, 201 is used to highlight a new document creation.
		-500 http status refers to an internal server error which means that the request is valid, but an error occured in sending the response.
*/

// [SECTION] User authentication
/*
	Steps:
	1. Check the database if the user email exists
	2. Compare the password provided in the login form with the password stored in the database
	3. Generate/return a JSON web token if the user is succesffuly logged in and return false if not
*/

module.exports.loginUser = (req, res) => {
	// The "findOne" method returns the first record in the collection that matches the search criteria
	// We use the "findOne" method instead of the "find" method which returns all records that match the search criteria
	return User.findOne({ email : req.body.email })
	.then(result => {

		// User does not exist
		if(result == null){
			return res.status(404).send(false);

		// User exists
		} else {

			// Creates the variable "isPasswordCorrect" to return the result of comparing the login form password and the database password
			// The "compareSync" method is used to compare a non encrypted password from the login form to the encrypted password retrieved from the database and returns "true" or "false" value depending on the result
			// A good coding practice for boolean variable/constants is to use the word "is" or "are" at the beginning in the form of is+Noun
				//example. isSingle, isDone, isAdmin, areDone, etc..
			const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);

			if (isPasswordCorrect){

				// Generate an access token
				// Uses the "createAccessToken" method defined in the "auth.js" file
				// Returning an object back to the client application is common practice to ensure information is properly labeled and real world examples normally return more complex information represented by objects
				return res.status(200).send({ access : auth.createAccessToken(result) });

			// Passwords do not match
			} else {

				return res.status(401).send(false);
			}
		}
	})
	.catch(err => res.status(500).send(err));
};
/*
	IMPORTANT NOTE: 
		-unlike register, sending 200 is more appropriate upon succesful logging in since we're just looking for a document in the database and match it with the credentials sent from the request body.
		- 404 http status code refers to documents or resources that are not found e.g. pages in the website or documents in the database
		- 401 http status code refers to unauthorized access. This is used mostly if the credentials provided in the request body do not match the document found in the database.
*/

//[SECTION] Retrieve user details
/*
	Steps:
	1. Retrieve the user document using it's id
	2. Change the password to an empty string to hide the password
	3. Return the updated user record
*/
module.exports.getProfile = (req, res) => {

	// The "return" keyword ensures the end of the getProfile method.
	// Since getProfile is now used as a middleware it should have access to "req.user" if the "verify" method is used before it.
	// Order of middlewares is important. This is because the "getProfile" method is the "next" function to the "verify" method, it receives the updated request with the user id from it.
	return User.findById(req.user.id)
	.then(user => {
		console.log(user)
		user.password = "";
		return res.status(200).send(user);
	})
	.catch(err => res.status(500).send(err))
};
/*
	IMPORTANT NOTE:
		- The status code of a response is a three-digit integer code that describes the result of the request and the semantics of the response, including whether the request was successful and what content is enclosed (if any). All vakud status codes are within the range of 100 to 599, inclusive.
		- The first digit of the status code defines the class of response. The last two digits do not have any categorization role. There are five values for the first digit:
			-1xx (Informational): The request was received, continuing process.
			-2xx (Successful): The request was successfully received, understood, and accepted.
			-3xx (Redirection): Further action needs to be taken in order to complete the request
			-4xx (Client Error): The request contains bad syntax or cannot be fulfilled 
			-5xx (Server Error): The server failed to fulfill an apparently valid request
		-HTTP response status codes indicate wheter or not a specific HTTP request has been successfully completed
		-For a get request, 200 code refers to successful request, meaning the server processed the request and returned a response back to the client without any errors.
		-500 http status refer to an internal server error which means that the request is valid, but an error occured in send the response. e.g. database issues, server-side codes, or server problems.

*/

/*
Important Note
	- With this, routes now simply handle the activation of the controller.
	- Controllers now handle all business logic.
	- The controllers now end the cycle as it is now expected to use res.send() and send a response.
	- next can be omitted from a middleware/controller if it will not pass the data to another function.
	- Controllers as middleware then make our code more readable and modular. Where you can simply add or remove controllers or middleware from a route.
*/
// [SECTION] For Enrolling A user
module.exports.enroll = (req, res) => {
	// The user's id from the decoded token after verify()
	console.log(req.user.id);
	// The course from our request body
	console.log(req.body.enrolledCourses)

	if(req.user.isAdmin){
		// Admins should not be allowed to enroll to a course, so we need the "verify" tp che the req.user.isAdmin
		return res.status(403).send(false);
	}

	let newEnrollment = new Enrollment ({
		// Adds the id of the logged in user from the decoded token
		userId : req.user.id,	
		// Gets the courseIds from the request body
		enrolledCourses: req.body.enrolledCourses,
		totalPrice: req.body.totalPrice
	})

	return newEnrollment.save()
	.then(enrolled => {
		console.log(enrolled)
		return res.status(201).send(true);
	})
	.catch(err => res.status(500).send(err))
}

// [SECTION] Getting All Enrollements
module.exports.getEnrollments = (req, res) => {
	return Enrollment.find({userId : req.user.id})
	.then(enrollments => {
		if (enrollments.length > 0) {
			return res.status(200).send(enrollments);

		} else
		
		 return res.status(404).send(false)
	})
	.catch(err => res.status(500).send(err));
}