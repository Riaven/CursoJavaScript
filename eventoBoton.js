var boton =  document.getElementById("botonSensual");
var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", limpiar_consola, false);
window.addEventListener("keypress", tecla_presionada, false);
boton.addEventListener("click", sePrecionoBoton, false);
var contador = 0;

function sePrecionoBoton(){
    contador +=1;
    console.log("Botón presionadoooo :) " + contador);
    
}

function limpiar_consola(){
    console.clear();
}

function tecla_presionada(){
    console.log(arguments[0].key);
}
