const $pre_val = document.getElementById('pre-val')
const $ingre_val = document.getElementById('ingre-val')
const $egre_val = document.getElementById('egre-val')
const $percent_val = document.getElementById('percent-val')
const $input_selector = document.getElementById('selector')
const $input_desc_el = document.getElementById('desc-el')
const $input_valor_el = document.getElementById('valor-el')
const $add_btn = document.getElementById('add-btn')
const $inner_ing = document.getElementById('inner-ing')
const $inner_egre = document.getElementById('inner-egre')

let presupuesto = 2300
const ingresos = []
const egresos = []

$add_btn.addEventListener('click', () => {
    alert($input_selector.selectedIndex)
})

$pre_val.innerHTML = `$ ${presupuesto.toFixed(2)}`


