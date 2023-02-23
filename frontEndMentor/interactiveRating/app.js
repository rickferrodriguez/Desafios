const $rating_group = document.querySelector('.rating-group')
const $submit_rate = document.querySelector('#submit')
const numeros = [1,2,3,4,5]

const imprimirBotones = () => {
    let texto = ''
    numeros.forEach((num,index) => {
        texto += `<a id='number${index}' class="rating" 
            onclick="seleccionado()">
                    ${num}
                </a>`
    })
    $rating_group.innerHTML = texto
}

imprimirBotones()

const $selection_submited = document.querySelector('.selection-submited')
const seleccionado = () => {
    const num = this.event.target.innerText
    const $number = document.querySelector(`#number${num-1}`)
    $number.toggleAttribute('seleccion')
    $selection_submited.textContent = `You selected ${num} aut of 5`
}

const $feedback_card = document.querySelector('.feedback-card')
const $submited = document.querySelector('.submited')
const mostrar = () => {
    $submit_rate.addEventListener('click', () => {
        $feedback_card.toggleAttribute('oculto')
        $submited.toggleAttribute('oculto')
    })
}

mostrar()








