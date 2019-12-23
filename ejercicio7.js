var enlaces = document.getElementsByTagName("a");
console.log(enlaces.length + " son el total de enlaces")
var penultimo = enlaces[enlaces.length-2];
console.log("El penúltimo enlace marca a : " + penultimo.getAttribute("href"));
var numeroEnlaces = 0;
for (var i = 0; i < enlaces.length; i++){
    if(enlaces[i].getAttribute("href") == "http://prueba"){
        numeroEnlaces += 1;
    }
}
console.log("El total de enlaces que apuntan a http://prueba son " + numeroEnlaces)
var parrafos =  document.getElementsByTagName("p");
var tercerParrafo = parrafos[2].getElementsByTagName("a").length;
console.log("Numero de enlaces del tercer párrafo " + tercerParrafo)
var enlacesCorregidos = new Array();
for (var i = 0; i < enlaces.length; i++){
    console.log(enlaces[i].getAttribute("href"));
    enlacesCorregidos.push(enlaces[i])
}
console.log("Enlaces arreglados " + enlacesCorregidos )