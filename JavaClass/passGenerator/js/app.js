const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];


let $pass1 = document.getElementById('pass1');
let $pass2 = document.getElementById('pass2');
let $pass_len = document.getElementById('pass-len');
let $ch_numbers = document.getElementById('ch-number');
let $ch_symbols = document.getElementById('ch-symbols');

function randomCharacters() {
    if($ch_numbers.checked){
        const strings = characters.filter( x => /[^0-9]/.test(x))
        elRecorrido(strings)
    } else if ($ch_symbols.checked) {
        const symbols = characters.filter(x => /[a-zA-Z0-9]/.test(x))
        elRecorrido(symbols)
    } else {
        elRecorrido(characters)
    }
}

function elRecorrido(elArray){
    let thecharacter1 = ""
    let thecharacter2 = ""
    for (let i = 0; i < $pass_len.value; i++) {
        let random1 = Math.floor(Math.random() * elArray.length)
        let random2 = Math.floor(Math.random() * elArray.length)
        thecharacter1 += elArray[random1];
        thecharacter2 += elArray[random2];
    }
    $pass1.textContent = thecharacter1
    $pass2.textContent = thecharacter2
}
