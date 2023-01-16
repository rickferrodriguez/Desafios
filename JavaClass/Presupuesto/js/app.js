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
    const $input_desc = document.getElementById('desc-el').value
    const $input_valor = document.getElementById('valor-el').value
    if($input_selector === 0 && $input_desc != '' && $input_valor != ''){
        let ing_val = { desc: $input_desc, valor: $input_valor}
        ingresos.push(ing_val)
        console.log(ingresos)
        render(ingresos)
    } else if ($input_selector === 1 && $input_desc != '' && $input_valor != '') {
        let egre_val = { desc: $input_desc, valor: $input_valor}
        egresos.push(egre_val)
        console.log(egresos)
    } else {
    alert('Por favor ingrese los campos')
    }
})

const render = (arr) => {
    let text = '<li class="collection-header"><h3 class="teal-text text-lighten-2">INGRESOS</h3></li>'
    arr.map( ingreso  =>{
        text += `
        <li class="collection-item"><div>${ingreso.desc}<a href="#!" class="secondary-content">${ingreso.valor}</a></div></li>
    `
    })
    $inner_ing.innerHTML = text
}

$pre_val.innerHTML = `$ ${presupuesto.toFixed(2)}`


