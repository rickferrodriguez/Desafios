// console.log('Aplicación calculadora');

let sumado = [
    {valor1: 0,valor2: 0}
];
let valor1 = sumado.map(function(suma){
    return parseInt(suma.valor1);
});
// porque necesito saber si voy a continuar con la operación o no
const orden = [];
let total = 0;
function numerosText(numero){
    let texto = document.getElementById('input-texto');
    if(sumado.length > 0 && texto.value != '' && orden.length > 0){
        texto.value = numero;
        // necesito cambiar su valor para continuar escribiendo nuevos numeros
        orden.splice(0,1);
        console.log(orden);
    }
    else
        texto.value = texto.value + (numero);
}

function operacion(vari){
    let texto = document.getElementById('input-texto');
    console.log(`este es el valor 1: ${valor1.length}`);
    if(valor1 == 0){
        valor1.splice(0,1,parseInt(texto.value))
        texto.value = '';
        console.log(`este es mi valor 1: ${valor1}`);
    }
    else if(sumado.valor2 == 0){
        let elValor = sumado.map(function(valor){
            if (vari == '+')
            {
                orden.push(vari);
                total = parseInt(valor) + parseInt(texto.value); 
                texto.value = total;
                sumado.splice(0,1, total);
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
            else if(vari == '='){
                console.log(orden)
                for(let i = 0; i < sumado.length; i++){
                    let valor = sumado[i];
                    if (orden == '+')
                    {
                        total = parseInt(valor) + parseInt(texto.value); 
                        texto.value = total;
                        sumado.splice(0,1, 0);
                        console.log(sumado);
                    }
                    else if (orden == '-')
                    {
                        total = parseInt(valor) - parseInt(texto.value); 
                        texto.value = total;
                        sumado.splice(0,1, total);
                        console.log(sumado);
                    }
                    else if (orden == '*')
                    {
                        total = parseInt(valor) * parseInt(texto.value); 
                        texto.value = total;
                        sumado.splice(0,1, total);
                        console.log(sumado);
                    }
                    else if (orden == '/')
                    {
                        total = parseInt(valor) / parseInt(texto.value); 
                        texto.value = total;
                        sumado.splice(0,1, total);
                        console.log(sumado);
                    }
                }
                console.log(elValor);
            }
        });
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
