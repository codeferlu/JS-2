function Password() {

var selecta = document.getElementById('selecta').value;
var selectb = document.getElementById('selectb').value;
var selectc = document.getElementById('selectc').value;

if (selecta == 9 && selectb == 1 && selectc == 1) {
    
    document.getElementById('mensaje').innerText = mensaje;
    mensaje.innerText = `La contraseña 1 es correcta`
    }

else if (selecta == 7 && selectb == 1 && selectc == 4){

    document.getElementById('mensaje').innerText = mensaje;
    mensaje.innerText = `La contraseña 2 es correcta`

}

else { 
    document.getElementById('mensaje').innerText = mensaje;
    mensaje.innerText = `La contraseña es incorrecta`
    }
}
    