let http = require("http");

const app = http.createServer(function (request, response) {

	if(request.url === "/" && request.method == "GET"){

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Welcome to booking system');

	}

	if(request.url === "/profile" && request.method == "GET"){

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Welcome to your profile');

	}

	// Retrieving a course
	if(request.url === "/courses" && request.method == "GET"){

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end(`Here's our courses available`);

	}

	// Adding a new course
	if(request.url === "/addCourse" && request.method == "POST"){

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Add course to our resources');

	}

	// Updating a course
	if(request.url === "/updateCourse" && request.method == "PUT"){

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Update a course to our resources');

	}

	// Deleting a course
	if(request.url === "/archiveCourse" && request.method == "DELETE"){

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Archive courses to our resources');

	}

    
})


//No need to add app.listen and port number variable.

//Do not modify
//Make sure to save the server in variable called app

if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;