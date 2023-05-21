// Create Snake, Water & Gun game in JavaScript.
// The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert
// Use alert, prompt and confirm wherever required!

const choices='SWG';
let comp= choices.charAt(Math.random()*(choices.length));
console.log(comp);
let playAgain=true;

while(playAgain){
    let user=prompt('Enter one character from S,W or G');
    if(!choices.includes(user)){
        alert('Character must be from S,W or G');
    }
    else if((user=='G'&&comp=='W')||(user=='W'&&comp=='S')||(user=='S'&&comp=='G')){
        alert('You lose');
    }
    else{
        alert('You win');
    }
    playAgain=confirm("Want to play again?");
}

