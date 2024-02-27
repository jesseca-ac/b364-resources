//[SECTION] Dependencies and Modules
const Course = require("../models/Course");
const User = require("../models/User");

// [SECTION] Create a course

	// Steps: 
	// 1. Instantiate a new object using the Course model and the request body data
	// 2. Save the record in the database using the mongoose method "save"
	// 3. Use the "then" method to send a response back to the client appliction based on the result of the "save" method

module.exports.addCourse = (req, res) => {

	// Creates a variable "newCourse" and instantiates a new "Course" object using the mongoose model
	// Uses the information from the request body to provide all the necessary information
	const newCourse = new Course({
		name : req.body.name,
		description : req.body.description,
		price : req.body.price
	});

	Course.findOne({ name: req.body.name })
	.then(existingCourse => {
		if (existingCourse){
			// Sent { message: 'Course already exists' }
			// Notice that we didn't response directly in string, instead we added an object with a value of a string. This is a proper response from API to Client. Direct string will only cause an error when connecting it to your frontend.
			// using res.send({ key: value }) is a common and appropriate way to structure a response from an API to the client. This approach allows you to send structured data back to the client in the form of a JSON object, where "key" represents a specific piece of data or a property, and "value" is the corresponding value associated with that key.
			return res.status(409).send({ error: 'Course already exists' })
		}

		return newCourse.save()
		.then(savedCourse => {
			//The syntax ({ savedCourse }) in JavaScript is known as object destructuring assignment. In this context, it's used to create a new object with a property named savedCourse that holds the value of the savedCourse variable.
			return res.status(201).send({ savedCourse })
		})
		// Used more descriptive variable names like saveErr and findErr for better understanding of the error context.

		// Sent more meaningful error messages like 'Failed to save the course' and 'Error finding the course' to provide clearer feedback.
		.catch(saveErr => {
			// This will only be displayed in terminal
			console.error("Error in saving the course: ", saveErr)

			// This will be the response to the clientt
			return res.status(500).send({ error: 'Failed to save the course'})
		})
	})
	.catch(findErr => {
		// This will only be displayed in terminal
		console.error("Error in finding the course: ", findErr)


		return res.status(500).send({ message: 'Error finding the course'})
	})	
}; 

// [SECTION] Use of Promise.catch()
/*
	- Promise-based methods returns "promises" which can be chained with a .catch() method handle any errors that occur during execution.
	This method allows you to handle errors in a more declarative way and can your code more readable.
	- Using .catch() is considered a best practice for handling erros within JavaScript Promise blocks. (A promise in JavaScript represents the eventual completion or failure of asynchronous operationg along with its resulting value.)
	- Because .then() operates asyncronously, we utilize .catch() exlusively to hande any errors that may arise from promise resolution.

*/
// module.exports.addCourse = (req, res) => {

// 	try {
// 		// Creates a variable "newCourse" and instantiates a new "Course" object using the mongoose model
// 		// Uses the information from the request body to provide all the necessary information
// 		let newCourse = new Course({
// 			name : reqBody.name,
// 			description : req.body.description,
// 			price : req.body.price
// 		});

// 		// Return is used here to end the controller function
// 		return newCourse.save()
// 		.then(result => res.send(result))
// 		// Error handling is done using .catch() to capture any errors that occur during the course save operation.
// 		// .catch(err => err) captures the error but does not take any action, it's only capturing the error to pass it on the next .then() or .catch() method in the chain. 
// 		// Postman is waiting for a response to be sent back to it but is not receiving anything.
// 		// .catch(err => res.send(err)) captures the error and takes action by sending it back to the client/Postman with the use of "res.send"
// 		.catch(err => res.send(err));
// 	} catch (err) {

// 		console.log("result of console.error:")
// 		console.error(err);
// 		console.log("result of console.log:")
// 		console.log(err);
// 		// An additional try...catch block is added to catch errors that might occur during variable assignments or other synchronous operations.
// 		res.send("Error in variables")
// 	}
// }; 

