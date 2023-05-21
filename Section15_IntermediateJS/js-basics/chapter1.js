// Chapter 1 - Q1 create variable (string type) and try to add number to it.
let a = "Harry"
let b = 6
console.log(a + b)

// Chapter 1 - Q2 use typeof operator to the above question
console.log(typeof (a+b))

// Chapter 1 - Q3 create const obj in js. can you change it to hold number later?
//ans=no
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 45
// a1 = {}

// Chapter 1 - Q4 try to add a new key to the const obj in que3. is it possible?
//ans=yes
//const is a1 which means a1 is reference to this object and properties inside can be added, deleted and modify as well.
a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1)

// Chapter 1 - Q5 create a word-meaning dictionary of 5 words.
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka']);