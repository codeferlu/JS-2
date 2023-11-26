const imagen = document.querySelector('img').classList;

function Border(){
    if (imagen.contains('border-red')) {
    imagen.remove('border-red')
}
else {
    imagen.add('border-red')
}
}
    