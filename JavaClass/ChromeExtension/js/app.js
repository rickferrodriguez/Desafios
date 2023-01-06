
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const $input_el = document.getElementById('input-el');
const $input_btn = document.getElementById('input-btn');
const $ul_el = document.getElementById('ul-el');

$input_btn.addEventListener("click", function (){
    myLeads.push($input_el.value);
    console.log(myLeads);
})

for (let i = 0; i < myLeads.length; i++) {
    $ul_el.innerHTML += `<li>${myLeads[i]}</li>`;
}
