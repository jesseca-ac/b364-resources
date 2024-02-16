// Routes would contain all the endpoints of our application.
// We seperate the routes such that "app.js" only contains information on the server.
// We need to use express' Router() function
const express = require("express");
// Creates a router instance that functions as a middlleware and routing system
// Allows access to HTTP method middlewares that makes it easier to create routes for our application
const router = express.Router();
// The "taskController" allows us to use the functions defined in the "taskController.js" file
const taskController = require("../controllers/taskController");

// [Section] Routes
// The routes are responsible for defining the URIs that our client accesses and the corresponding controller functions that will be used when a route is accessed
// They invoke the controller functions from the controller files
// All the business logic is done in the controller

// Route to get all the tasks
// This route expects to receive a  GET a request at the URL "/tasks"
// The whole URL is at "http://localhost:4000/tasks" this is because of the "/tasks" defined in the app.js
router.get("/", (req, res) => {
	taskController.getAllTasks().then(resultFromController => res.send(resultFromController));
})

router.post("/", (req, res) => {
	// The "createTask" function needs the data from the request body, so we need to supply it to the function
	// If information will be coming from the client side commonly from forms, the data can be accessed from the request "body" property.
	taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
})

// Route to delete a task

// This route expects to receive a DELETE request at the URL "/tasks/:id"

// The whole URI is at "http://localhost:4000/tasks/:id"

// The task ID is obtained from the URL is denoted by the ":id" identifier in the route

// The colon (:) is an identifier that helps create a dynamic route which allows us to supply information in the URL

// The word that comes after the colon (:) will be the name of the URL parameter

// ":id" is a wildcard where you can put any value, it then creates a link between "id" parameter in the URL and the value provided in the URL

router.delete("/:id", (req, res) => {


    // URL Parameter values are accessed via the request object's "params" property


    // The property name of this object will match the given URL parameter name


    // In this case "id" is the name of the parameter


    // If the information will be coming from the URL, the data can be accessed from the request "params" property


    taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));


})

// Route to update a task
// This route expects to receive a PUT request at the URL "/tasks/:id"
// The whole URL is at "http://localhost:3001/tasks/:id"
router.put("/:id", (req, res) => {

	// The "updateTask" function will accept the following 2 arguments:
		// "req.params.id" retrieves the task ID from the parameter
		// "req.body" retrieves the data of the updates that will be applied to a task from the request's "body" property
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));

})


module.exports = router;
// "module.exports" is a way for Node JS to treat this value as a "package" than can be used by other files.