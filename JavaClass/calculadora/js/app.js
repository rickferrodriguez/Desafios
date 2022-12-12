// console.log('Aplicación calculadora');
function numerosText(numero){
    let texto = document.getElementById('input-texto');
    const numerosBot = [1,2,3,4,5,6,7,8,9,0];
    for (let i = 0; i < numerosBot.length; i++) {
        let elNumero = numerosBot[i];
        if(numero == elNumero){

            return texto.value = texto.value + (numero);
        }
    }
    console.log(texto);
}
function operacion(vari){
    const forma = document.forms['forma'];
    let operandoB =forma['operando-b'];
    let texto = document.getElementById('input-texto');
    const suma = [];
    const resta = [];
    const multiplicacion = [];
    const division = [];
    let result = document.getElementById('resultado');
    let total = 0;
    if(vari == '+'){
        suma.push(texto);
        // total = parseInt(texto.value) +parseInt(operandoB.value); 
        // total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '-'){
        total = parseInt(texto.value) -parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '*'){
        total = parseInt(texto.value) * parseInt(operandoB.value); 
        total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '='){
        for(let i=0, )
        // total = parseInt(texto.value) * parseInt(operandoB.value); 
        // total =result.innerHTML= `El total es: ${total}`;
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
