const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('karlas', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function anadir(){
    let nombre = document.forms['form']['nombre'].value;
    let apellido = document.forms['form']['apellido'].value;
    if(nombre != '' && apellido != ''){
    personas.push(new Persona(nombre,apellido));
    console.log(personas)
    mostrarPersonas();
    }
    else {
        alert("No hay información que agregar");
    }
}
