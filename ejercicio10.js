window.onload = function () {
    document.getElementById("enlace_1").onclick = ocultar_contenido;
    document.getElementById("enlace_2").onclick = ocultar_contenido;
    document.getElementById("enlace_3").onclick = ocultar_contenido;

    function ocultar_contenido() {
        var id =  this.id.split("_");
        var contenidos = document.getElementById("contenidos_" + id[1] );
        var enlace = document.getElementById("enlace_" + id[1]);
        if(contenidos.hidden == false){
            contenidos.hidden = true;
            enlace.innerHTML = "Mostrar contenido";
        }else{
            contenidos.hidden = false;
            enlace.innerHTML = "Ocultar contenido";
        }
        
        
    }
}