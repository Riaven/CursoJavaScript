var imagen = document.getElementById("imagen");
var info = imagen.getAttribute("src");
console.log(info);
imagen.setAttribute("src", "imagenwenaoesi");
info = imagen.src;
console.log(info);


//probando con h1
var h1 = document.getElementById("h1_probando");

//h1.style.color = 'rgb(20, 19, 164)';
var color = document.defaultView.getComputedStyle(h1,'').getPropertyValue("color");
console.log(color);

//trabajando con tablas
var mi_tabla = document.getElementById("miTabla");
var numero_filas = mi_tabla.tBodies[0].rows[0].cells[0].innerHTML;
console.log(numero_filas);
//insertar row
mi_tabla.tBodies[0].insertRow(2);
//insertar cabezera
var cabezera  = document.createElement("th");
cabezera.setAttribute('scope', 'row');
cabezera.innerHTML = 'Cabezera por Javascript';
mi_tabla.tBodies[0].rows[2].appendChild(cabezera);
