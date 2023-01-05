const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let $pass1 = document.getElementById('pass1');
let $pass2 = document.getElementById('pass2');

function randomCharacters() {
    let thecharacter1 = ""
    let thecharacter2 = ""
    for (let i = 0; i < 16; i++) {
        let random1 = Math.floor(Math.random() * characters.length)
        let random2 = Math.floor(Math.random() * characters.length)
        thecharacter1 += characters[random1];
        thecharacter2 += characters[random2];
    }
    $pass1.textContent = thecharacter1
    $pass2.textContent = thecharacter2
}


