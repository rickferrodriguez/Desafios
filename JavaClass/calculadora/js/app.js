// console.log('Aplicación calculadora');
function sumar(){
    const forma = document.forms['forma'];
    let operandoA =forma['operandoA'], operandoB =forma['operandoB'];
    let result = document.getElementById('resultado');
    let total = parseInt(operandoA.value) +parseInt(operandoB.value); 
    if(isNaN(total) ){
        total = result.innerHTML = 'por favor agregar un valor';
    }
    else{
        total =result.innerHTML= `El total es: ${total}`;
    }
    console.log(total);
}
