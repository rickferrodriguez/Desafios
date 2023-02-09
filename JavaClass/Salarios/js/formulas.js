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

