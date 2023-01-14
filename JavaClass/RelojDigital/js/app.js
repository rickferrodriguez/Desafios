const $hora = document.getElementById('hora')
const $fecha = document.getElementById('fecha')
const $contenedor = document.getElementById('contenedor')

const mostrarReloj = () => {
    let fecha = new Date()
    let hr = formatoHora(fecha.getHours())
    let min = formatoHora(fecha.getMinutes())
    let seg = formatoHora(fecha.getSeconds())
    $hora.innerHTML = `${hr}:${min}:${seg}`

    const meses = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Sab']
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate()
    let mes = meses[fecha.getMonth()]
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`
    $fecha.innerHTML = fechaTexto
    $contenedor.classList.toggle('animar')
}

// agregando formato a los numeros
const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

// sirve para llamar a una función y que esta se ejecute cada ciertos milisegundos
setInterval(mostrarReloj, 1000)

