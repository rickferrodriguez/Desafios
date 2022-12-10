// console.log('Aplicación calculadora');
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
