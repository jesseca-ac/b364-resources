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
// let users = ['John', 'Jane', 'Joe', 'Robert'];
// console.log(users.join());
// console.log(users.join(''));
// console.log(users.join(' - '));

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

let adminList = [];

let users = [
	{
		username: "peterSmith",
		isAdmin: false
	},
	{
		username: "andrewJones99",
		isAdmin: true
	},
	{
		username: "alexMartin",
		isAdmin: false
	},
	{
		username: "smithyS",
		isAdmin: true
	}
];

users.forEach(user => {
	console.log(user)

	if(user.isAdmin === true){
		adminList.push(user.username)
	}
})

console.log(adminList);

console.log(users);

// map() - iterates on each element AND returns new array with different values depending on the result of the function's operation

let numbers = [1, 2, 3, 4, 5];

let numberMap = numbers.map(function(number){
	return number * number;
});

console.log("Original array:");
console.log(numbers);
console.log("Result of map method:");
console.log(numberMap);

// every() - checks if all elements in an array meet the given condition
let allValid = numbers.every(function(number){
	return (number < 3);
});
console.log("Result of every method:");
console.log(allValid);

// some() - checks if at least one element in the array meets the given condition
let someValid = numbers.some(function(number){
	return (number < 2);
});
console.log("Result of some method:");
console.log(someValid);

// filter() - returns a new array that contains elements which meets the given condition
let filterValid = numbers.filter(function(number){
	return (number < 3);
});
console.log("Result of filter method:");
console.log(filterValid);

// No elements found
let nothingFound = numbers.filter(function(number){
	return (number = 0);
})
console.log("Result of filter method:");
console.log(nothingFound);

// Filtering using forEach()
let filteredNumbers = []

numbers.forEach(function(number){
	if(number < 3){
		filteredNumbers.push(number);
	}
});
console.log("Result of filter method:");
console.log(filteredNumbers);

let movies = [
	{
		name: "The Godfather",
		rating: 5
	},
	{
		name: "Star Wars IV: A new hope",
		rating: 4
	},
	{
		name: "Schindler's List",
		rating: 5
	}
];

let fiveStarMovies = movies.filter(movie => {
	console.log(movie);

	return movie.rating > 5;
});

console.log(fiveStarMovies);

// includes() - checks if the argument passed can be found in the array
let products = ['Mouse', 'Keyboard', 'Laptop', 'Monitor'];

let productFound1 = products.includes("Mouse");
console.log(productFound1);

let filteredProducts = products.filter(function(product){
	return product.toLowerCase().includes('m');
});

console.log(filteredProducts);

// reduce() - evaluates elements from left to right and returns/reduces the array into a single value
/*
	Syntax:
	  let/const resultArray = arrayName.reduce(function(accumulator, currentValue){ return expression/operation })
*/

let iteration = 0;

let reducedArray = numbers.reduce(function(x, y){
	console.warn('current iteration: ' + ++iteration);
	console.log('accumulator: ' + x);
	console.log('currentValue: ' + y);

	return x + y;
})
console.log("Result of reduce method: " + reducedArray);

let lists = ['Hello', 'Again', 'World'];

let reducedJoin = lists.reduce(function(x, y){
	return x + ' ' + y;
});
console.log("Result of reduce method: " + reducedJoin);