
// Use the "require" directive to load the express module/package
// This is used to get the contents of the express package to be used by our application
// It would also allow us access to methods and functions that will allow us to easily create a server
const express = require("express");

// Create an application using express
// This creates an express application and stores this in a constant called app
// In layman's terms, app is our server
const app = express();

// For our application server to run, we need a port to listen to
const port = 4000;

// Setup allowing the server to handle data from requests
// Allow your app  to read json data
// Methods used from express JS are middlewares
// Middleware is a software that provides common services and capabilities to applications outside of what's offered by the operating system
// API management is one of the common application of middlewares.
app.use(express.json())
// Allow your app to read data from forms
// By default, information received from the url can only be received as a string or an array
app.use(express.urlencoded({extended:true}));
// By applying the option of "extended:true" this will allow us to receive information in other data types such as object which we will use throughout our application.

// [SECTION] Routes
// Express has methods corresponding to each HTTP method
// This route expects to receive a GET request at the base URI "/"
// The full base URI for our local application for this route will be at "http://localhost:4000"
// This route will return a message back to the client

app.get("/", (req, res) => {

	res.send("Hello B364!");
})

// This route expects to receive a get request at the URI "/hello"
app.get("/hello", (req, res) => {
	res.send("Hello from the /hello endpoint!");
})


// This route expects to receive a POST request at the URI "/hello"
app.post("/hello", (req, res) => {
    // req.body contains the contents/data of the request body
    // All the properties defined in our Postman request will be accessible here as properties with the same names
    res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`);
});

let users = []

app.post("/register", (req, res) => {
	console.log(req.body)
	// If contents of the "request body" with the property "username" and "password" is not empty
	if(req.body.username !== '' && req.body.password !== ''){

		// This will store the user object sent via postman to the users array created above
		users.push(req.body);

		// This will send a response back to the client/Postman after the request has been processed
		res.send(`User ${req.body.username} successfully registered!`);

	} else {

		res.send("Please input BOTH username and password.");
	}
})

// This route expects to receive a PUT request at the URI "/change-password"
// This will update the password of a user that matches the information provided in the client/Postman
app.put("/change-password", (req, res) => {

	// Creates a variable to store the message to be sent back to the client/Postman 
	let message;

	// Creates a for loop that will loop through the elements of the "users" array
	for(let i = 0; i < users.length; i++){

	    // If the username provided in the client/Postman and the username of the current object in the loop is the same
	    if (req.body.username == users[i].username) {

	        // Changes the password of the user found by the loop into the password provided in the client/Postman
	        users[i].password = req.body.password;

	        // Changes the message to be sent back by the response
	        message = `User ${req.body.username}'s password has been updated.`;

	        // Breaks out of the loop once a user that matches the username provided in the client/Postman is found
	        break;

	    // If no user was found
	    } else {

	        // Changes the message to be sent back by the response
	        message = "User does not exist.";

	    }

	}

	// Sends a response back to the client/Postman once the password has been updated or if a user is not found
	res.send(message);

	})

app.listen(port, () => console.log(`Server running at port ${port}`));