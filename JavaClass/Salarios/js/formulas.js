const Formulas = {}

const mediaPar = (a, b) => {
    let suma = a +b
    let div = suma / 2
    return div
}

Formulas.calcularMediana = function calculateMediana(arr) {
    const esPar = !(arr.length % 2)
    const arrOrd = arr.sort((a,b)=> a-b)
    let mediana
    console.log(arr)
    if(esPar) {
        console.log('esPAr')
        let indiceDespues = Math.round(arr.length / 2)
        let indiceAnterior = indiceDespues - 1
        mediana =mediaPar(arrOrd[indiceDespues], arr[indiceAnterior])
    } else {
        let indiceGeneral = Math.round(arrOrd.length / 2)
        mediana =arrOrd[indiceGeneral]
    }
    return mediana
}

Formulas.calcularMedia = function calculateMedia(arr) {
    const sumado = arr.reduce((a,b)=> a +b)
    const media = sumado / (arr.length)
    return media
}

Formulas.calcularModa = function calculateModa(arr) {
    let contador = {}
    arr.forEach(a => {
        if(!contador[a]){
            contador[a] = 1
        } else {
            contador[a] ++
        }
    })

    const mappedArray = Object.entries(contador).map(entry => {
        const [key,value] = entry
        return {key,value}
    })
    const organizado = mappedArray.sort((a,b) => b.value - a.value)

    const modas = [organizado[0]]

    organizado.forEach((o, index, arr) => {
        let adelante = arr[index + 1]
        let mayor = modas[0]
        console.log(mayor.value)
        if(adelante != undefined && adelante.value == mayor.value){
            modas.push(adelante)
        }
    })
    console.log(modas[0].key)

    if(modas.length > 1) {
        let text = `La moda se repitió ${modas.length} veces y son: `
        modas.forEach((o) => {
            text += `${o.key}, `
        })
        return text
    } else {
        text = ` La moda es: ${modas[0].key}`
        return text
    }

}

