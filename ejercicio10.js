window.onload = function () {
    document.getElementById("enlace_1").onclick = ocultar_contenido;
    document.getElementById("enlace_2").onclick = ocultar_contenido;
    document.getElementById("enlace_3").onclick = ocultar_contenido;

    function ocultar_contenido() {
        var id =  this.id.split("_");
        var contenidos = document.getElementById("contenidos_" + id[1] );
        contenidos.hidden == false ? contenidos.hidden = true : contenidos.hidden = false;
    }
}