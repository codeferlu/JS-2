function Verificar() {
var input1 = document.getElementById('input1').value;
var input2 = document.getElementById('input2').value;
var input3 = document.getElementById('input3').value;
    if (input1 == ''){
        input1 = 0
    }
    if (input2 == ''){
        input2 = 0
    }
    if (input3 == ''){
        input3 = 0
    }

    var inputs = parseInt(input1) + parseInt(input2) + parseInt(input3);
    if (inputs <= 10) {
        document.getElementById('mensaje').value = inputs
mensaje.innerText = `Llevas ${inputs} stickers`
    }
    else {
        document.getElementById('mensaje').value = inputs
        mensaje.innerText = ` Llevas demasiados stickers.`   
    }
}