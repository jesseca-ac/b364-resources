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