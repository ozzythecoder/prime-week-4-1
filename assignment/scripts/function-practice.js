console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('August'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('3 + 5 is:', addNumbers(3, 5));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log('3 times 4 times 5 is:', multiplyThree(3,4,5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1];
}

let stuff = [ 'cat', 'rat', 'dog', 'fish'];
let noStuff = [];

console.log(getLast(stuff));
console.log(getLast(noStuff));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}

console.log(find('dog', stuff));
console.log(find('hamster', stuff));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (item of array) {
    sum += item;
  }
  return sum;
}

let numArray = [3, 4, 7, 23, 44]

console.log(numArray);
console.log('Sum of numArray:', sumAll(numArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let posArray = [-3, -1, 0, 4, 8];

function sumPositive(array) {
  let sum = 0;
  for (item of array) {
    if (item > 0) {
      sum += item;
    }
  }
  return sum;
}

console.log(posArray);
console.log('Sum of positive numbers in posArray:', sumPositive(posArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// CodeWars: Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

// My solution:

function digitize(n) {
  n = n.toString(); // Convert number to string for indexing
  let array = []; // Initialize empty array
  for (i = 0; i < n.length; i++) {
    array.unshift(parseInt(n[i])); // Convert each index of the string to a number, and place it at the beginning of the array
  }
  return array;
}

console.log(digitize(54321)); // expecting [1, 2, 3, 4, 5]

// Bonus: Not my solution, but one that inspired me a lot, and that I wanted to try to understand.

// As I understand it:
// Creates an array from the string value of n, (first parameter of .from)
// Maps each index of n as a number (second parameter of .from), and then reverses it.
// A bit advanced for me at the moment, but very elegant.

function digitize2(n) {
  return Array.from(String(n), Number).reverse();
}

console.log(digitize2(65432)); // expecting [2, 3, 4, 5, 6]