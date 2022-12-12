// console.log('Aplicación calculadora');
function numerosText(numero){
    let texto = document.getElementById('input-texto');
    return texto.value = texto.value + (numero);
    // console.log(texto);
}
function operacion(vari){
    const forma = document.forms['forma'];
    let operandoB =forma['operandoB'];
    let texto = document.getElementById('input-texto');
    let result = document.getElementById('resultado');
    const sumado = [];
    let total = 0;
    if(vari == '+'){
        total = parseInt(texto.value) +parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '-'){
        total = parseInt(texto.value) -parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '*'){
        total = parseInt(texto.value) * parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else{
        total = parseInt(texto.value) / parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    
    // try{
    //     if (operandoA.value == '') throw 'El campo "valor A" se encuentra vacio';
    //     if (operandoB.value == '') throw 'El campo "valor B" se encuentra vacio';
    // }catch(err){
    //     total = result.innerHTML = err;
    // }
    console.log(total);
}
