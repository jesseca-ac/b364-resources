// Controllers contain the functions and business logic of our Express JS application
// Meaning all the operations it can do will be placed in this file

// Uses the "require" directive to allow access to the "Task" model which allows us to access Mongoose methods to perform CRUD functions
// Allows us to use the contents of the "task.js" file in the "models" folder
const Task = require("../models/Task");

// Controller function for getting all the tasks
// Defines the functions to be used in the "taskRoute.js" file and exports these functions
module.exports.getAllTasks = () => {

	// The "return" statement, returns the result of the Mongoose method "find" back to the "taskRoute.js" file which invokes this function when the "/tasks" routes is accessed
	// The "then" method is used to wait for the Mongoose "find" method to finish before sending the result back to the route and eventually to the client/Postman
	return Task.find({}).then(result => {

		// The "return" statement returns the result of the MongoDB query to the "result" parameter defined in the "then" method
		return result;

	})

}

// Controller function for creating a task
// The request body coming from the client was passed from the "taskRoute.js" file via the "req.body" as an argument and is renamed as a "requestBody" parameter in the controller file
module.exports.createTask = (requestBody) => {

	// Creates a task object based on the Mongoose model "Task"
	let newTask = new Task({
		
		// Sets the "name" property with the value received from the client/Postman
		name : requestBody.name

	})

	// Saves the newly created "newTask" object in the MongoDB database
	// The "then" method waits until the task is stored in the database or an error is encountered before returning a "true" or "false" value back to the client/Postman
	// The "then" method will accept the following 2 arguments:
		// The first parameter will store the result returned by the Mongoose "save" method
		// The second parameter will store the "error" object
	// Compared to using a callback function on Mongoose methods discussed in the previous session, the first parameter stores the result and the error is stored in the second parameter which is the other way around
		// Ex.
			// newUser.save((saveErr, savedTask) => {})
	return newTask.save().then((task, error) => {

		// If an error is encountered returns a "false" boolean back to the client/Postman
		if (error) {

			console.log(error);
			// If an error is encountered, the "return" statement will prevent any other line or code below it and within the same code block from executing
			// Since the following return statement is nested within the "then" method chained to the "save" method, they do not prevent each other from executing code
			// The else statement will no longer be evaluated
			return false;

		// Save successful, returns the new task object back to the client/Postman
		} else {

			return task; 

		}

	})

}

// Controller function for deleting a task
// "taskId" is the URL parameter passed from the "taskRoute.js" file

// Business Logic
/*
	1. Look for the task with the corresponding id provided in the URL/route
	2. Delete the task using the Mongoose method "findByIdAndDelete" with the same id provided in the route
*/

// The task id retrieved from the "req.params.id" property coming from the client is renamed as a "taskId" parameter in the controller file
module.exports.deleteTask = (taskId) => {


    // The "findByIdAndRemove" Mongoose method will look for a task with the same id provided from the URL and remove/delete that document from MongoDB


    // The Mongoose method "findByIdAndRemove" method looks forr the document using the "_id" field


    return Task.findByIdAndDelete(taskId)


    .then((removedTask) => removedTask)


    .catch(err => false)


}

// Controller function for updating a task

// Business Logic
/*
	1. Get the task with the id using the Mongoose method "findById"
	2. Replace the task's name returned from the database with the "name" property from the request body
	3. Save the task
*/

// Controller function for updating a task


/*


    1. Get the task with the id using the Mongoose method "findById"


    2. Then, replace the tasks name returned from the database with the "name" property from the request body


    3. Catch any error while using findById and send a message to the client


    4. Save the task and send the updated task to the client.


    5. Catch any error while saving and send a message to the client


*/





// The task id retrieved from the "req.params.id" property coming from the client is renamed as a "taskId" parameter in the controller file


// The updates to be applied to the document retrieved from the "req.body" property coming from the client is renamed as "newContent"


module.exports.updateTask = (taskId, newContent) => {


    // The "findById" Mongoose method will look for a task with the same id provided from the URL


    // "findById" is the same as "find({"_id" : value})"


    // The "return" statement, returns the result of the Mongoose method "findById" back to the "taskRoute.js" file which invokes this function 


    return Task.findById(taskId).then(result => {


        // Results of the "findById" method will be stored in the "result" parameter


        // It's "name" property will be reassigned the value of the "name" received from the request


        result.name = newContent.name;





        // Saves the updated object in the MongoDB database


        // The document already exists in the database and was stored in the "result" parameter


        // Because of Mongoose we have access to the "save" method to update the existing document with the changes we applied


        //Then receive the updatedTask after save() method and return it to the client.


        //Catch the error and send a message to the client.


        return result.save()


        .then((updatedTask) => updatedTask)


        .catch(err => "Update failed")


    //Catch the error and send a message to the client. 


    }).catch(err => "Find Failed")


}