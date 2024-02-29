// [SECTION] Dependencies and Modules
const express = require("express");
const passport = require('passport');
const userController = require("../controllers/user");

// [SECTION] Routing Component
const router = express.Router();

const {verify, isLoggedIn} = require("../auth");

// [SECTION] Retrieving User Details
// The "getprofile" controller method is passed as middlware, the controller will have access to the "req" and "res" objects.
// This will also make our code look cleaner and easir to read as our routes no longer deal with logic.
// All business logic will now be handled by the controller
router.get("/details", verify, userController.getProfile);


// [SECTION] Routes - POST
// Route for checking if the user's email already exists in the database
// Invokes the "checkEmailExists" function from the controller file to communicate with our database
// This passes the "body" property of our "request" object to the corresponding controller function

router.post("/checkEmail", userController.checkEmailExists);

router.post("/register", userController.registerUser);



// [SECTION] Route for user authentication
router.post("/login", userController.loginUser);

// [SECTION] Route to enroll user to a course

router.post('/enroll', verify, userController.enroll)

// [SECTION] Route to get the user's enrollments array
router.get('/getEnrollments', verify, userController.getEnrollments);

// [SECTION] Google Login
// [SECTION] Route for initiating the Google OAuth consent screen
router.get('/google', 
	// Uses the "authenticate" method of passport to verify the email credentials in Google's APIS
	passport.authenticate('google', {
		// Scopes that are allowed when retrieving the user's data
		scope:['email', 'profile'],
		// If added, always returns the OAuth consent screen to allow the user to choose an account
		// prompt : "select_account"
	}
));

// [SECTION] Route for callback URL for Google Oauth authentication
router.get('/google/callback', 
	// If authentication is unsuccessful, redirect to "/users/failed" route
	passport.authenticate('google', {
		failureRedirect: '/users/failed',
	}),
	// If authentication is successful, redirect to "/users/success" route
	function (req, res) {
		res.redirect('/users/success')
	}
);

// [SECTION] Route for failed Google OAuth authentication
router.get("/failed", (req, res) => {
	console.log('User is not authenticated')
	res.send("Failed")
})

// [SECTION] Route for successful Google OAuth authentication
router.get("/success", isLoggedIn, (req, res) => {
	console.log('You are logged in')
	console.log(req.user)
	res.send(`Welcome ${req.user.displayName}`)
})

// [SECTION] Route for logging out of the application
// The logout route does only logs the user out of the application and destroys the session, but upon trying to access the "/google" route again, the user is no longer prompted to choose an email to login if the "prompt: "select_account" option is not added to the "/google" route. 
router.get("/logout", (req, res) => {
	// Destorys the session that stores the Google OAuth Client Credentials
	// Allows for release of resources when the account information is no longer needed in the browser 
	req.session.destroy((err) => {
		if (err) {
			console.log('Error while destroying session:', err)
		} else {
			req.logout(() => {
				console.log('You are logged out');
				// Redirects the page to "http://localhost:4000" route to visual redirection in frontend.
				// Can be replaced in the future with the "home" page route for the frontend
				res.redirect('/');
			})
		}
	})
})
module.exports = router;