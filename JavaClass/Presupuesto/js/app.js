const $pre_val = document.getElementById('pre-val')
let $ingre_val = document.getElementById('ingre-val')
let $egre_val = document.getElementById('egre-val')
let $percent_val = document.getElementById('percent-val')
const $add_btn = document.getElementById('add-btn')
const $inner_ing = document.getElementById('inner-ing')
const $inner_egre = document.getElementById('inner-egre')
const ingre_colors = 'teal-text text-lighten-2'
const egre_colors = 'red-text text-lighten-1'

let presupuesto = 2300
let ingreso = 0
let egreso = 0
$pre_val.innerHTML = `$ ${presupuesto.toFixed(2)}`
$ingre_val.innerHTML = ingreso
$egre_val.innerHTML = egreso

const ingresos = []
const egresos = []

$add_btn.addEventListener('click', () => {
    const $input_selector = document.getElementById('selector').selectedIndex
    const $input_desc = document.getElementById('desc-el').value
    const $input_valor = document.getElementById('valor-el').value
    if($input_selector === 0 && $input_desc != '' && $input_valor != ''){
        let ing_val = { desc: $input_desc, valor: $input_valor }
        ingresos.push(ing_val)
        render(ingresos, "INGRESOS", $inner_ing, ingre_colors)
        calcularPresupuesto(ingresos, $ingre_val)
    } else if ($input_selector === 1 && $input_desc != '' && $input_valor != '') {
        let egre_val = { desc: $input_desc, valor: $input_valor}
        egresos.push(egre_val)
        render(egresos, "EGRESOS",$inner_egre, egre_colors)
        calcularPresupuesto(egresos, $egre_val)
    } else {
    alert('Por favor diligencie los campos')
    }
})

const render = (arr, h3, inner, color) => {
    let text = `<li class="collection-header"><h3 class="${color}">${h3}</h3></li>`
    arr.map( value  =>{
        text += `
        <li class="collection-item"><div>${value.desc}<a href="#!" class="secondary-content">${value.valor}</a></div></li>
    `
    })
    inner.innerHTML = text
}

const calcularPresupuesto = (arr, inner) => {
    let text_ing = 0
    arr.map(item => {
        text_ing += parseInt(item.valor)
    })
    inner.innerHTML = text_ing.toFixed(2)
}

