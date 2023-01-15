const $pre_val = document.getElementById('pre-val')
const $ingre_val = document.getElementById('ingre-val')
const $egre_val = document.getElementById('egre-val')
const $percent_val = document.getElementById('percent-val')
const $add_btn = document.getElementById('add-btn')
const $inner_ing = document.getElementById('inner-ing')
const $inner_egre = document.getElementById('inner-egre')

let presupuesto = 2300
const ingresos = []
const egresos = []

$add_btn.addEventListener('click', () => {
    const $input_selector = document.getElementById('selector').selectedIndex
    const $input_desc = document.getElementById('desc-el').getValue()
    const $input_valor = document.getElementById('valor-el').getValue()
    if($input_selector === 0 && $input_desc != '' && $input_valor != ''){
        let ing_val = { desc: $input_desc, valor: $input_valor}
        ingresos.push(ing_val)
        alert($input_selector.selectedIndex)
    }
})

$pre_val.innerHTML = `$ ${presupuesto.toFixed(2)}`


