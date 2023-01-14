const $hora = document.getElementById('hora')
const mostrarReloj = () => {
    let fecha = new Date()
    let hr = fecha.getHours()
    let min = fecha.getMinutes()
    let seg = fecha.getSeconds()
    $hora.innerHTML = `${hr}:${min}:${seg}`
}

// sirve para llamar a una función y que esta se ejecute cada ciertos milisegundos
setInterval(mostrarReloj, 1000)

