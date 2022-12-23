let counter = 0;
let counterg = 0;
let scoreh = document.getElementById('scoreh');
let scoreg = document.getElementById('scoreg');

function add1(){
    counter += 1;
    scoreh.textContent = counter;
}

function add2(){
    counter += 2;
    scoreh.textContent = counter;
}

function add3(){
    counter += 3;
    scoreh.textContent = counter;
}

function add1g(){
    counterg += 1;
    scoreg.textContent = counterg;
}

function add2g(){
    counterg += 2;
    scoreg.textContent = counterg;
}

function add3g(){
    counterg += 3;
    scoreg.textContent = counterg;
}

function newGame(){
    counterg = 0;
    counter = 0;
    scoreh.textContent = 0;
    scoreg.textContent = 0;
}
