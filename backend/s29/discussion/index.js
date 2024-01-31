let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];

// indexOf() - returns the index number of the first matching element in an array

let firstIndex = countries.indexOf('PH');
console.log('Result of indexOf method: ' + firstIndex);

let invalidCountry = countries.indexOf('BR');
console.log('Result of indexOf method: ' + invalidCountry);

// lastIndexOf() - returns the index number of the last matching element found in an array.

let lastIndex = countries.lastIndexOf('PH');
console.log('Result of lastIndexOf method: ' + lastIndex);

// Getting the index number starting from a specified index;
let lastIndexStart = countries.lastIndexOf('PH', 6);
console.log('Result of lastIndexOf method: ' + lastIndexStart);

// slice() - portions/slices elements from an array AND return a new array

// Slicing off elements from a specified index to the last element
let slicedArrayA = countries.slice(2);
console.log('Result from slice method:');
console.log(slicedArrayA);

// Slicing off elements from a specified index to another index
let slicedArrayB = countries.slice(2, 4);
console.log('Result from slice method:')
console.log(slicedArrayB);

// Slicing off elements starting from the last element of an array
let slicedArrayC = countries.slice(-3);
console.log('Result from slice method:')
console.log(slicedArrayC);

// toString() - returns an array as string separated by commas
let stringArray = countries.toString();
console.log('Result from toString method:');
console.log(stringArray);

// concat() - combines two arrays and returns the combined result
let taskArrayA = ['drink html', 'eat javascript'];
let taskArrayB = ['inhale css', 'breath sass'];
let taskArrayC = ['get git', 'be node'];

let tasks = taskArrayA.concat(taskArrayB);
console.log('Result from concat method:')
console.log(tasks);

// Combining multiple arrays
let allTasks = taskArrayA.concat(taskArrayB, taskArrayC);
console.log('Result from concat method:')
console.log(allTasks);

// Combining arrays with elements
let combinedTasks = taskArrayA.concat('smell express', 'throw react');
console.log('Result from concat method:')
console.log(combinedTasks);

// join() - returns an array as a string separated by specified separator string
let users = ['John', 'Jane', 'Joe', 'Robert'];
console.log(users.join());
console.log(users.join(''));
console.log(users.join(' - '));

// Iteration methods

// forEach() - similar to a for loop that iterates on each array element
/*
	Syntax:
	  arrayName.forEach(function(indivElement){
			statement;
	  })
*/
allTasks.forEach(function(task){
	console.log(task);
})

// Using forEach with conditional statements
let filteredTasks = [];

allTasks.forEach(function(task){
	console.log(task);

	if(task.length > 10){
		filteredTasks.push(task);
	}
})

console.log("Result of filtered tasks:");
console.log(filteredTasks);