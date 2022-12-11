// console.log('Aplicación calculadora');
function numerosText(numero){
    let texto = document.getElementById('elTexto');
    if(numero == 1){
        texto.value = texto.value + (numero);
    }
    else if(numero == 2){
        texto.value = texto.value + (numero);
    }
    else if(numero == 3){
        texto.value = texto.value + (numero);
    }
    else if(numero == 4){
        texto.value = texto.value + (numero);
    }
    else if(numero == 5){
        texto.value = texto.value + (numero);
    }
    else if(numero == 6){
        texto.value = texto.value + (numero);
    }
    else if(numero == 7){
        texto.value = texto.value + (numero);
    }
    else if(numero == 8){
        texto.value = texto.value + (numero);
    }
    else if(numero == 9){
        texto.value = texto.value + (numero);
    }
    console.log(texto);
}
function operacion(vari){
    const forma = document.forms['forma'];
    let operandoA =forma['operandoA'], operandoB =forma['operandoB'];
    let result = document.getElementById('resultado');
    let total = 0;
    if(vari == '+'){
        total = parseInt(operandoA.value) +parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '-'){
        total = parseInt(operandoA.value) -parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '*'){
        total = parseInt(operandoA.value) * parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else{
        total = parseInt(operandoA.value) / parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    
    try{
        if (operandoA.value == '') throw 'El campo "valor A" se encuentra vacio';
        if (operandoB.value == '') throw 'El campo "valor B" se encuentra vacio';
    }catch(err){
        total = result.innerHTML = err;
    }
    console.log(total);
}
