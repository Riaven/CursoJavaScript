//técnica para comprobar que la página está completamente cargada:

window.onload = function(){ //se agrega una función anónima

document.getElementById("input1").onkeypress = validarLargo(document.getElementById("input1"));
document.getElementById("limpiar").onclick = limpiarConsola;
document.getElementById("input1").onblur = deseleccionado;

function deseleccionado(){
    console.log("Input se ha deseleccionado ");
}

function validarLargo(input){
    return function(){ //se debe de hacer esto para evitar que la función se ejecute incorrectamente.
    var faltantes = 0;
    if (input.value.length >= 8){
        console.log("Contraseña segura");
    }else{
        faltantes = 7 - input.value.length;
        console.log("Contraseña insegura, faltan " + faltantes + " dígitos" );
    }
}
}

function limpiarConsola(){
    console.clear();
}
}