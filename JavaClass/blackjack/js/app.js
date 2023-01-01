let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let $message = document.getElementById("message-el");
// let $sum = document.getElementById("sum-el");
// Esta es otra forma de traer elementos del DOM
let $sum = document.querySelector("#sum-el");
let $cards = document.querySelector("#cards-el");

// creating objects
let players = {
    name : "Rich",
    chips : 145
}
let $playerEl = document.querySelector("#player-el");
$playerEl.textContent = `${playerName}: $${playerChips}`

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    // iniciar las variables de las dos cartas dentro de esta función para que el juego no venga con cartas por defecto al iniciar
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    // necesito este texto por defecto al momento de llamar al juego
    $cards.textContent = "Cards: ";
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
    if (isAlive === true && hasBlackJack === false) {
        let theCard = getRandomNumber();
        sum += theCard;
        cards.push(theCard);
        renderGame();
    } 
}

function getRandomNumber() {
    // Math.floor : removes the decimals
    // Math.random : returns random number between 0 and 13
    let random =Math.floor(Math.random() * 13)+ 1;
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
        return random
    }
    // con el '+1' se le indica que va a empezar desde el uno, pero en realidad se le está sumando un valor al generador de numeros
}
