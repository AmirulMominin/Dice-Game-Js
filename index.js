var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].src = randomImage1;
document.querySelectorAll("img")[1].src = randomImage2;
if (randomNumber1 > randomNumber2){
    document.querySelector(".result").innerHTML = "Player 1 is the Winer"
}
else if (randomImage1 == randomImage2){
    document.querySelector(".result").innerHTML = "Hurray! Draw"
}
else{
    document.querySelector(".result").innerHTML = "Player 2 is the Winer"
}
function nice(){
    location.reload();

}
