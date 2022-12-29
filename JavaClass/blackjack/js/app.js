let firstCard = 10;
let secondCard = 4;
const cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = "";
let $message = document.getElementById("message-el");
// let $sum = document.getElementById("sum-el");
// Esta es otra forma de traer elementos del DOM
let $sum = document.querySelector("#sum-el");
let $cards = document.querySelector("#cards-el");

function startGame(){
    renderGame();
}

function renderGame(){
    // necesito este texto por defecto al momento de llamar al juego
    $cards.textContent = "Cards: ";
    // la llamo a esta función porque necesito renderizarla aquí
    $sum.textContent = `Sum: ${sum}`;
    for (let i = 0; i < cards.length; i++) {
        $cards.textContent += `${cards[i]} `;
    }
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
    let theCard = 6;
    sum += theCard;
    cards.push(theCard);
    startGame(newCard);
}

