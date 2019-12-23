function genera() {
    //Se crean los numero random
    var numero1 = (Math.random() * 10).toFixed();
    var numero2 = (Math.random() * 10).toFixed();
    //Se obtienen los elementos de los divs correspondientes
    var div1 = document.getElementById("primero");
    var div2 = document.getElementById("segundo");
    var div3 = document.getElementById("resultado");
    
    //hijos
    var antiguo_div1 = div1.firstChild;
    var antiguo_div2 = div2.firstChild;
    //nuevos parrafos
    var parrafo_div1 = document.createElement("p");
    var parrafo_div2 = document.createElement("p");
    //ver parrafos antiguos
    var antiguo_parrafo1 = document.createTextNode(parrafo_div1.firstChild);
    var antiguo_parrafo2 = document.createTextNode(parrafo_div2.firstChild);
    //se crean los textos node
    var texto_div1 = document.createTextNode(numero1);
    var texto_div2 = document.createTextNode(numero2);
    //Se agrega al parrafo el texto
    parrafo_div1.appendChild(texto_div1);
    parrafo_div2.appendChild(texto_div2);
    //Se agregar los textos a los parrafos
    if(antiguo_div1 == null ){
        div1.appendChild(parrafo_div1);
    }else{
        div1.replaceChild(parrafo_div1, antiguo_div1);
    }

    if(antiguo_div2 == null){
        div2.appendChild(parrafo_div1);
    }else{
        div2.replaceChild(parrafo_div2, antiguo_div2);
    }

    
    

    div1.appendChild(parrafo_div1);
    div2.appendChild(parrafo_div2);
    //comprobar la función
    console.log(numero1 + "    " + numero2);
}

function compara() {
    //obtener los divs
    var div1 = document.getElementById("primero");
    var div2 = document.getElementById("segundo");

    var div_resultado = document.getElementById("resultado");
    var resultado = document.createElement("p");
    var antiguo_child = div_resultado.firstChild;
    var texto_resultado;
    //parrafos de cada uno de los divs
    var parrafo_div1 = div1.firstChild;
    var parrafo_div2 = div2.firstChild;
    //obtener info de los parrafos y comparar

    if (parseInt(parrafo_div1.textContent) > parseInt(parrafo_div2.textContent)) {
        texto_resultado = document.createTextNode(parrafo_div1.textContent);
        div1.removeChild(parrafo_div1);
    } else {
        texto_resultado = document.createTextNode(parrafo_div2.textContent);
        div2.removeChild(parrafo_div2);
    }
    resultado.appendChild(texto_resultado);
    if (antiguo_child == null) {
        div_resultado.appendChild(resultado);
    } else {
        div_resultado.replaceChild(resultado, antiguo_child);
    }


    console.log(resultado.textContent);


}