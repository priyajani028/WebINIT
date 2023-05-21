//Q1
console.log("har\"".length);

//Q2 includes, starts with & ends with functions
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the sentence`);


//Q3 string to lowercase
console.log(word.toLowerCase());

//Q4 amount extraction from string
let str="abc gives Rs 100";
//let amount=str.slice("abc gives Rs 100".length);  find length
let amount = Number.parseInt(str.slice(15))
console.log(amount)
//Q5 change 4th character 
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable