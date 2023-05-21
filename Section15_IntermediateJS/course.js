var n=Math.random();
n= n*6;
n= Math.floor(n)+1;
console.log(n);

var name1,name2;
name1=prompt("Enter name1:");
name2=prompt("Enter name2:");
var lovescore =Math.random();
lovescore=lovescore*100;
lovescore= Math.round(lovescore)+1;
alert(name1+" "+ name2+" "+lovescore+ "%");

if(lovescore===100){
    alert("Wow!!");
}
if(lovescore>=50 && lovescore<=80){
    alert("hmm!!");
}

//  Comparators and Equality
//  === is equal to
//   !== not equal to
//  >
//  <
//  >=
//  <==


var a=1;
var b="1";
console.log(typeof(a));
console.log(typeof(b));
if(a==b){
    console.log("yes"); //this will work
}
else{
    console.log("no");
}


if(a===b){
    console.log("yes");
}
else{
    console.log("no"); //this will work
}

var names=["Priya","Jack","Pika"];
var guest=prompt("Enter name:");
if(names.includes(guest)){
    alert("Welcome");
}
else{
    alert("Gomen");
}

var output=[];
var count=1;
function FizzBuzz(){
    if(count%3===0 && count%5===0 ){
        output.push("FizzBuzz");
    }
    else if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
    count++;
    console.log(output);
    if(count<=100){
        FizzBuzz();
    }
}
FizzBuzz();