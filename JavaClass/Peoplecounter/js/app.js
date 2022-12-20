const saved = [];
let contador = 0;
let result = document.getElementById('result');
let previous = document.getElementById('previous');


function increment(){
    contador += 1
    result.innerHTML = contador;
}

function save(){
    saved.push(parseInt(contador));
    result.innerHTML = 0;
    contador = 0;
    const mapsaved = saved.map(persone => {
        return persone;
    })
    previous.innerHTML =mapsaved;
}
