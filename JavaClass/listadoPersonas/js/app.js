const content = [
    {nombre: '', apellido: ''}
]

function anadir(){
    let nombre =document.forms["form"]["nombre"];
    let apellido =document.forms["form"]["apellido"];
    content.push(nombre.value);
    console.log(content);
}
