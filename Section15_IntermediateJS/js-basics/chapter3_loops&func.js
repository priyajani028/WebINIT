// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)



/*
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}
*/


// while loop
/*
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
while(i<n){
  console.log(i)
  i++;
}
*/
// while loop
let num = prompt("Enter the value of num")
num = Number.parseInt(num)

let i = 10;
do{
  console.log(i)
  i++;
}while (i < num) 


//functions
const hello=()=>{
    console.log("Hey how r u");
    return "hi";
}
let v = hello();
/*
function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
  }
  
  const sum = (p, q) => {
    return p + q
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  
  console.log(v)
  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  console.log(sum(9, 7))
  */