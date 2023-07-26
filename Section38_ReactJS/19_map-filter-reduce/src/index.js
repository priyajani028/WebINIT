import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);

//-----------------------------

// var newNumbers = [];

// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

//-----------------------------
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function(num){
//   return num > 10
// })

//Reduce - Accumulate a value by doing something to each item in an array.

//aam zindagi

// var newNumbers=0;

// numbers.forEach(function(currentNumber){
//   newNumbers+=currentNumber;
// })

//mentos zindagi
// var newNumbers = numbers.reduce(function(accumulator, currentNumber){
//   return accumulator + currentNumber;
// })

//accumulator is first 3 and currentNumber is 56
//then accumulator becomes 59 and currentNumber is 2 and so on...

//Find - find the first item that matches from an array.

const newNumber = numbers.find(function (num) {
  return num > 10;
});

//FindIndex - find the index of the first item that matches.
const newNumberIndex = numbers.findIndex(function (num) {
  return num > 10;
});

// console.log(newNumberIndex);

const str = emojipedia.map(function (term) {
  return term.meaning.substring(0, 5);
});
console.log(str);
