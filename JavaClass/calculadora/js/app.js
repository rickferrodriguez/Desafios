// console.log('Aplicación calculadora');

const sumado = [];
// sirve para saber si voy a sumar algo mas o no
const orden = [];
let total = 0;
function numerosText(numero){
    let texto = document.getElementById('input-texto');
    if(sumado.length > 0 && texto.value != '' && orden.length > 0){
        texto.value = numero;
        // significa que estoy esperando una suma y necesito remplazar el texto con el total para realizar una operación nuevamente
        orden.splice(0,1);
        console.log(orden);
    }
    else
        return texto.value = texto.value + (numero);
    // console.log(texto);
}
function operacion(vari){
    let texto = document.getElementById('input-texto');
    if(sumado.length == 0){
        sumado.push(texto.value)
        texto.value = '';
        console.log(sumado)
    }
    else if(sumado.length > 0){
        for(let i = 0; i < sumado.length; i++){
            let valor = sumado[i];
            if (vari == '+')
            {
                total = parseInt(valor) + parseInt(texto.value); 
                texto.value = total;
                sumado.splice(0,1, total);
                orden.push(vari);
                console.log(sumado);
            }
            else if (vari == '-')
            {
                total = parseInt(valor) - parseInt(texto.value); 
                texto.value = total;
                sumado.splice(0,1, total);
                orden.push(vari);
                console.log(sumado);
            }
            else if (vari == '*')
            {
                total = parseInt(valor) * parseInt(texto.value); 
                texto.value = total;
                sumado.splice(0,1, total);
                orden.push(vari);
                console.log(sumado);
            }
            else if (vari == '/')
            {
                total = parseInt(valor) / parseInt(texto.value); 
                texto.value = total;
                sumado.splice(0,1, total);
                orden.push(vari);
                console.log(sumado);
            }
        }
    }
    else if(vari == '='){
            total;
            texto.value = total;
            sumado.splice(0)
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
