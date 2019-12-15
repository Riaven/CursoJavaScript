var cadena = "Hola mundo";

String.prototype.Cortar = function(numero){
    nueva_cadena = this.substr(0, numero);
    return nueva_cadena + "...";
}

//console.log(cadena.Cortar(7));

// de un array devolver todos los elementos diferentes al indicado
var elArray =  new Array(1,8,9,6,5,4,7, 4, 11);
Array.prototype.devuelve_diferentes = function(numero){
    var array_arreglado = new Array();
    for(var i = 0; i < this.length; i++){
        if(elArray[i] != numero){
            array_arreglado.push(elArray[i]);
        }
    }
    return array_arreglado;
}
//console.log(elArray.devuelve_diferentes(11));

String.prototype.toArray = function(){
    return this.split(' ')
}


//console.log(cadena.toArray());


//try catch, para controlar errores
try{
//var prueba3 = 5/a;
}
catch(ex){
    alert(ex)
}
//console.log(prueba3)



//ejercicio

Object.prototype.implementa = function(metodo){
    console.log(this.hasOwnProperty(metodo) ? "Este objeto posee el método " + metodo : "Este objeto NO posee el método " + metodo);
    
    console.log("Término función implementa");
}

var objetazo = new Object();
objetazo.devuelveTipo = function(){
    console.log(this.valueOf);
}

objetazo.nombre = "Juanito";
//objetazo.implementa("nombre");

var parrafos = document.getElementsByTagName("p");
console.log(parrafos[0].lastChild.textContent);