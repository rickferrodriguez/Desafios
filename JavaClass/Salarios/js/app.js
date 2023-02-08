// DOM
// Formulario
const $ul_list = document.querySelector('#ul-list')
const $mostrar = document.querySelector('#mostrar')
const $inp_nombre_persona = document.querySelector('#inp-nombre-persona')
const $nombre_person = document.querySelector('#nombre-person')
const $btn_before = document.querySelector('#btn-before')
const $btn_after = document.querySelector('#btn-after')

//

const buscarPersona = (persona) => {
    return salarios.find(sal => sal.name === persona)
}

const arraySalarios = (persona) => {
    const salario = buscarPersona(persona).trabajos.map(per => {
        return per.salario
    })
    return salario
}

const personasSalarios = () => {
    const nombres = salarios.map(sal => sal.name)
    const arrSalPersona = nombres.map( nom => {
        const pSalarios = arraySalarios(nom)
        return { nombre: nom, salario: pSalarios}
    })
    return arrSalPersona
}

let contador = 0
const mostrarBuscador = ({persona, next, before }) => {
    let salario 
    let nombre = ''
    let texto = ''
    if(persona) {
        personasSalarios().forEach((per, index) => {
            if(per.nombre === persona){
                nombre = per.nombre
                salario = per.salario
                contador = index
            }
        })
    } else if(next == 'aft' && contador < (personasSalarios().length - 1)){
        contador ++
        nombre = personasSalarios()[contador].nombre
        salario = personasSalarios()[contador].salario
    } else if(before == 'bef' && contador > 0){
        contador --
        nombre = personasSalarios()[contador].nombre
        salario = personasSalarios()[contador].salario
    } 

    nombre = personasSalarios()[contador].nombre
    salario = personasSalarios()[contador].salario
    salario.forEach(sal => {
        texto += `<li>${sal}</li>`
    })
    $ul_list.innerHTML = texto
    $nombre_person.textContent = nombre
}




$mostrar.addEventListener('click', () => {
    const valor =$inp_nombre_persona.value
    mostrarBuscador({persona:valor})
})

$btn_before.addEventListener('click', () => {
    let texto = 'bef'
    mostrarBuscador({persona:undefined,before:texto})
})

$btn_after.addEventListener('click', () => {
    let texto = 'aft'
    mostrarBuscador({persona:undefined,next:texto})
})
