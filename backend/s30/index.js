console.log("Hello World");
// USING the DOM
// - To retrieve an element from the webpage, we can use the following code:
// document.querySelector('#clicker');

/*
	- The "document" refers to the whole webpage and "querySelector" is used to select a specific object(HTML element)
 from the document(webpage).

	- The querySelector function takes a string input that is formatted like a CSS selector when applying styles. This allows us to get a specific element  much like how CSS does it.
*/
// document.getElementById('clicker');

/*
	- However, using .getElementById() requires us to identify beforehand how we get the elements. With querySelector, we can be flexible in how to retrieve the elements.
*/

// Event Listeners 
// Whenever a user interacts with a web page, this action is considered as an event.

// It is used to contain the output of the code earlier so that we do not haave to repeat the whole document.querySelector code.

// const clicker = document.getElementById('clicker');

// let counter = 0

// clicker.addEventListener('click', function() {
// 	counter++;
// 	alert("The button has been clicked " + counter + " times");
// 	console.log("The button has been clicked!");
// }) 

// - The function used is addEventListener that takes two arguments: a string data type identifying an event and a function that the listener will execute once the specified event is triggered.

// fetch()
// fetch() method allows us to get, post, update or even delete data in a server. 

// The fetch()method has one argument by default, the url. A url is a representative address of accessing a resource/data in another machine.
// For now, we will use the jsonplaceholder url, which is a sample server we can get data from.
// The .then() method will allow us to process the data we retrieve using fetch in another functions.
// The data returned in our fetch method can be passed into the .then() where we can receivve it as a parameter.
// response is simply the parameter name, it is however, a convention, indicating that we are now going to process the response from our server.
// It is a representation of what we "got" fropm our server.
// response.json() is a method to parse the incoming data as a proper JS object we can further process.
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
	return response.json()  
})
.then(function(data){
	// console.log(data)
	// This will allow us to trigger showPosts() function after we fetch() data from our server.
	showPosts(data);
})


// We can then see that we are able to "Get" our retrieve data from another  server using fetch() and the proper url. We can then further use this array of data as html elements in our page.


document.querySelector('#form-add-post').addEventListener('submit', function(event){

	event.preventDefault();

	let titleInput = document.querySelector("#txt-title");
	let bodyInput = document.querySelector("#txt-body");

	// When trying to add, update and delete to a server, we have to pass another argument to fetch() method that contains other details.

	// The options object then contains other detaials like.
	// method: this property tells the server what we intend to do. the value passed here are what we call HTTP methods.
		// Common HTTP methods are:
		// GET: For getting data in a server
		// POST: For adding data in a server. 
		// PUT: For updating data in a server
		// DELETE: For deleting data in a server.
	// body: This property contains the main content that we want to send to our server. Clients and servers communicate with each other using JSON format data. That is why we will stringify our data first using JSON.stringify(). The body property can be optional. Some actions like deleting do not need a body property.

	// headers: This property contains other details that we need to send to our server. "Content-Type" : "application/json" simply tells the server that the incomding data is in json format.

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: titleInput.value,
			body: bodyInput.value,
			userId: 1
		}),
		headers: { 'Content-type': 'application/json'}
	})
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		console.log(data)
		alert('Successfully added.');

		// Clears the input elements upon submission
		titleInput.value = null;
		bodyInput.value = null;
	})
	// console.log(titleInput.value);
	// console.log(bodyInput.value);

	// console.log("Hello! The form has been submitted!");
});




//Receives the fetched data as an argument.
const showPosts = function(posts) {

	//You can console.log() the received data:
    // console.log(posts);
	
	//We'll add each post as a string.
	let postEntries = '';

	//For each post in the posts array we will create a string that represents html elements.
	posts.forEach(function(post){
		//get the id property of each post to add as part of our element's id's to differentiate them.
		//Add the title and body property as text content for our h3 and p elements.
		//Pass the post id to a delete button. This button will be created with an onclick attribute which triggers a deletePost() method.
		//The onclick attribute is a shortcut to an addEventListener() method. It's value is the function to be run when clicking the element.
		//The deletePost() method will then receive the post id whenever the button is clicked.
		// The editPost() method will then receive the post id whenever the button is clicked.
		postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onclick="edit('${post.id}')">Edit</button>
				<button onclick="deletePost"('${post.id}')">Delete</button>
			</div>
		`;
	});

	// console.log(postEntries);
	// innerHTML property represents all the elements and text of an element as a string.
	// We can add html elements to another element as  string by updating its innerHTML property.
	document.querySelector('#div-post-entries').innerHTML = postEntries;
}

// This function will add the id passed from the button and the deatils from the post to be edited.
const editPost = (id) => {
	let title = document.querySelector(`#post-title-${id}`).innerHTML
	let body = document.querySelector(`#post-body-${id}`).innerHTML

	document.querySelector('#txt-edit-id').value = id;
	document.querySelector('#txt-edit-title').value = title;
	document.querySelector('#txt-edit-body').value = body;
	document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

// Update post. This function will be run when the edit form is submitted.

document.querySelector('#form-edit-post').addEventListener('submit',(e) => {
	e.preventDefault();

	fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: 'PUT',
		body: JSON.stringify({
			id: document.querySelector('#txt-edit-id').value,
			title: document.querySelector('#txt-edit-title').value,
			body: document.querySelector('#txt-edit-body').value,
			userId: 1
		}),
		headers: { 'Content-type': 'application/json'}
	})
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		alert('Successfully updated.')

		document.querySelector('#txt-edit-id').value = null
		document.querySelector('#txt-edit-title').value = null
		document.querySelector('#txt-edit-body').value = null
		document.querySelector('#btn-submit-update').setAttribute('disabled', true);
	});

});