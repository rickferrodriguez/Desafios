// console.log('Aplicación calculadora');

const sumado = [];
// porque necesito saber si voy a continuar con la operación o no
const orden = [];
let total = 0;
function numerosText(numero){
    let texto = document.getElementById('input-texto');
    if(sumado.length > 0 && texto.value != '' && orden.length > 0){
        texto.value = numero;
        // necesito cambiar su estado para continuar escribiendo nuevos numeros
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
            if (!vari == '')
            {
                // total = parseInt(valor) + parseInt(texto.value); 
                total = eval(`${parseInt(valor)}${vari}${parseInt(texto.value)}`);
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
        texto.value = sumado;
        sumado.splice(0)
        console.log(sumado);
        console.log(orden);
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
