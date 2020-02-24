//mostrar url de la propia pag
var enlace = document.location.href;
var url = document.getElementById("recurso");
url.value = enlace;
//estados de la petición
var READY_STATE_UNINITIALIZED = 0; //no inicializada
var READY_STATE_LOADING = 1; // cargando
var READY_STATE_LOADED = 2; // cargada
var READY_STATE_INTERACTIVE = 3; // interactica
var READY_STATE_COMPLETE = 4; // completa

//mostrar contenidos del archivo

function descargaArchivo(){
    //nueva instancia
    var peticion_http = new XMLHttpRequest();
    //prepara respuesta ante cualquier cambio
    peticion_http.onreadystatechange = mostrarContenido;
    //abre en enlace
    peticion_http.open("GET", url.value, true);
    peticion_http.send(null);

    function mostrarContenido(){
        if(peticion_http.readyState == READY_STATE_COMPLETE && peticion_http.status ==200){
            document.getElementById("contenidos").innerHTML = peticion_http.responseText;
        }
    }

}




document.getElementById("enviar").onmousedown = descargaArchivo;