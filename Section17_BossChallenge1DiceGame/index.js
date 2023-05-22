var num1= Math.floor(Math.random() * 6) + 1
console.log(num1);

var num2= Math.floor(Math.random() * 6) + 1
console.log(num2);


document.querySelector(".img1").setAttribute("src",`./images/dice${num1}.png`);
document.querySelector(".img2").setAttribute("src",`./images/dice${num2}.png`);



if(num1>num2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(num1===num2){
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}