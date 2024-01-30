console.log("Hello B364!");
// Array Methods
// Mutator Methods
//  - JavaScript has built-in functions and methods for arrays. This allow us to manipulate and access arrray items.

// Mutator Methods-
	/*
		- This kind of methods are functions that "mutate" or change an array after they're created.
		- These methods manipulate the original array performing various taks such as adding and removing elements.

	*/

let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit'];

// push()
// Adds an element in the end of an array AND returns the array's length 
console.log('Current array:');
console.log(fruits);
let fruitsLength = fruits.push('Mango');
console.log(fruitsLength);
console.log('Mutated array from push method:');
console.log(fruits);

// Adding multiple elements to an array 
fruits.push('Avocado', 'Guava');
console.log('Mutated array from push method:');
console.log(fruits);

// Let's try in a function
function addFruit(fruit){
	fruits.push(fruit);
}
addFruit("Pineapple");

console.log(fruits);

// pop()
// - Removes the last element in an array AND returns the removed element.
let removedFruit = fruits.pop();
console.log(removedFruit);
console.log('Mutated array from pop method:');
console.log(fruits);

function removeFruit(){
	fruits.pop()
}

removeFruit();
console.log(fruits);

// unshift()
// - Adds one or more elements at the beginning of an array
fruits.unshift('Lime', 'Banana');
console.log('Mutated array from unshift method');
console.log(fruits);

// function sample
function unshiftFruit(fruit){
	fruits.unshift(fruit);
}

unshiftFruit("calamansi");
console.log(fruits);

// shift()
// - Removes an element at the beginning of an array AND returns the removed element.
let anotherFruit = fruits.shift()
console.log(anotherFruit);
console.log('Mutated array from shift method:');
console.log(fruits);

function shiftFruit(){
	fruits.shift();
}

shiftFruit();
console.log(fruits);

// splice()
// - This simultaneously removes element from a specified index number and adds elements.

fruits.splice(1, 2, 'Lime', 'Cherry');
console.log('Mutated array from splice method:');
console.log(fruits);


function spliceFruit(index,deleteCount,fruit){
    //remove and add an item at the specified point of the array.
    fruits.splice(index,deleteCount,fruit);
}

spliceFruit(1,1,"Avocado");
spliceFruit(2,1,"Durian")
console.log(fruits);

// sort()
// - Rearranges the array elements in alphanumeric order
fruits.sort();
console.log('Mutated array from sort method:');
console.log(fruits);

// reverse()
fruits.reverse();
console.log('Mutated array from reverse method:');
console.log(fruits);

fruits.reverse()
console.log(fruits);