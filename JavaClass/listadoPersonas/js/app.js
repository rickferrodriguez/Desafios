const content = [
    {nombre: '', apellido: ''}
]

function anadir(){
    let nombre =document.forms["form"]["nombre"];
    let apellido =document.forms["form"]["apellido"];
    console.log(nombre.value);
    console.log(apellido.value);
}
