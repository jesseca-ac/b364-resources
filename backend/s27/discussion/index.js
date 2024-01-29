// console.log('Hello World');
//An array in programming is simply a list of data. Let's write the example earlier:

let studentNumberA = '2020-1923';
let studentNumberB = '2020-1924';
let studentNumberC = '2020-1925';
let studentNumberD = '2020-1926';
let studentNumberE = '2020-1927';

//Now, with an array, we can simply write the code above like this:
let studentNumbers = ['2020-1923', '2020-1924', '2020-1925', '2020-1926', '2020-1927'];

//[SECTION] Arrays
/*
    - Arrays are used to store multiple related values in a single variable
    - They are declared using square brackets ([]) also known as "Array Literals"
    - Commonly used to store numerous amounts of data to manipulate in order to perform a number of tasks
    - Arrays also provide access to a number of functions/methods that help in achieving this
    - A method is another term for functions associated with an object and is used to execute statements that are relevant to a specific object
    - Majority of methods are used to manipulate information stored within the same object
    - Arrays are also objects which is another data type
    - The main difference of arrays with an object is that it contains information in a form of a "list" unlike objects which uses "properties"
    - Syntax
        let/const arrayName = [elementA, elementB, ElementC...]
*/

// Common examples of arrays
let grades = [98.5, 94.3, 89.2, 90.1];
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'Neo', 'Redfox', 'Gateway', 'Toshiba', 'Fujitsu'];

// Possible use of an array but is not recommended
let mixedArr = [12, 'Asus', null, undefined, {}]; 

console.log(grades);
console.log(computerBrands);
console.log(mixedArr);

// Alternative way to write arrays

let myTasks = [
    'drink html',
    'eat javascript',
    'inhale css',
    'bake sass'
];

//Creating an array with values from variables:
let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1,city2,city3];

console.log(myTasks);
console.log(cities);

//[SECTION] length property

//The .length property allows us to get and set the total number of items in an array.

console.log(myTasks.length); 
console.log(cities.length);

let blankArr = [];
console.log(blankArr.length); 


//length property can also be used with strings. Some array methods and properties can also be used with strings.

let fullname = "Jamie Noble";
console.log(fullname.length);

//length property on strings shows the number of characters in a string. Spaces are counted as characters in strings.


//length property can also set the total number of items in an array, meaning we can actually delete the last item in the array or shorten the array by simply updating the length property of an array.

myTasks.length = myTasks.length-1;
console.log(myTasks.length);
console.log(myTasks);

//To delete a specific item in an array we can employ array methods (which will be shown in the next session) or an algorithm (set of code to process tasks).

//Another example using decrementation:
cities.length--;
console.log(cities);

//We can't do the same on strings, however.
fullname.length = fullname.length-1;
console.log(fullname.length);
fullname.length--;
console.log(fullname);

//If you can shorten the array by setting the length property, you can also lengthen it by adding a number into the length property. Since we lengthen the array forcibly, there will be another item in the array, however, it will be empty or undefined. Like adding another seat but having no one to sit on it.

let theBeatles = ["John","Paul","Ringo","George"];
theBeatles.length++
console.log(theBeatles);

// [SECTION] Reading from Arrays
/*
    - Accessing array elements is one of the more common tasks that we do with an array
    - This can be done through the use of array indexes
    - Each element in an array is associated with it's own index/number
    - In JavaScript, the first element is associated with the number 0 and increasing this number by 1 for every element
    - The reason an array starts with 0 is due to how the language is designed
    - Array indexes actually refer to an address/location in the device's memory and how the information is stored
    - Example array location in memory
        Array address: 0x7ffe9472bad0
        Array[0] = 0x7ffe9472bad0
        Array[1] = 0x7ffe9472bad4
        Array[2] = 0x7ffe9472bad8
    - In the example above, the first element and the array itself points to the same memory location and therefore is at 0 elements away from the location of the array itself
    - Syntax
        arrayName[index];
*/
console.log(grades[0]);
console.log(computerBrands[3]);
// Accessing an array element that does not exist will return "undefined"
console.log(grades[20]);

let lakersLegends = ["Kobe","Shaq","LeBron","Magic","Kareem"];
//Access the second item in the array:
console.log(lakersLegends[1]);//Shaq
//Access the fourth item in the array:
console.log(lakersLegends[3]);//Magic

//You can also save/store array items in another variable:
let currentLaker = lakersLegends[2];
console.log(currentLaker);


//You can also reassign array values using the items' indices
console.log('Array before reassignment');
console.log(lakersLegends);
lakersLegends[2] = "Pau Gasol";
console.log('Array after reassignment');
console.log(lakersLegends);

//Accessing the last element of an array
//Since the first element of an array starts at 0, subtracting 1 to the length of an array will offset the value by one allowing us to get the last element.

let bullsLegends = ["Jordan","Pippen","Rodman","Rose","Kukoc"];

let lastElementIndex = bullsLegends.length - 1;

console.log(bullsLegends[lastElementIndex]);

//You can also add it directly:
console.log(bullsLegends[bullsLegends.length-1]);


//Adding Items into the Array

//Using indices, you can also add items into the array.

let newArr = [];
console.log(newArr[0]);

//newArr[0] is undefined because we haven't yet defined the item/data for that index, we can update the index with a new value:
newArr[0] = "Cloud Strife";
console.log(newArr);

console.log(newArr[1]);
newArr[1] = "Tifa Lockhart";
console.log(newArr);

//You can also add items at the end of the array. Instead of adding it in the front to avoid the risk of replacing the first items in the array:
//newArr[newArr.length-1] = "Aerith Gainsborough"; - will overwrite the last item instead.
newArr[newArr.length] = "Barrett Wallace";
console.log(newArr);


//Looping over an Array

//You can use a for loop to iterate over all items in an array.
//Set the counter as the index and set a condition that as long as the current index iterated is less than the length of the array, we will run the condition. It is set this way because the index of an array starts at 0.

for(let index = 0; index < newArr.length; index++){

    //You can use the loop counter as index to be able to show each array items in a console log.
    console.log(newArr[index]);

}

//Given an array of numbers, you can also show if the following items in the array are divisible by 5 or not. You can mix in an if-else statement in the loop:

let numArr = [5,12,30,46,40];

for(let index = 0; index < numArr.length; index++){

    if(numArr[index] % 5 === 0){

        console.log(numArr[index] + " is divisible by 5");

    } else {

        console.log(numArr[index] + " is not divisible by 5");

    }

}


// [SECTION] Multidimensional Arrays
/*
    - Multidimensional arrays are useful for storing complex data structures
    - A practical application of this is to help visualize/create real world objects
    - Though useful in a number of cases, creating complex array structures is not always recommended.
*/

let chessBoard = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
];

console.log(chessBoard);

// Accessing elements of a multidimensional arrays
console.log(chessBoard[1][4]);

console.log("Pawn moves to: " + chessBoard[1][5]);