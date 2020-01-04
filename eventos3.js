var div = document.getElementById("prueba");
div.onclick = ver_evento;
div.onmouseover = ver_evento;

function ver_evento(evento){//por defecto viene en el primer argumento, el evento que se ha realizado
    if(evento.type == "click"){ //evento se puede reemplazar por arguments[0]
        console.log("BRO YOU CLICKED :O");
    }else if(evento.type == "mouseover"){
        console.log("BROOO YOU MOVEEED");
    }
}