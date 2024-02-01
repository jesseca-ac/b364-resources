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
		postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onclick="deletePost"('${post.id}')">Delete</button>
			</div>
		`;
	});

	console.log(postEntries);
}