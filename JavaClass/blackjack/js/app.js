let firstCard = 10;
let secondCard = 1;
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = "";
let $message = document.getElementById("message-el");
// let $sum = document.getElementById("sum-el");
// Esta es otra forma de traer elementos del DOM
let $sum = document.querySelector("#sum-el");
let $cards = document.querySelector("#cards-el");

function startGame(myCard){
    $sum.textContent = `Sum: ${sum}`;
    $cards.textContent = `Cards: ${firstCard} - ${secondCard} - N: ${myCard}`;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack! 🥳"
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    $message.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck");
    let newCard = 2;
    sum += newCard;
    startGame(newCard);
}

