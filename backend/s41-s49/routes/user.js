// [SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");

// [SECTION] Routing Component
const router = express.Router();

// [SECTION] Routes - POST
// Route for checking if the user's email already exists in the database
// Invokes the "checkEmailExists" function from the controller file to communicate with our database
// This passes the "body" property of our "request" object to the corresponding controller function
router.post("/checkEmail", (req, res) => {
	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController));
});

router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController))
});


// [SECTION] Route for user authentication
router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController))
});

//[SECTION] Route for retrieving user details
router.post("/details", (req,res)=>{
	userController.getProfile(req.body).then(resultFromController => res.send(resultFromController));
});

module.exports = router;