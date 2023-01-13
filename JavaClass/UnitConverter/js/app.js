const $input_number = document.getElementById("input-number").value
const $btn_convert = document.getElementById("btn-convert")
const $length_el = document.getElementById("length-el")
const $volume_el = document.getElementById("volume-el")
const $mass_el = document.getElementById("mass-el")

const convertions = [
    { "namec" : "meter", "namea" : "feet", "value" : 3.281},
    { "namec" : "liter", "namea" : "galon", "value" : 0.264},
    { "namec" : "kilogram", "namea" : "pound", "value" : 2.204}
]
let multiple = convertions.map(convertion =>{
    return parseFloat(convertion.value * $input_number).toFixed(3)
})
let division = convertions.map( convertion => {
    return parseFloat($input_number / convertion.value).toFixed(3)
})

$btn_convert.addEventListener('click', ()=>{
    $length_el.innerHTML = `${$input_number} meters = ${multiple[0]} feet | ${$input_number} feet = ${division[0]} meters`
    $volume_el.innerHTML = `${$input_number} liters = ${multiple[1]} gallons | ${$input_number} gallons = ${division[1]} liters`
    $mass_el.innerHTML = `${$input_number} kilos = ${multiple[2]} pounds | ${$input_number} pounds = ${division[2]} kilos`
})
