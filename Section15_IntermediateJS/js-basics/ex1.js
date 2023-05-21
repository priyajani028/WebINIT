//generate random number and store it in a variable. take an input from the user to tell them whether the guess was correct, > or < than a number
//100-(no.of guesses) is the score of the user.
//the number should be btw 1-100
//terminate when number is guessed

let v=Math.floor(Math.random()*100)+1;
let x;
let guess=0;
do{
    x=prompt("Enter a number");
    x=Number.parseInt(x);
    guess++;
    if (x < v) {
        console.log("Try Again:corect Number is Greater by ", v-x);
      } else if (x > v) {
        console.log("Try Again:corect Number is Less than ", x-v);
      } else {
        console.log("Number Guessed Correctly:", v, "in", guess, "th try");
      }
}while(x!=v)

console.log("Score is "+ (100-guess));