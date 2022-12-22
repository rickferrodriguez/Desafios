const saved = [];
let count = 0;
let countEl = document.getElementById('count-el');
let previous = document.getElementById('previous');


function increment(){
    count += 1
    countEl.innerHTML = count;
}

//another way to do this stuff
function save(){
    let both = `${count} -`;
    previous.innerText += both;
}

// function save(){
//     saved.push(parseInt(count));
//     countEl.innerHTML = 0;
//     count = 0;
//     const mapsaved = saved.map(persone => {
//         return persone;
//     })
//     previous.innerHTML =mapsaved;
// }
