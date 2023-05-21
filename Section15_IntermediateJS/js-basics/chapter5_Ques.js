//Q1 create array of numbers and take input from user to add numbers to this array
let arr=[1,2,3,4,5];
// let a=prompt("Enter a number");
// a=Number.parseInt(a);
// arr.push(a);
// console.log(arr);



//Q2 keep adding numbers to the array in Q1 until 0 is added to the array
let v;
do{
    v=prompt("Enter a number");
    a=Number.parseInt(v);
    arr.push(v);
}while(v!=0);
console.log(arr);

//Q3 filter for numbers divisible by 10 from given array
let newArr=arr.filter((x)=>{
    return x%10==0
})
console.log(newArr);


//Q4 create an array of square of given numbers
let sq=arr.map((x)=>{
    return x*x
})

//Q5 use reduce to calculate factorial of a given number from array of first n natural numbers.
let arrFact=[1,2,3,4,5];
let fact=arrFact.reduce((x1,x2)=>{
    return x1*x2;
})

console.log(fact);