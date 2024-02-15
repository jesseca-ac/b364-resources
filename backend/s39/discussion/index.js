const express = require("express");
// Mongoose is a package that allows creation of Schemas to model our data structures
const mongoose = require("mongoose");

const port = 4000;
const app = express();

// [Section] MongoDB connection
// connect to the data base by passing in your connection string to replace the password and database names with actual values.
mongoose.connect("mongodb+srv://admin:admin@b364.osdsauh.mongodb.net/Batch364-todo?retryWrites=true&w=majority");

let db = mongoose.connection;

//Error in connection
db.on("error", console.error.bind(console, "Connection Error!"));

// When connected successfully
db.once("open", () => console.log("We're connected to the cloud database!"));



// allow your application to read json data
app.use(express.json());
// allow your app to read data/infromation from forms
app.use(express.urlencoded({extended:true}));

	// [SECTION] Mongoose Schemas
		// schemas determine the structure of the dicuments to be writeen in the database
		//schemas act like the blueprint of our data
		//Use the Schema() constructor of the mongoose module to create a new Schema object.

		const taskSchema = new mongoose.Schema({
			// define the fields with its corresponding data type
			//  For the todo list, we will be needing the "task name" and "task status".
			// There is a field called "name " and its data type is "string"
			name: String,
			status: {
				type: String,
				default : "pending"
			}
		})

		// [SECTION] Models
			//Uses schemas and are used to create/instantiate objects that correspond to the schema
			//models use schema and they act as the middleman from the serve to our database
		const Task = mongoose.model("Task", taskSchema);


// [SECTION] Routes
	// Creating a new task

	// Business Logic
	/*
	1. Add a functionality to check if there are duplicate tasks
	    - If the task already exists in the database, we return an error
	    - If the task doesn't exist in the database, we add it in the database
	2. The task data will be coming from the request's body
	3. Create a new Task object with a "name" field/property
	4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
	*/

app.post("/tasks", (request, response) =>{
		// Check whether the task to be save is existing in our database or not.

		// findOne method returns the first matching document that matches the criteria.
		Task.findOne({name : request.body.name}).then(result => {
			console.log(result);
			if(result === null){
				let newTask = new Task({
					name: request.body.name
				})

				// task
				newTask.save().then(save => response.send("Task saved!"))
			}else{
				return response.send("The task is already existing!")
			}
		})



})

// Getting all the tasks

    // Business Logic
    /*
    1. Retrieve all the documents
    2. If an error is encountered, print the error
    3. If no errors are found, send a success status back to the client/Postman and return an array of documents
    */

app.get("/tasks", (request, response) => {

		//find method is mongoose method tha is similar to mongodb find and findMany
	Task.find({}).then(result => {
		return response.send(result);
	}).catch(error => response.send(error));

})
// Activity will start here
//User Schema/Model

    const userSchema = new mongoose.Schema({

        firstName: ,
        : String,
        email: ,
        password : 

    })

    const User = mongoose.model();

// Route for creating a user

    app.post("/register", (req, res)=> {

        // Create/instantiate a "newUser" from the "User" model
        let newUser = new User({
            email : req.body.email,
            password : req.body.password
        });

        // Create a document in the database
        newUser.save()

    }) 

// Route for logging in a user

    app.post("/login", (req, res)=> {

        User.findOne({ email : req.body.email }).then((result, err) => {

            // Check if email exists in the database.

                //if it is check password from db and req.body match and send a message to the client for logging in.
                    //else, send a message to the client for wrong password.

            // If email does not exist in the database send a message to the client for email does not exist.

        })

    }) 





app.listen(port, () => {
	console.log(`Server running at port ${port}!`)
})