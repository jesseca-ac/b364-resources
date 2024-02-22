//[SECTION] Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");
const auth = require("../auth");

//[SECTION] Routing Component
const router = express.Router();

const {verify, verifyAdmin} = auth;
// Deconstruct the "auth" module so that we can simply store "verify" and "verifyAdmin" in their variables and reuse it in our routes.

//[SECTION] Route for creating a course
router.post("/", verify, verifyAdmin, (req,res)=>{
	courseController.addCourse(req.body).then(resultFromController => res.send(resultFromController));
}); 

//[SECTION] Route for retrieving all courses
router.get("/", (req,res)=>{
	courseController.getAllCourses().then(resultFromController => res.send(resultFromController));
}); 

//[SECTION] Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;