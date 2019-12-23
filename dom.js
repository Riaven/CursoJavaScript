var p = document.createElement("p");
document.body.appendChild(p);
var texto =  document.createTextNode("Texto que se agregó por javascript");

p.appendChild(texto);

var primer_p = document.getElementsByTagName("p")[0];

document.body.removeChild(primer_p);