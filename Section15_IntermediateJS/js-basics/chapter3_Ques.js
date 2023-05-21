//Q1 program to print the marks if a student in an obj 

let student={
    harry: 98,
    rohan: 70,
    aakash:7

}
//Object.keys(marks) array dega harry , rohan sabki
for(let i=0;i<Object.keys(student).length;i++){
    console.log(student[i]); //Object.keys(student)[i]
}

//Q2 using for in loop  (above question)
let a=0;
for(a in student){
    console.log(student[a]);
}

//Q3 print "try again" till user prints correct value
let ans=5;
let reply;
while(reply!=ans){
    console.log('try again');
    reply=prompt("enter correct answer")
}

//Q4 function to find mean of 5 numbers

const mean=(array)=>{
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return (sum/array.length);
}
let arr=[1,2,3,4,5];
let q4=mean(arr);
console.log(q4);