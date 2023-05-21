let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)


//array methods
// Array Methods
let num1 = [1, 2, 3, 34, 4]
let b = num1.toString() // b is now a string 
console.log(b, typeof b)
let c = num1.join(" and ")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num1.unshift(78) //returns array length =6
console.log(r, num1)
console.log(r)


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]   
//delete is an operator, it doesn't affect the length 
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)
let numbers=[3,4,2,6,7,2,1,9];
numbers.splice(2,3,100,101,102,103,104);
console.log(numbers);
 //splice function (here) has 7 arguments...1st which index to start, 2nd how many elements to remove, rest are the data values that needs to be feeded from index 2.



let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})


// Array.from 
let name = "Harry"
let array = Array.from(name)
console.log(array)

// for...of 
for (let item of num){
  console.log(item)
}


let arr=[45,23,21];
//why map? map creates a new array and performs action on each element. ForEach function  does the same but doesn't make a new array
let a = arr.map((value,index, array)=>{
    console.log(value,index, array);
    return value+1;
})
console.log(a);


//filter method
let arr2=[45,23,21,0,5,2];
let a2= arr2.filter((a)=>{
    return a<10
})
console.log(a2,arr2);

//reduce method

let arr3=[1,2,3,5,2,1,3];
/*
let newarr3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
*/
const reduce_func= (h1,h2)=>{
    return h1+h2
}
let newarr3=arr3.reduce(reduce_func);

console.log(newarr3);