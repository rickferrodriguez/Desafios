const $btn_add = document.getElementById("btn-add")
const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('karla', 'Lara')
]

function mostrarPersonas(){
    console.log('Mostrar personas...')
    let texto = ''
    for (let persona of personas){
        console.log(persona)
        texto += `<li class="collection-item">${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto
}

$btn_add.addEventListener('click', () => {
    let $nombre = document.forms['form']['nombre'].value
    let $apellido = document.forms['form']['apellido'].value
    if($nombre != '' && $apellido != ''){
    personas.push(new Persona($nombre,$apellido))
    console.log(personas)
    mostrarPersonas()
    }
    else {
        alert("No hay información que agregar")
    }
}) 
