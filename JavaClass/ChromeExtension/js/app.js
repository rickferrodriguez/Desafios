
let myLeads = [];
const $input_el = document.getElementById('input-el');
const $input_btn = document.getElementById('input-btn');
const $ul_el = document.getElementById('ul-el');

$input_btn.addEventListener("click", function (){
    myLeads.push($input_el.value);
    $input_el.value = ""
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
