//Q1 program using prompt function to take input of age as value from the user and use alert to tell if eligible to drive or not
// let age= prompt("enter your age");
// age=Number.parseInt(age);
// canDrive((a)=>{
//     if (a>=18){
//         return true
//     }
//     else{
//         return false
//     }
// })

// if(canDrive(age)){
//     alert("You can drive");
// }
// else{
//     alert("You can't drive");
// }

//Q2 use confirm to ask user to see the prompt again in Q1
let runAgain=true;
const canDrive=(a)=>{
    if (a>=18){
        return true
    }
    else{
        return false
    }
}

while(runAgain){
    let age= prompt("enter your age");
    age=Number.parseInt(age);
    if (age < 0) {
        console.error("Please enter a valid age");
        break;
      }
    if(canDrive(age)){
        alert("You can drive");
    }
    else{
        alert("You can't drive");
    }
    runAgain=confirm("Want to play again?")
}

//Q3 use console.error to log the error if age is negative

//see above


//Q4 changer url to google.com if user enters a number ?4


// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if (number > 4) {
//   location.href = "https://google.com"
// }



//Q5 change background to yellow or other color based on input through prompt

// let color = prompt("Enter the page background color")
// document.body.style.background = color