//[SECTION] Retrieve all courses
/*
	Steps: 
	1. Retrieve all courses using the mongoose "find" method
	2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/

// In asynchronous operations like the one using promises, you typically don't need to use a try block. Instead, you can handle errors using the .catch() method after the promise (.then()). In this case, if any error occurs during the promise execution, it will be caught and handled by the .catch() block, sending the error response back.

module.exports.getAllCourses = (req, res) => {

	return Course.find({})
	.then(result => res.status(200).send(result))
	.catch(err => res.status(500).send(err));

};

//[SECTION] Retrieve all active courses
/*
	Steps: 
	1. Retrieve all courses using the mongoose "find" method with the "isActive" field values equal to "true"
	2. Use the "then" method to send a response back to the client appliction based on the result  of the "find" method
*/
module.exports.getAllActive = (req, res) => {

	Course.find({ isActive: true }).then(result => {
		// if the result is not null
		if (result.length > 0){
			// send the result as a response
			return res.status(200).send(result);
		}
		// if there are no results found
		else {
			return res.status(200).send(false)
		}
	}).catch(err => res.status(500).send(err));
};

//[SECTION] Retrieve a specific course
/*
	Steps: 
	1. Retrieve a course using the mongoose "findById" method
	2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
/*
	Hi 364!
	UPDATED VERSION!! 
		Now we would make our request using the params :)

*/
module.exports.getCourse = (req, res) => {

	Course.findById(req.params.courseId)
	.then(course => res.status(200).send(course))
	.catch(err => res.status(500).send(err));
	
};

	//[SECTION] Update a course
    /*
    	Steps: 
    	1. Create an object containing the data from the request body
    	2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
    	3. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
    */
module.exports.updateCourse = (req, res)=>{

	let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    // findByIdandUpdate() finds the the document in the db and updates it automatically
    // req.body is used to retrieve data from the request body, commonly through form submission
    // req.params is used to retrieve data from the request parameters or the url
    // req.params.courseId - the id used as the reference to find the document in the db retrieved from the url
    // updatedCourse - the updates to be made in the document
    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            res.status(200).send(true);
        } else {
            res.status(404).send(false);
        }
    })
    .catch(err => res.status(500).send(err));
};

/*
Important Note:
	- While incorporating a try-catch block for handling synchronous errors is a good practice, it might not be necessary or effective in this specific case because the main operations within the function are asynchronous (e.g., findByIdAndUpdate which returns a promise).
	- In this scenario, utilizing .catch() directly after the promise is often sufficient to catch and handle any errors that might occur during asynchronous operations. The use of try-catch inside can be limited to synchronous operations or to wrap the whole asynchronous function, but it won't capture errors that happen within asynchronous functions.
*/

//[SECTION] Archive a course
/*
	Steps: 
	1. Create an object and with the keys to be updated in the record
	2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
	3. If a course is updated send a response of "true" else send "false"
	4. Use the "then" method to send a response back to the client appliction based on the result of the "findByIdAndUpdate" method
*/
module.exports.archiveCourse = (req, res) => {

    let updateActiveField = {
        isActive: false
    }
    if (req.user.isAdmin == true){
	    return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
	    .then(course => {
	        if (course) {
	            res.status(200).send(true);
	        } else {
	            res.status(400).send(false);
	        }
	    })
	    .catch(err => res.status(500).send(err));
	    }
	    else{
	    	return res.status(403).send(false);
	    }
};

/*
Important Note:
	- In managing databases, it's common practice to soft delete our records and what we would implement in the "delete" operation of our application
	- The "soft delete" happens here by simply updating the course "isActive" status into "false" which will no longer be displayed in the frontend application whenever all active courses are retrieved
	- This allows us access to these records for future use and hides them away from users in our frontend application
	// There are instances where hard deleting records is required to maintain the records and clean our databases
	- The use of "hard delete" refers to removing records from our database permanently
*/

//[SECTION] Activate a course
/*
	Steps: 
	1. Create an object and with the keys to be updated in the record
	2. Retrieve and update a course using the mongoose "findByIdAndUpdate" method, passing the ID of the record to be updated as the first argument and an object containing the updates to the course
	3. If the user is an admin, update a course else send a response of "false"
	4. If a course is updated send a response of "true" else send "false"
	5. Use the "then" method to send a response back to the client appliction based on the result of the "findByIdAndUpdate" method
*/

module.exports.activateCourse = (req, res) => {

    let updateActiveField = {
        isActive: true
    }
    if (req.user.isAdmin == true){
        return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            if (course) {
                res.status(200).send(true);
            } else {
                res.status(400).send(false);
            }
        })
        .catch(err => res.status(500).send(err));
    }
    else{
        return res.status(403).send(false);
    }
};