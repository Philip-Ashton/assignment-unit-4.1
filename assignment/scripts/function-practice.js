console.log('***** Function Practice *****');

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
function helloName(name) {
  name('Philip');
  

}
// Remember to call the function to test
console.log('Hello' + helloName + '!');
helloName;




// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
let result = addNumbers(4, 7);
console.log('result', result);

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  return a * b * c;
}
let time3 = multiplyThree(8, 2, 4);
console.log('Three numbers multiplied is ', time3);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else return false;
  return;
}
console.log (isPostive, 9);
console.log (isPositive, -4);

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
      if (array.length > 0) {
        return array[array.length -1];
      }
    else {
      return 'undefined';
    }

}
console.log (getLast);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  while (array = [4, 8, 12]) {
    if (array = 8) {
      return true;
    } else {
      return false;
    }
  }
}

console.log (find);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(arrayInput) {
  // Declare in the function to start with
  // an empty array every time.
  let positiveNumbers = [];
  for (let num of arrayInput) {
    console.log('num', num);
    if (num > 0) {
      positiveNumbers.push(num);
    }
  }
}

let exampleNumbers = [-4, 10, 2, 0, -100, 4];
let resultNumbers = allPositive(exampleNumbers);
console.log('resultNumbers', resultNumbers);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
