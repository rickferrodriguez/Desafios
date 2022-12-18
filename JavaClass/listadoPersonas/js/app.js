const content = [];

function anadir(){
    let elnombre =document.forms["form"]["nombre"];
    let elapellido =document.forms["form"]["apellido"];
    let resultados = document.getElementById("resultados");
    let complete = {"nombre": elnombre.value, "apellido": elapellido.value}
    content.push(complete);
    if(content.length > 0){
        let miResultado = content.map(resultado => {
            return resultados.innerText = `${resultado.nombre} ${resultado.apellido}`;
        })
        console.log(miResultado);
    }
}
