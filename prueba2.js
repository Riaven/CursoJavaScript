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
console.log(elArray.devuelve_diferentes(11));