let cards = [];
let cartas = [
    { number: 11, imageUrl: 'images/1.png'},
    { number: 2, imageUrl: 'images/2.png'},
    { number: 3, imageUrl: 'images/3.png'},
    { number: 4, imageUrl: 'images/4.png'},
    { number: 5, imageUrl: 'images/5.png'},
    { number: 6, imageUrl: 'images/6.png'},
    { number: 7, imageUrl: 'images/7.png'},
    { number: 8, imageUrl: 'images/8.png'},
    { number: 9, imageUrl: 'images/9.png'},
    { number: 10, imageUrl: 'images/10.png'},
    { number: 10, imageUrl: 'images/j.png'},
    { number: 10, imageUrl: 'images/q.png'},
    { number: 10, imageUrl: 'images/k.png'},
]
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let $message = document.getElementById("message-el");
// let $sum = document.getElementById("sum-el");
// Esta es otra forma de traer elementos del DOM
let $sum = document.querySelector("#sum-el");
let $cards = document.querySelector("#cards-el");
let $contcards = document.querySelector("#cont-cartas")

// creating objects
let player = {
    name : "Rich",
    chips : 145
}
let $playerEl = document.querySelector("#player-el");
$playerEl.textContent = `${player.name}: $${player.chips}`

function startGame(){
    if(player.chips === 0){
        $message.textContent = "You Don't have chips to play!"
    } else {
        isAlive = true;
        hasBlackJack = false;
        // iniciar las variables de las dos cartas dentro de esta función para que el juego no venga con cartas por defecto al iniciar
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard.number + secondCard.number;
        console.log(player.chips)
        renderGame();
    }
}

function renderGame(){
    // necesito este texto por defecto al momento de llamar al juego
    $cards.textContent = "Cards: ";
    $sum.textContent = `Sum: ${sum}`;
    $contcards.textContent = ``
    $playerEl.textContent = `${player.name}: $${player.chips}`
    for (let i = 0; i < cards.length; i++) {
        $cards.textContent += `${cards[i].number} `;
        let cont = document.getElementById("cont-cartas");
        const img_element = document.createElement('img')
        img_element.classList.add('img-card');
        img_element.src = cards[i].imageUrl;
        cont.appendChild(img_element);
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack! 🥳"
        hasBlackJack = true;
        player.chips += 5;
        $playerEl.textContent = `${player.name}: $${player.chips}`
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
        player.chips -= 5;
        $playerEl.textContent = `${player.name}: $${player.chips}`
    }
    $message.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let theCard = getRandomCard();
        sum += theCard.number;
        cards.push(theCard);
        renderGame();
    } 
}

// function getRandomNumber() {
//     // Math.floor : removes the decimals
//     // Math.random : returns random number between 0 and 13
//     let random =Math.floor(Math.random() * 13)+ 1;
//     if (random > 10) {
//         return 10
//     } else if (random === 1) {
//         return 11
//     } else {
//         return random
//     }
//     // con el '+1' se le indica que va a empezar desde el uno, pero en realidad se le está sumando un valor al generador de numeros
// }

function getRandomCard() {
    let random = Math.floor(Math.random() * cartas.length)
    let miCarta = cartas[random]
    return miCarta
}
