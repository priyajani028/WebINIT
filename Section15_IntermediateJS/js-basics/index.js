 //comment
 console.log('Hello'); 
 let name1= 'Priya';
 console.log(name1); 
 //variables (to store data temporary)
//can't be reserved keyword
//should be meaningful variables
//can't start with a number(1name)
//can't contain a space or hyphen(-)
//are case-sensitive

let firstName='Priya'; //string literal
let lastName='Jani';

let age=30; //number literal
let isApproved=true; //boolean literal
let noname; //by default, it is undefined.
//explicitly you can give undefined as value using the below keyword
noname=undefined;
let selectedColor=null; //to clear the value of variable, can be assign later

//constant
const interestRate=0.3;

//if u want to reassign something then use let, otherwise use const.


//check the datatype using "typeof" operator in console.

//object literal:
let person={
    name: 'Pinchu',
    age: 30
};

//if you want to change any property of object then,
//method1 Dot notation
person.name='panda';
//method2 bracket notation
person['name']='Mary';

// if we want to change the name of any property then, here is the example.
let fullName= 'name';
person[fullName]='xyz';

console.log(person);
console.log(person.age);


//Arrays -objects in the array and length of the array are dynamic.
let selectedAnimals=['dog','cat'];
//console.log(selectedAnimals);
//console.log(selectedAnimals[0]);

selectedAnimals[2]='cow';
selectedAnimals[3]=123;
console.log(selectedAnimals);
console.log(selectedAnimals.length);


//functions
function greet(){
    console.log('hello');
}
greet();

//functions with parameter
function greetName(name){
    console.log('hello '+name);
}
//argument is given while calling the function
greetName('Daisy');
greetName(); //note: you will get "hello undefined" as you haven't passed any value


function greetFullName(firstName, lastName){
    console.log('hello '+ firstName+ ' '+ lastName);
}
greetFullName('priya','jani');


function square(number){
    return number*number;
}
let num= square(2);
console.log(num);

console.log(square(3)); //2 functions are called here, 1. square function and 2. log function as we use console."log()" , it is also a function
