// Use the "require" directive to load Node.js modules
// A "module" is a software component or part of a program that contains one or more routines
// The "http module" lets Node.js transfer data using the Hyper Text Transfer
// "http module" is a set of individual files that contains code to create a "component" that helps establish data transfer between applications.
// HTTP is a protocol that allows the fetching of resources such as HTML documents.
// Clients (browser) and servers (node JS/express JS applications) communicate by exchanging individual messages.
// The messages sent by the client, usually from a web browser, are called requests.
// The messages sent by the server as answer are called responses.
// let http = require("http");

// // Using this module's createServer() method, we can create an HTTP server that listens to requests on a specified port and gives responses back to the client.
// // The http module has a createServer() ,method thjat accepts a function as an argument and allows for creation of a server
// // The arguments passed in the function are request and response objects (data type) that contains methods that allow us to receive requests from the client and to respond from those requests.
// http.createServer(function (request, response) {

// 	// Use the writeHead() method to:
// 	// Set a status code for the response - a 200 means OK
// 	// Set the content-type of the response as a plain text message.
// 	response.writeHead(200, {'Content-Type': 'text/plain'});

// 	response.end('Hello World');

// /*
// 	- A port is a virtual point where netwoerk connections start and end.
// 	- Each port is associated with a specific process or service
//     - The server will be assigned to port 4000 vis the "listen(4000)" method where the server will listen to any requests that are sent to it eventually communicating with our server.
// */


// }).listen(4000);

// console.log('Server running at localhost:4000');

const http = require('http');

// Creates a variable "port" to store the port number
const port = 4000

let items = ["Laptop", "Desktop", "Tablet"]

// This will allow us to use http createServer's other methods.
const app = http.createServer((request, response) => {




	if(request.url == '/greeting'){

		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end('Hello Again')
 
	} else if (request.url == '/homepage') {
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end('This is the homepage')

	} else if (request.url == '/items' && request.method === 'GET'){
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end(JSON.stringify(items));

	} else if (request.url == '/items' && request.method === 'POST'){
		console.log(request.method)

		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end("This route will be used to add another item")

	} else {

		response.writeHead(404, {'Content-Type': 'text/plain'})
		response.end('Page not available')
	}

});

// HTTP METHODS: 
	// GET - Usually used for GETTING data from a server
	// POST - Usually used for inputting data into a server to create a new document. 
	// PUT - Usually used for inputting data into a server to update a whole document.
	// PATCH - Usually used for inputting data into a server to update a small portion of a document.
	// DELETE - Usually used to delete a document.


// Uses the "app" and "port" variables created above.
// Since the app is now our defined server we can then use the listen method here to assign our port and run our server
// This makes our code and server creating more readable rather than having to chain .listen() at the end of createServer() which is a little longer.
app.listen(port);

console.log(`Server now accesible at localhost:${port}.`);

/*
Important Note:
	- Installing this package will allow the server to automatically restart when files have been changed for update
	- This will allow us to hot reload the application meaning any changes applied to the application will be applied without having to restart it
	- "npm install" is a command that allows us to install any package/depency that we would like to use with our applications
	- "-g" refers to a global installation where the current version of the package/dependency will be installed locally on our device allowing us to use nodemon on any project
*/