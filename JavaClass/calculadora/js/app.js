// console.log('Aplicación calculadora');
function sumar(){
    const forma = document.forms['forma'];
    let a =forma.elements.operandoA.getValue;
    let b = forma.elements.operandoB.getValue;
    let total = a + b;
    console.log(`El total es:${total}`)
    return total;
}
