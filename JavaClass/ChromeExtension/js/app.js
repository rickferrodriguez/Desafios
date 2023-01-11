
let myLeads = [];
const $input_el = document.getElementById('input-el');
const $input_btn = document.getElementById('input-btn');
const $ul_el = document.getElementById('ul-el');

// localStorage.setItem('myKey','myvalue.com')
// console.log(localStorage.getItem('myKey'))
// localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log("my leads from local storge: " + leadsFromLocalStorage)

// verifico gracios a truthy or falsy values if i have something in my local storage and then i call the render method to see the value
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

$input_btn.addEventListener("click", function (){
    myLeads.push($input_el.value);
    $input_el.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li class="li-el">
            <a class="a-el" href="${myLeads}" target="_blank">${myLeads[i]}<a>
        </li>
    `
    }
    $ul_el.innerHTML = listItems;
}

