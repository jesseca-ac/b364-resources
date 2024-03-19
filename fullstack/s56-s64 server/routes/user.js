//[SECTION] Dependencies and Modules
const express = require("express");
const userController = require("../controllers/user");
//Import the auth module and deconstruct it to get our verify method.
const {verify} = require("../auth");
const auth = require("../auth");

//[SECTION] Routing Component
const router = express.Router();

//[SECTION] Routes - POST
// Route for checking if the user's email already exists in the database
// Invokes the "checkEmailExists" function from the controller file to communicate with our database
// Passes the "body" property of our "request" object to the corresponding controller function
// The full route to access this is "http://localhost:4000/users/checkEmail" where the "/users" was defined in our "index.js" file
// The "then" method uses the result from the controller function and sends it back to the client via the "res.send" method
router.post("/checkEmail", userController.checkEmailExists);

//[SECTION] Route for user registration
router.post("/register", userController.registerUser);

//[SECTION] Route for user authentication
router.post("/login", userController.loginUser);

//[SECTION] Route for retrieving user details
// The "getProfile" controller method is passed as middleware, the controller will have access to the "req" and "res" objects.
// This will also make our code look cleaner and easier to read as our routes no longer deal with logic.
// All business logic will now be handled by the controller.
router.get("/details", verify, userController.getProfile);

//[SECTION] Route for enrolling a user
router.post('/enroll', verify, userController.enroll);

//[SECTION] Route to get the user's enrollements array
router.get('/getEnrollments', verify, userController.getEnrollments);

//[SECTION] Route for resetting the user password
// Update authMiddleware to our own auth module and use verify instead.
// Update resetPasswordController to userController, our own controller module instead.
// Change the route to put as this is an edit of a document.
router.put('/reset-password', verify, userController.resetPassword);

//[SECTION] Route for updating user profile
// Update authMiddleware.authenticateToken to our own auth module and use verify instead.
// Update profileController to userController, our own controller module instead.
router.put('/profile', verify, userController.updateProfile);

//[SECTION] Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;