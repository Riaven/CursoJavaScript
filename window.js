/*
function muestraMensaje(){
    alert("Han pasado 7 segundos desde que fui creado");
}
//sadas
setTimeout(muestraMensaje, 7000);*/

function mensajeIntermitente(){
    return alert("Me ves, ahora no me ves");
}

setInterval(mensajeIntermitente, 1000);