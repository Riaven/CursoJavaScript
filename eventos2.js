// Para agregar más de algún evento a un mismo elemento, la siguiente es una buena técnica
var btn_limpiar = document.getElementById("limpiar");
var input = document.getElementById("entrada");
btn_limpiar.addEventListener("click", limpiar_consola, false);
input.addEventListener("keypress", comprobar_largo, false);

function limpiar_consola(){
    console.clear();
}

function comprobar_largo(){
    var largo = this.value.length;
    var diferencia = 7 - largo;
    var mensaje ;
    diferencia <= 0 ? mensaje = "Contraseña segura :)" : mensaje = "Contraseña insegura, faltan " + diferencia + " caracteres";
    console.log(mensaje);
}

