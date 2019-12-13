function numero_mayor (){
    var mayor = arguments[0];
    var menor = arguments[0];
    for(var i = 0; i < arguments.length; i++){
        if (mayor < arguments[i]){
            mayor = arguments[i];
        }
        if(menor > arguments[i]){
            menor = arguments[i];
        }
    }
    
    var mensaje1 = "Hello ";

   
    var mensaje2 = "World";
    var mensaje3 = mensaje1.concat(mensaje2);

    var hoja =  document.getElementById("name");
    hoja.innerHTML = `<h1> El número mayor como parámetro recibido es : ${mayor} </h1>
                      <h1> El número menor como parámetro recibido es : ${menor} </h1>
                      <h1>  ${mensaje3} </h1>`
}

numero_mayor(85,24,115,79,63,98, 1);


var elArray = new Array();
elArray.primero = 1;
elArray.segundo = 2;
elArray.tercero = 3;
elArray.cuarto = 4;

//alert(elArray.primero)
function show_me_id(){
    console.log("El id del objeto es " + this.id);
}

var miObjeto = new Object();
miObjeto.id = 98;
miObjeto.mostrarId = show_me_id


//miObjeto.mostrarId();

function mi_funcion(x){
    console.log(this.numero + x);
}

var ejemplo = new Object();
ejemplo.numero = 85
//mi_funcion.call(ejemplo, 5);


var modulos = new Array();
modulos.titulos = new Array();
modulos.titulos[0] = {rss: "Lector RSS", email: "Gestor de email", agenda: "Agenda"};
modulos.titulos[1] = {rss: "Lector prueba", email: "Gestor de prueba", agenda: "Prueba"};
//console.log(modulos)

//ejercicio 
var factura =  {
informacion : {nombre : "Empresa boluda",
               direccion : "SAn bernardo", 
               telefono : 74129963, 
               nif : "Nose"},
cliente : {nombre : "Juan", 
           direccion : "Paine", 
           telefono : 85412131, 
           nif : "Nose"},
elementos :[{descripcion : "Producto1", 
             precio : 1500, 
             cantidad : 50},
            {descripcion : "Producto2", 
             precio : 3500, 
             cantidad : 2}],
infobasica : {importetotal : 0 , 
              tipoiva : 6, 
              pago : "Efectivo"}
}

factura.calcula_total = function(){
                            var total = 0;
                            var total_elemento = 0;
                            for(var i = 0; i < this.elementos.length; i++){
                                total_elemento = this.elementos[i].precio * this.elementos[i].cantidad;
                                total += total_elemento;
                            }
                            this.infobasica.importetotal = total;
                        }
factura.calcula_total(factura)
//console.log(factura)
/*class Factura {
    constructor(id_factura, nombre_factura) {
        this.id_factura = id_factura;
        this.nombre_factura = nombre_factura;
    }
}
*/

function Factura(cliente, elementos){
    this.cliente = cliente;
    this.elementos = elementos;
}

Factura.prototype.muestraInfo = function(){
    this.cliente.mostrarId();
    this.cliente.mostrarNombre();
    for(var i = 0; i < elementos.length; i++){
        elementos[i].mostrarTipoElemento();
        elementos[i].mostrarIdElemnto();
    }
    
 
    
}
var facturita = new Factura(159, "ejemplo");

//console.log(facturita)

/*Modificar el ejercicio anterior del objeto Factura
 para crear una pseudoclase llamada Factura y que permita
  crear objetos de ese tipo. Se deben utilizar 
  las funciones constructoras y la propiedad prototype.

Para instanciar la clase, se debe utilizar la instrucción 
Factura(cliente, elementos), donde cliente también es una
pseudoclase que guarda los datos del cliente y elementos es 
un array simple que contiene las pseudoclases de 
todos los elementos que forman la factura. */

function Cliente (id_cliente, nombre_cliente){
    this.id_cliente =  id_cliente;
    this.nombre_cliente =  nombre_cliente;
}

Cliente.prototype.mostrarId = function(){
    console.log(this.id_cliente);
}
Cliente.prototype.mostrarNombre = function(){
    console.log(this.nombre_cliente); 
}
////ELEMENTOS
function Elementos(id_elemento, tipo_elemento){
    this.id_elemento = id_elemento;
    this.tipo_elemento =  tipo_elemento;
}
//Elementos
Elementos.prototype.mostrarIdElemnto = function(){
    console.log(this.id_elemento);
}

Elementos.prototype.mostrarTipoElemento = function(){
    console.log(this.tipo_elemento);
}


var elCliente = new Cliente(14, "Juan Pérez");
var elementos = [new Elementos(1, "Plato"),
                 new Elementos(2, "Olla"),
                 new Elementos(3, "Mesa"),
                 new Elementos(4, "Cuchara")];
var factoooora = new Factura(elCliente, elementos);


//console.log(factoooora.muestraInfo());
