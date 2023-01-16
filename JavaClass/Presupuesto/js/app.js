const $pre_val = document.getElementById('pre-val')
let $ingre_val = document.getElementById('ingre-val')
let $egre_val = document.getElementById('egre-val')
let $percent_val = document.getElementById('percent-val')
const $add_btn = document.getElementById('add-btn')
const $inner_ing = document.getElementById('inner-ing')
const $inner_egre = document.getElementById('inner-egre')
const ingre_colors = 'teal-text text-lighten-2'
const egre_colors = 'red-text text-lighten-1'
const rmv_colors = 'red lighten-1'

let presupuesto = 0
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
    } else if ($input_selector === 1 && $input_desc != '' && $input_valor != '') {
        let egre_val = { desc: $input_desc, valor: $input_valor}
        egresos.push(egre_val)
        render(egresos, "EGRESOS",$inner_egre, egre_colors)
    } else {
    alert('Por favor diligencie los campos')
    }
    calcularPresupuesto(ingresos, egresos, $ingre_val, $egre_val)
})

const render = (arr, h3, inner, color) => {
    let text = `<li class="collection-header"><h3 class="${color}">${h3}</h3></li>`
    arr.map( value  =>{
        text += `
        <li class="collection-item row valign-wrapper">
            <div class="col s5">${value.desc}
            </div>
            <div class="col s4">
                <a href="#!" class="secondary-content">
                    ${formatoNumero(value.valor)}
                </a>
            </div>
            <div class="col s1">
                <a id="remove-btn" class="btn-remove btn-floating btn-small waves-effect waves-light ${rmv_colors}">
                    <i class="material-icons">close</i>
                </a>
            </div>
            <div class="col s1"></div>
        </li>
    `
    })
    inner.innerHTML = text
}

const calcularPresupuesto = (arrI, arrE, innerIng, innerEgre) => {
    let sumIngresos = 0
    let sumEgresos = 0
    arrI.map( ingreso =>{
        sumIngresos += parseInt(ingreso.valor
)    })
    arrE.map( egreso => {
        sumEgresos += parseInt(egreso.valor)
    })
    innerIng.innerHTML = formatoNumero(sumIngresos)
    innerEgre.innerHTML = formatoNumero(sumEgresos)
    let sumPresupuesto = sumIngresos - sumEgresos
    $pre_val.innerHTML = `$ ${formatoNumero(sumPresupuesto)}`
    console.log(sumIngresos- sumEgresos)
}

const formatoNumero = (num) => {
    return parseFloat(num).toFixed(2)
}

