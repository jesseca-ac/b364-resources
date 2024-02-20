// Import JWT
const jwt = require("jsonwebtoken")
// User defined string data that will be used to create our JSON web tokens
// Used in the algorithm for encrypting our data which makes it difficult to decode the information without the defined secret keyword
const secret = "CourseBookingAPI";

// [Section]JSON WEB Tokens
/*
	- JSON Web Token or JWT is a way of securely passing information from the server to the client or to other parts of a server
	- Information is kept secure through the use of secret ocde
	- Only the system that knows the secret code that can decode the encrypted information
*/

// [SECTION] Token Creation
/*
Analogy
	Pack the gift, and provide a lock with the secret code as the key 
*/

module.exports.createAccessToken = (user) => {
	const data = {
		id : user._id,
		email : user.email,
		isAdmin : user.isAdmin
	}

	return jwt.sign(data, secret, {});
}