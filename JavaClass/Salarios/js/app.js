// DOM
// Formulario
const $ul_list = document.querySelector('#ul-list')
const $mostrar = document.querySelector('#mostrar')
const $inp_nombre_persona = document.querySelector('#inp-nombre-persona')
const $nombre_person = document.querySelector('#nombre-person')

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
    console.log(arrSalPersona)
    return arrSalPersona
}

const mostrarBuscador = (persona) => {
    let salario 
    let nombre = ''
    let texto = ''
    personasSalarios().forEach(per => {
        if(per.nombre === persona){
            nombre = per.nombre
            salario = per.salario
        }
    })
    salario.forEach(sal => {
        texto += `<li>${sal}</li>`
    })
    $ul_list.innerHTML = texto
    $nombre_person.textContent = nombre
}

$mostrar.addEventListener('click', () => {
    const valor =$inp_nombre_persona.value
    mostrarBuscador(valor)
})

personasSalarios()
