// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");

// This allows us to use all the routes defined in "taskRoute.js"
const taskRoute = require("./routes/taskRoute");

// Server setup
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Mongoose Connection
mongoose.connect("mongodb+srv://andreivon:admin1234@cluster0.qwsgp7m.mongodb.net/Batch364-todo?retryWrites=true&w=majority");

let db = mongoose.connection;

// Error in connection
db.on("error", console.error.bind(console, "Connection Error!"));

// Once opened
db.once("open", () => console.log("We're connected to the cloud database!"))

// Base endpoint
// Allows all the task routes created in the "taskRoute.js" file to use "/tasks" route.
app.use("/tasks", taskRoute);

// Server listening
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = { app, mongoose };