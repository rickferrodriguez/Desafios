// DOM
// Formulario
const $ul_list = document.querySelector('#ul-list')
const $mostrar = document.querySelector('#mostrar')
const $inp_nombre_persona = document.querySelector('#inp-nombre-persona')
const $nombre_person = document.querySelector('#nombre-person')
const $btn_before = document.querySelector('#btn-before')
const $btn_after = document.querySelector('#btn-after')
const $media_el = document.querySelector('#media-el')
const $mediana_el = document.querySelector('#mediana-el')
const $moda_el = document.querySelector('#moda-el')
//
//Formulario empresa
const $inp_emp_name = document.querySelector('#inp-emp-name')
const $inp_emp_year = document.querySelector('#inp-emp-year')
const $btn_emp_buscar = document.querySelector('#btn-emp-buscar')
const $media_el_emp = document.querySelector('#media-el-emp')
const $mediana_el_emp = document.querySelector('#mediana-el-emp')
const $moda_el_emp = document.querySelector('#moda-el-emp')

// const buscarPersona = (persona) => {
//     return salarios.find(sal => sal.name === persona)
// }
const buscarNombre = (arr, nombre) => {
    return arr.find(e => e.name === nombre)
}

const arraySalarios = (arr,persona) => {
    // const salario = buscarPersona(persona).trabajos.map(per => {
    //     return per.salario
    // })
    const salario = buscarNombre(arr,persona).trabajos.map(per => {
        return per.salario
    })
    return salario
}


const personasSalarios = (arr) => {
        const nombres = arr.map(sal => sal.name)
        const arrSalPersona = nombres.map( nom => {
            const pSalarios = arraySalarios(arr,nom)
            return { nombre: nom, salario: pSalarios}
        })
        return arrSalPersona
}

const nuevoArray = () => {
    let empresas = {}
    for (const persona of salarios) {
        let miTrabajo = persona.trabajos
        for (const trabajo of miTrabajo) {
            const {year, empresa, salario} = trabajo
            empresas[empresa] ??= {}
            empresas[empresa][year] ??= []
            empresas[empresa][year].push(salario) 
        }
    }
    return empresas
}

const empresasSalario = ({nombre, year}) => {
    const arrGeneral = nuevoArray()
    const salario = []
    Object.entries(arrGeneral).forEach(entry => {
        const [key, value] = entry
        if(key == nombre && year != ''){
            Object.entries(value).forEach(entry2 =>{
                const [key, value] = entry2
                if(key == year){
                    salario.push(value)
                }
            })
        } else if(key == nombre && year == ''){
            salario.push(value)
        }
    })
    return salario
}

const allEmpresasSalarios = () => {
    const arrGeneral = nuevoArray()
    const yearSalarios = Object.entries(arrGeneral).map(entry => {
        const [_,value] = entry
        return value
    })
    const years = {}
    yearSalarios.forEach(year => {
        Object.entries(year).map(entry => {
            const [key, value] = entry
            years[key] ??= []
            years[key].push(value)
        })
    })
    const mapped =Object.entries(years).map(entry => {
        const [key, value] = entry
        return {key:key, salario:[value.flat()]}
    })
    return mapped

}
allEmpresasSalarios()


const buscadorPersonas = () => {
    let contador = 0
    let salario 
    let texto = ''
    let nombre = ''
    let arrSalarios = personasSalarios(salarios)
    const mostradorPersonas = ({persona, next, before, year }) => {
        let sumado = ''
        if(persona != undefined) {
            console.log('hay nombre')
            arrSalarios.forEach((per, index) => {
                if(per.nombre === persona){
                    nombre = per.nombre
                    salario = per.salario
                    contador = index
                }
            })
        } 

        if(next == 'aft' && contador < (arrSalarios.length - 1)){
            contador ++
            console.log(contador)
            nombre = arrSalarios[contador].nombre
            salario = arrSalarios[contador].salario
            salario.forEach(sal => {
                sumado += `<li>${sal}</li>`
            })
            texto = sumado
        } 

        if(before == 'bef' && contador > 0){
            contador --
            nombre = arrSalarios[contador].nombre
            salario = arrSalarios[contador].salario
            salario.forEach(sal => {
                sumado += `<li>${sal}</li>`
            })
            texto = sumado
        } 

        $nombre_person.textContent = nombre
        $ul_list.innerHTML = texto

        return salario
    }
    // $nombre_person.textContent = nombre

    nombre = arrSalarios[contador].nombre
    salario = arrSalarios[contador].salario
    salario.forEach(sal => {
        texto += `<li>${sal}</li>`
    })
        $ul_list.innerHTML = texto
    return mostradorPersonas
}

const mostrador = buscadorPersonas()



$mostrar.addEventListener('click', () => {
    const valor =$inp_nombre_persona.value
    let listado =mostrador({persona:valor})
    $mediana_el.textContent = `La mediana de ${valor} es: ${Formulas.calcularMediana(listado)}`
    $moda_el.textContent = `La moda ejecutando ${Formulas.calcularModa(listado)}`
})

$btn_before.addEventListener('click', () => {
    let texto = 'bef'
    const valores = {persona:undefined,before:texto}
    let listado = mostrador(valores)
    $mediana_el.textContent = `La mediana es: ${Formulas.calcularMediana(listado)}`
    $moda_el.textContent = `La moda ejecutando ${Formulas.calcularModa(listado)}`
})

$btn_after.addEventListener('click', () => {
    let texto = 'aft'
    const valores = {persona:undefined,next:texto}
    let listado = mostrador(valores)
    $mediana_el.textContent = `La mediana es: ${Formulas.calcularMediana(listado)}`
    $media_el.textContent = `La media es: ${Formulas.calcularMedia(listado)}`
    $moda_el.textContent = `La moda ejecutando ${Formulas.calcularModa(listado)}`
})

$btn_emp_buscar.addEventListener('click', () => {
    const nameEmpresa =$inp_emp_name.value
    const yearEmpresa =$inp_emp_year.value
    const arrayEmpresa = empresasSalario({nombre : nameEmpresa, year : yearEmpresa})
    $media_el_emp.textContent = `La media de la empresa: ${nameEmpresa} es: ${Formulas.calcularMedia(arrayEmpresa[0])}`
    $mediana_el_emp.textContent =  `La mediana de la empresa: ${nameEmpresa} es: ${Formulas.calcularMediana(arrayEmpresa[0])}`
    $moda_el_emp.textContent = `${Formulas.calcularModa(arrayEmpresa[0])}`
    console.log(arrayEmpresa)
})

