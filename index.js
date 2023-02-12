// Selecting a random dice image 1 
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var randomImages = "images/dice" + randomNumber1 + ".png";
    
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImages);





// Selecting a random dice image 2 
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

var randomImages2 = "images/dice" + randomNumber2 + ".png";
    
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImages2);




// Which player wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
};