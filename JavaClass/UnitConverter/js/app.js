const $input_number = document.getElementById("input-number")
const $btn_convert = document.getElementById("btn-convert")
const $length_el = document.getElementById("length-el")
const $volume_el = document.getElementById("volume-el")
const $mass_el = document.getElementById("mass-el")

const convertions = [
    { "namec" : "meter", "namea" : "feet", "value" : 3.281},
    { "namec" : "liter", "namea" : "galon", "value" : 0.264},
    { "namec" : "kilogram", "namea" : "pound", "value" : 2.204}
]

$btn_convert.addEventListener('click', ()=>{
    let theInput = $input_number.value
    let multiple = convertions.map(convertion =>{
        return parseFloat(convertion.value * theInput).toFixed(3)
    })
    let division = convertions.map( convertion => {
        return parseFloat(theInput / convertion.value).toFixed(3)
    })
    $length_el.innerHTML = `${theInput} meters = ${multiple[0]} feet | ${theInput} feet = ${division[0]} meters`
    $volume_el.innerHTML = `${theInput} liters = ${multiple[1]} gallons | ${theInput} gallons = ${division[1]} liters`
    $mass_el.innerHTML = `${theInput} kilos = ${multiple[2]} pounds | ${theInput} pounds = ${division[2]} kilos`
})
