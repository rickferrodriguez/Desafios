// console.log('Aplicación calculadora');

const sumado = [];
let total = 0;
function numerosText(numero){
    let texto = document.getElementById('input-texto');
    return texto.value = texto.value + (numero);
    // console.log(texto);
}
function operacion(vari){
    let texto = document.getElementById('input-texto');
    if(vari == '+'){
        sumado.push(texto.value)
        texto.value = '';
        console.log(sumado)
    }
    else if(vari == '-'){
        // total = parseInt(texto.value) -parseInt(operandoB.value); 
        // total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '*'){
        // total = parseInt(texto.value) * parseInt(operandoB.value); 
        // total =result.innerHTML= `El total es: ${total}`;
    }
    else if(vari == '='){
        for(let i = 0; i < sumado.length; i++){
            let valor = sumado[i];
            total = parseInt(total)+ parseInt(valor) ;
            texto.value = total;
        }
        // total = parseInt(texto.value) * parseInt(operandoB.value); 
        // total =result.innerHTML= `El total es: ${total}`;
    }
    else{
        // total = parseInt(texto.value) / parseInt(operandoB.value); 
        // total =result.innerHTML= `El total es: ${total}`;
    }
    
    // try{
    //     if (operandoA.value == '') throw 'El campo "valor A" se encuentra vacio';
    //     if (operandoB.value == '') throw 'El campo "valor B" se encuentra vacio';
    // }catch(err){
    //     total = result.innerHTML = err;
    // }
}
