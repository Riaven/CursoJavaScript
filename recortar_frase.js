//input texto
var primera_palabra = document.getElementById("primera");
var ultima_palabra = document.getElementById("ultima");
var frase = document.getElementById("frase");
//input boton
var boton =  document.getElementById("boton");
//agregar evento al boton
boton.addEventListener("click", recortar_frase, false);
//función
function recortar_frase(){
    var index_primera = frase.value.indexOf(primera_palabra.value);
    var index_ultima = frase.value.indexOf(ultima_palabra.value);
    //frase por consola
    (index_primera!=-1 || index_ultima!=-1) && (index_ultima>index_primera) ? console.log(frase.value.substring(index_primera, index_ultima + ultima_palabra.value.length)) : console.log("No encontrado");
}


