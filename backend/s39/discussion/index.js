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





app.listen(port, () => {
	console.log(`Server running at port ${port}!`)
})